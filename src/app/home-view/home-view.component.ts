import { Component, OnInit } from '@angular/core';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  
  boats: object;
  inputValue: string;
  results: any = [];
  boat_names: any = [];

  constructor(private boatService: BoatService) {  
    for(var i=0; i<this.boatService.boats.length; i++){
      this.boat_names.push(this.boatService.boats[i].boat_name);
    }
  }

  ngOnInit(): void {
    this.boats = this.boatService.boats;
    console.log("this", this.boats)
  }

  didModify(event: string) {
    this.results = [];

    var ref = this.boat_names;
    if(event!='') {
      var myReg = new RegExp(`${event}`,"gi");
      for(var i=0; i<ref.length; i++){
        if(ref[i].match(myReg)){
        this.results.push(ref[i]);
        }
      }
    } else {
      console.log("champ vide");
    }
  }

  selectResult(result) {
      this.inputValue = result;
      this.results = [];
  }

}
