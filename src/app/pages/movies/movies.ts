import { Component } from '@angular/core';
import { MovieService } from '../../services/movies';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(private movieService:MovieService){};

  searchTitle: string = '';
  movies: any[] = [];
  errorMessage: string = '';

  search(){
    if(!this.searchTitle.trim()) return;

    this.movieService.searchMovies(this.searchTitle).subscribe({
      next:(response) => {
        if(response.Search){
          this.movies = response.Search;
          this.errorMessage = '';
        }else {
          this.movies = []
          this.errorMessage = response.Erorr || 'Not found';
        };
      },
      error: (response) =>{
        this.errorMessage = (`Any error: ${response['Error']}`);
        this.movies = [];
      }
    })
  }
}
