import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetDataService } from '../getdata.service';
import { HttpModule } from '@angular/http';
import { Response } from '@angular/http';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	providers: [GetDataService]
})

export class SearchComponent implements OnInit {
	data: Object = { empty: true };
  	search: String = '';
  	dataLength: Number = 0;
	
	constructor(private dataService: GetDataService, private http: HttpClient, private router: Router){}

	ngOnInit(): void {}

	selectedF(val) {
		setTimeout(() => {
			if (this.search == val) {
				this.dataService.getList(val).subscribe(
					(response: Response) => {
						if (response.json().Response == 'True') {
							let res = response.json().Search;
							this.dataLength = res.length;
							let filmId = [];
							for (let i = 0; i < res.length; i++) {
								let dataId = res[i].imdbID;
								filmId.push(dataId);
							}
              				this.filmListDetailF(filmId);
						} else {
							this.data = {empty: true}
						}
					},
					(error) => console.log(error)
				);
			}
		}, 1500);
  	}
  
  	filmListDetailF(filmId) {
		let newarr = [],
			length = filmId.length;
		for (let i = 0; i < length; i++) {
			this.dataService.getFilmShort(filmId[i]).subscribe(
				(response) => {
					newarr.push(response.json());
					if (i === length - 1) {
						this.data = newarr;
					} else {
						console.log('salih');
					}
				},
				(error) => console.log(error)
			);
		}
	}
}
