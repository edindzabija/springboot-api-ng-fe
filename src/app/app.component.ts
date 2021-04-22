import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fruit } from './_models/fruit';
import { FruitService } from './_services/fruit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fruit-app';

  public fruits: Fruit[];

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
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
}
