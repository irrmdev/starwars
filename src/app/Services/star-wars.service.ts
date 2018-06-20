import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../domain/planet';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http:HttpClient) { }

  getPlanets(search: string):Observable<Planet[]>{
    const url = "https://swapi.co/api/planets/";
    return this.http.get(url,{})
    .pipe(map(r => this.toPlanetArray(r)))    
    .pipe(map(r => this.filterByName(r,search)));
  }

  toPlanetArray(r:any):Planet[]{
    return <Planet[]> r.results;
  }

  filterByName(ps:Planet[], search:string):Planet[]{
    if(!search){
      return ps;
    }
    return ps.filter (p=>{
    return p.name.toLowerCase().includes(search.toLowerCase()) 
    || p.climate.toLowerCase().includes(search.toLowerCase());
    });
  }
  //getPlanet (id:string):Observable<Planet>{}
  //getPeople()
  //getFilms()
}
