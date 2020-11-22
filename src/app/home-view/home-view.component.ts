import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  
  boats: any;
  inputValue: string;
  results: any = [];
  boat_names: any = [];
  boat_types: any = ["voilier", "catamaran", "bateau_moteur", "semi_rigide", "peniche", "jet_ski", "yatch"];
  allBoats: any;

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
    var ref2 = this.boat_types;
    if(event!='') {
      var myReg = new RegExp(`${event}`,"gi");
      for(var i=0; i<ref.length; i++){
        if(ref[i].match(myReg)){
        this.results.push(ref[i]);
        }
      }

      // j'ajoute la gestion des types de bateau dans l'autocomplete
      for(var i=0; i<ref2.length; i++){
        if(ref2[i].match(myReg)){
        this.results.push(ref2[i]);
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

  onSubmit(form: NgForm) {
    // j'initialise les bateaux à nouveau pour que la recherche ai bien lieu sur tous les bateaux, au cas où une précédente recherche avait déjà été effectuée
    this.boats = this.boatService.boats;

    // je filtre par nom de bateau
    var newArray = this.boats.filter(function (el) {
      return el.boat_name === form.value['search_input'] || el.boat_type === form.value['search_input']
    });
    if(newArray.length > 0) {
      this.boats = newArray;
    }
  }

}
