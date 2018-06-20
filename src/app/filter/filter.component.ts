import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
searchText:string;
@Output() buscar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
busca(){
  this.buscar.emit(this.searchText);
}
}
