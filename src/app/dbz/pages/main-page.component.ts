import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
    {
      name: 'Trunks',
      power: 8000,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main Page Component');
    console.log(character);
  }
}
