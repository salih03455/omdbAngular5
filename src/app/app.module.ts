import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchComponent } from './search/search.component';
import { TwoFilmsPipe } from './search/two-films.pipe';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const appRoutes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'list/:val', component: FilmListComponent },
	{ path: 'detail/:id', component: FilmDetailComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		FilmListComponent,
		SearchComponent,
		TwoFilmsPipe,
		FilmDetailComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
