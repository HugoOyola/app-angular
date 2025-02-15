import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Krillin',
      power: 5000,
    },
  ];
}
