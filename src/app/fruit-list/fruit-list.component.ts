import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Fruit } from '../_models/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent implements OnInit {
  fruit: Fruit[] = [
    {
      id: 1,
      name: 'Apple',
      description: 'appledesc',
    },
    {
      id: 2,
      name: 'Strawberry',
      description: 'strawberry description',
    },
    {
      id: 3,
      name: 'Banana',
      description: 'strawberry description',
    },
  ];

  displayedColumns: string[] = ['name', 'description'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {}

  ngOnInit(): void {}
}
