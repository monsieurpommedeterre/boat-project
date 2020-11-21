import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.scss']
})

export class BoatCardComponent implements OnInit {
  @Input() theBoat: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
