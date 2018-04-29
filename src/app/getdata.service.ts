import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetDataService {
	rootUrl: String = 'http://www.omdbapi.com/';
	apiKey: String = 'bec23c07';
	constructor(private http: Http) { }

	getList(searchVal) {
		return this.http.get(this.rootUrl + '?s=' + searchVal + '&apikey=' + this.apiKey);
	}

	getFilm(filmId) {
		return this.http.get(this.rootUrl + '?i=' + filmId + '&plot=full' + '&apikey=' + this.apiKey);
	}

	getFilmShort(filmId) {
		return this.http.get(this.rootUrl + '?i=' + filmId + '&plot=short' + '&apikey=' + this.apiKey);
	}

}
