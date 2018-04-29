import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'twoFilms'
})
export class TwoFilmsPipe implements PipeTransform {

	transform(data: any, piece: any): any {
		return data.slice(0, 2);
	}

}
