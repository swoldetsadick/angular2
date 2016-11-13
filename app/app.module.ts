import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { RacesComponent} from './races/races.component';
import { RaceDataService } from './races/race.service';
import { HttpModule } from '@angular/http';



@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
    	HttpModule 
	],
	declarations: [ 
		AppComponent,
		RacesComponent 
	],
    providers: [
    	RaceDataService
    ],
	bootstrap: [ 
		AppComponent,
		RacesComponent
	]
})
export class AppModule {}
