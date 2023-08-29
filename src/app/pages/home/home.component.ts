import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	games = dataFake.map((game) => ({
		...game,
		price: new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(game.price),
	}));
}
