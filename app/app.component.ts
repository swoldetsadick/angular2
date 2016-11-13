import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { RaceDataService } from './races/race.service';
import { HttpModule } from '@angular/http';

@Component({
	selector: 'racing-app',
	template: 
	`
	<h1>{{heading}}</h1>
	<my-races></my-races>
	`,
	providers: [RaceDataService, HttpModule]
})

export class AppComponent {
	heading = "Ultra Racing Schedule";
}