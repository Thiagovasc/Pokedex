import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.pokeapiService.catchAll()
    .subscribe( (response) => {
      this.pokemons = response.results   
    })
  }
}

