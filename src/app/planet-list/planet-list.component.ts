import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Planet } from '../domain/planet';
import { map } from 'rxjs/operators';
import { StarWarsService } from '../Services/star-wars.service';


@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit, OnChanges {
planets:Planet[];
planetsFiltered:Planet[];
error:string;

@Input() search:string;

  constructor(private stService:StarWarsService) { }

  ngOnInit() {
    this.loadData();
    
  }

loadData(){
  this.stService.getPlanets(this.search).subscribe(
    data=>this.onData(data), 
    error=>this.onError(error)
  )
}

ngOnChanges(changes:any){
  this.loadData();
}

  private onData(data: Planet[]):void{
this.planets =data;
this.error = null;
  }
  private onError(error:any):void{
    if (error && error.message){
      this.error = error.message;
    } else{
      this.error = error.toString();
    }
  }
}
