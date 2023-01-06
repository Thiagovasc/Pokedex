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

  getTypeColor(type: string) {
    switch (type) {
      case 'normal':
        return '#A8A77A'
      case 'fire':
        return '#EE8130'
      case 'water':
        return '#6390F0'
      case 'electric':
        return '#F7D02C'
      case 'grass':
        return '#7AC74C'
      case 'ice':
        return '#96D9D6'
      case 'fighting':
        return '#C22E28'
      case 'poison':
        return '#A33EA1'
      case 'ground':
        return '#E2BF65'
      case 'flying':
        return '#A98FF3'
      case 'psychic':
        return '#F95587'
      case 'bug':
        return '#A6B91A'
      case 'rock':
        return '#B6A136'
      case 'ghost':
        return '#735797'
      case 'dragon':
        return '#6F35FC'
      case 'dark':
        return '#705746'
      case 'steel':
        return '#B7B7CE'
      case 'fairy':
        return '#D685AD'

      default:
        return {};
    }
  }

}
