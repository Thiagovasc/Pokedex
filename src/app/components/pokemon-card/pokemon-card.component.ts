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
  id: number = 0;
  pokemontype: any[] = [];
  pktypes: any[] = [];


  constructor(private pokeapiService: PokeapiService){}
  
  async ngOnInit() {

    let data = localStorage.getItem(`${this.pokemon.name}: `);
    if (data) {

      let pokemonData = JSON.parse(data);
      this.spritesUrl = pokemonData.spritesUrl;
      this.id = pokemonData.id;
      this.pktypes = pokemonData.pokeTypes
    } else {

      this.pokeapiService.catchInfobyId(this.pokemon.url)
      .subscribe((pokedata) => {
        this.spritesUrl = pokedata.sprites['front_default'];
        this.id = pokedata.id;
        this.pokemontype = pokedata.types
        this.pktypes = this.pokemontype.map((types) => types['type'].name)

        let pokemonData = { 
          id: this.id,
          spritesUrl: this.spritesUrl, 
          pokeTypes: this.pktypes 
        }

        localStorage.setItem(`${this.pokemon.name}: `, JSON.stringify(pokemonData));
      });
    }
  }

}
