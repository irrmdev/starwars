import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../domain/planet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http:HttpClient) { }

  getPlanets():Observable<Planet[]>{
    const url = "https://swapi.co/api/planets/";
    return this.http.get(url,{})
    .pipe(map(r => this.toPlanetArray(r)));

  }

  toPlanetArray(r:any):Planet[]{
    return <Planet[]> r.results;
  }

  //getPlanet (id:string):Observable<Planet>{}
  //getPeople()
  //getFilms()
}
