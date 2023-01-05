import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  allpokemos_url: string = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

  constructor(private http: HttpClient) { }

  public catchAll():Observable<any>{
    return this.http.get<any>(this.allpokemos_url)
  }

  public catchInfobyId(poke_url_id: string){
    return this.http.get<any>(poke_url_id)
  }
}
