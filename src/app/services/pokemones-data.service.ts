import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonesDataService {

  private API_POKEMON = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public getPokemon(): Observable<any> {
    return this.http.get(this.API_POKEMON);
  }

}
