import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteShortenerPipe } from '../../pipes/note-shortener-pipe';
@Component({
  selector: 'app-note-detail',
  imports: [CommonModule, NoteShortenerPipe],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
})
export class NoteDetail {

  noteId!: number;
  note: any;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ){
    this.route.params.subscribe(params => {
      this.noteId = + params['id'];
      this.note = this.noteService.getNotes()().find( n => n.id == this.noteId);
    })
  }
}
