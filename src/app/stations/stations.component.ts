import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-stations]',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(event : Event) {

    //console.log(event);
    console.log(event.srcElement.id);

  }
}
