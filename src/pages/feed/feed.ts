import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public listaFilmes= new Array;

  public objFeed = {
    nome: 'Bruno',
    data: '18/07/2018',
    titulo: 'Titulo teste',
    descricao: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) { 
  }

  public somaNumeros(num1:number, num2:number): void{
    //alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.movieProvider.getLastestMovies().subscribe(
      data => {
        const response = (data as any);
        const objRetorno = JSON.parse(response._body);
        this.listaFilmes = objRetorno.results;
        //console.log(objRetorno.results)
      },
      error => {
        console.log(error)
      }
    );
  }

}
