import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { KeycloakService } from 'keycloak-angular';
import { Fruit } from '../_models/fruit';
import { FruitService } from '../_services/fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent implements OnInit {
  public fruits: Fruit[];

  displayedColumns: string[] = ['name', 'description'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private fruitService: FruitService,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit(): void {
    this.getFruit();
  }

  public getFruit(): void {
    this.fruitService.getFruit().subscribe(
      (res: Fruit[]) => {
        this.fruits = res;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  logout() {
    this.keycloakService.logout();
  }

}
