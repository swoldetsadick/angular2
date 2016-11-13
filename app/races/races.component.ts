import { Component } from '@angular/core';

import { Race } from './race';
import { RaceDataService } from './race.service';

@Component({
	selector: 'my-races',
	templateUrl: 'app/races/races.component.html',
	styleUrls: ['app/races/races.component.css']
})

export class RacesComponent {
	heading = "Ultra Racing Schedule";

	cash = 10000;

	races: Race [];

	constructor(private raceService: RaceDataService) {}

	ngOnInit() {
		this.raceService.getRacesData().subscribe(data => this.races = data);
	}

	totalCost() {
		let sum = 0;
		if(Array.isArray(this.races)){
			for(let race of this.races){
				if(race.isRacing){
					sum += race.entryFee;
				}
			}
		}
		return sum;
	};

	cashLeft() {
		return this.cash - this.totalCost();
	};

	enterRace(race: Race) {
		if (this.cashLeft() > race.entryFee) {
			race.isRacing = true;
		} else {
			alert("You don't have enough cash");
		}
	}

	cancelRace(race: Race) {
		race.isRacing = false;
	}
}