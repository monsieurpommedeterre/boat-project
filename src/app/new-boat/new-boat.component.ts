import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-new-boat',
  templateUrl: './new-boat.component.html',
  styleUrls: ['./new-boat.component.scss']
})

@Injectable()
export class NewBoatComponent implements OnInit {

  displayFormPart0: boolean;
  displayFormPart1: boolean;
  displayFormPart2: boolean;
  tempBoat: any = {};

  constructor(
    private boatService: BoatService,
    private router: Router) { }

  ngOnInit(): void {
    this.displayFormPart0=this.boatService.newBoatFormDisplay.part0;
    this.displayFormPart1=this.boatService.newBoatFormDisplay.part1;
    this.displayFormPart2=this.boatService.newBoatFormDisplay.part2;
  }

  // Fonction d'enregistrement du formulaire partie 0
  onSubmit0(form: NgForm) {
    this.displayFormPart0=false;
    this.displayFormPart1=true;
    console.log(form.value['owner_type']);
    this.tempBoat.owner_type=form.value['owner_type'];
  }

  // Fonction d'enregistrement du formulaire partie 1
  onSubmit1(form: NgForm) {
    this.displayFormPart1=false;
    this.displayFormPart2=true;
    console.log(form.value['boat_type']);
    this.tempBoat.boat_type=form.value['boat_type'];
  }

  // Fonction d'enregistrement du formulaire partie 2
  onSubmit2(form: NgForm) {
    this.tempBoat.boat_name=form.value['boat_name'];
    this.tempBoat.boat_model=form.value['boat_model'];
    this.tempBoat.owner_name=form.value['owner_name'];
    this.tempBoat.boat_description=form.value['boat_description'];
    this.tempBoat.boat_img=`assets/img/${this.tempBoat.boat_type}.jpg`;
    console.log(form.value['boat_img'])
    this.boatService.boats.push(this.tempBoat);

    // Je sauvegarde le nouveau tableau en local storage pour conserver l'info en cas de rafraichissement de la page ou coupure du serveur. Hors de cet exercice, cela peut aussi servir à conserver l'info en cas d'erreur d'enregistrement en bdd.
    localStorage.setItem('boatsList', JSON.stringify(this.boatService.boats));

    // On redirige sur la home
    this.router.navigate(['/']);
  }
  

}
