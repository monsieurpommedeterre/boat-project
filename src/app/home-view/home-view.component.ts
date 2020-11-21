import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  boats: object;
  constructor(private boatService: BoatService) { 
    this.boats = this.boatService.boats;
  }

  ngOnInit(): void {
  }

}
