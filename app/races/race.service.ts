import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Race } from './race';

@Injectable()
export class RaceDataService {

	constructor(private http: Http) {}

	getRacesData(){
		return this.http.get('http://raw.githubusercontent.com/codeschool/WatchUsBuild-Angular2App/master/app/races.json').map(response => <Race[]>response.json().racesData);
	}
}