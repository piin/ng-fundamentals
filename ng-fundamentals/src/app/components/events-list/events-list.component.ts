import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1  = {
    id: 1,
    name: "Angular example",
    date: "19/1/2018",
    time: "10:00 am",
    price: "19",
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "GDL",
      country: "Mexico "
    }
  }

  constructor() { }

  ngOnInit() {
  }


}
