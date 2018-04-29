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
	
	constructor(private dataService: GetDataService, private http: HttpClient, private router: Router){}

	ngOnInit(): void {}

	selectedF(val) {
		setTimeout(() => {
			if (this.search == val) {
				this.dataService.getList(val).subscribe(
					(response: Response) => {
						if (response.json().Response == 'True') {
							let res = response.json().Search;
							this.data = res;
						} else {
							this.data = {empty: true}
						}
					},
					(error) => console.log(error)
				);
			}
		}, 1500);
	}

}
