import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly apiUrl = 'http://localhost:3000/notes';
  protected readonly notes = signal<Note[]>([]);

  constructor(private http: HttpClient){};
  fetchNotes(){
    this.http.get<Note[]>(this.apiUrl).subscribe((data) => {
      this.notes.set(data);
    })
  };
  getNotes(){
    return this.notes;
  };

  addNote(title: string, content: string){
    const newNote: Note = {
      id:Date.now(),
      title: title,
      content: content,
      createdAt: new Date()
    };
    this.http.post<Note>(this.apiUrl, newNote).subscribe((note) => {
      this.notes.update(notes => [...notes, newNote]);
    });
  };
}
