import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaDetails } from './pizzaDetails';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:9300/api/v2/pizza";

  getAllPizza():Observable<Array<PizzaDetails>>{
    return this.http.get<Array<PizzaDetails>>(`${this.baseurl}/getPizza`);
  }

  savePizza(pizzaDetails:PizzaDetails):Observable<object>{
    return this.http.post(`${this.baseurl}/save`,pizzaDetails);
  }
}
