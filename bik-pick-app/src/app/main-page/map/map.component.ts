import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() markers: any;
  center:any;
  constructor() { }

  ngOnInit(): void {
    this.center = {
      lat: 51.7655807, lng: 19.4540603
    }
  }

}
