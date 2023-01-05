import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;
  @Input() pokeinfo: any;
  spritesUrl: string = "";


  constructor(private pokeapiService: PokeapiService){}
  ngOnInit(){
    this.pokeapiService.catchInfobyId(this.pokemon.url)
    .subscribe((pokedata) => {
      this.spritesUrl = pokedata.sprites['front_default']
    })


  }

}
