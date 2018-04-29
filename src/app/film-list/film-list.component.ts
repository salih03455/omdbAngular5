import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../getdata.service';
import { HttpModule } from '@angular/http';
import { Response } from '@angular/http';

@Component({
	selector: 'app-film-list',
	templateUrl: './film-list.component.html',
	styleUrls: ['./film-list.component.scss'],
	providers: [GetDataService]
})
export class FilmListComponent implements OnInit {
	
	data : Object = [];
	dataLength: Number = 0;
	searchVal: String = '';

	constructor(private dataService: GetDataService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
	
	ngOnInit() {

		this.searchVal = this.route.snapshot.params['val'];

		this.dataService.getList(this.searchVal).subscribe(
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
					this.data = { empty: true };
				}
			},
			(error) => console.log(error)
		);
	}

	filmListDetailF(filmId) {
		let newarr = [];
		for (let i = 0; i < filmId.length; i++) {
			this.dataService.getFilmShort(filmId[i]).subscribe(
				(response: Response) => {
					let newitem = response.json();
					newarr.push(newitem);
				},
				(error) => console.log(error)
			);
		}
		this.data = newarr;
		console.log(this.data);
	}

	onLoadHome() {
		this.router.navigate(['']);
	}

}
