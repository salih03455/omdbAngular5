import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../getdata.service';
import { HttpModule } from '@angular/http';
import { Response } from '@angular/http';

@Component({
	selector: 'app-film-detail',
	templateUrl: './film-detail.component.html',
	styleUrls: ['./film-detail.component.scss'],
	providers: [GetDataService]
})
export class FilmDetailComponent implements OnInit {
	data: Object = {};
	film_id: String;

	constructor(private dataService: GetDataService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.film_id = this.route.snapshot.params['id'];
	
		this.dataService.getFilm(this.film_id).subscribe(
			(response) => {
				this.data = response.json();
			},
			(error) => console.log(error)
		);
	}

	onLoadHome() {
		this.router.navigate(['']);
	}

}
