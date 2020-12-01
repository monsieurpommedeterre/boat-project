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
  boatsToDisplay: any = [];
  boat_names: any = [];
  // Le boat types ici est inutile, il faudrait plutôt boucler sur les bateaux et en déduire une liste de boat_types (supprimer les doublons)
  boat_types: any = ["voilier", "catamaran", "bateau_moteur", "semi_rigide", "peniche", "jet_ski", "yatch"];
  //allBoats: any;

  constructor(private boatService: BoatService) {

    // Au moment de la construction de mon composant, je stocke les noms des bateaux dans le tableau boat_names
    for(var i=0; i<this.boatService.boats.length; i++){
      this.boat_names.push(this.boatService.boats[i].boat_name);
    }

  }

  ngOnInit(): void {
    this.boats = this.boatService.boats;
    console.log("this", this.boats)
  }

  // FONCTION EXECUTEE DES LE CHANGEMENT DU CONTENU DU CHAMPS DE RECHERCHE EN HOME
  didModify(event: string) {
    this.results = [];
    this.boatsToDisplay = [];
    var ref = this.boat_names;
    var ref2 = this.boat_types;
    console.log("autres bateaux", this.boatsToDisplay);

    // Je vérifie qu'il y a bien une saisie (si jamais j'efface une saisie précédente)
    if(event!='') {

      // Je parcours ma var de référence pour les noms des bateaux
      var myReg = new RegExp(`${event}`,"gi");
      for(var i=0; i<ref.length; i++){
        if(ref[i].match(myReg)){
        this.results.push(ref[i]);
        }
      }

      // J'ajoute la gestion des types de bateau dans l'autocomplete
      for(var i=0; i<ref2.length; i++){
        if(ref2[i].match(myReg)){
        this.results.push(ref2[i]);
        }
      }
      // Pour modifier l'affichage en temps réel
      // Je parcours tous les bateaux (je repars du service)
      for(var i=0; i<this.boatService.boats.length; i++){
        // Si j'ai un match sur le nom ou sur le type, je push ce bateau dans mon tableau de bateaux "temporaire"
        if(this.boatService.boats[i].boat_name.match(myReg) || this.boatService.boats[i].boat_type.match(myReg)){
            console.log("match display avec le bateau index", i);
            this.boatsToDisplay.push(this.boatService.boats[i]);
        }
      }
      this.boats = this.boatsToDisplay;

    } else {
      //si mon champs est vide, j'affiche tous les bateaux
      this.boats = this.boatService.boats;
    }
  }

  // FONCTION DE CLICK SUR UN DES RÉSULTATS DE L'AUTOCOMPLETE POUR REMPLIR LE CHAMP INPUT AVEC LA VALEUR CLIQUÉE
  selectResult(result) {
      this.inputValue = result;
      this.results = [];
  }

  // FONCTION DE VALIDATION DU CHAMPS DE RECHERCHE EN HOME
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
