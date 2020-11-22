import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { BoatCardComponent } from './boat-card/boat-card.component';
import { NewBoatComponent } from './new-boat/new-boat.component';
import { BoatService } from './services/boat.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BoatDetailsComponent } from './boat-details/boat-details.component';

const appRoutes: Routes = [
  { path: 'new-boat', component: NewBoatComponent },
  { path: 'bateau/:id', component: BoatDetailsComponent },
  { path: '', component: HomeViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    BoatCardComponent,
    NewBoatComponent,
    BoatDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    BoatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
