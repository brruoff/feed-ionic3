import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private keyApi = "?api_key=AAAAAAAA&language=pt-BR";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies(){
    return this.http.get(this.baseUrl + '/movie/popular' + this.keyApi);
  }

}
