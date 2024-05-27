import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { PizzaDetails } from '../pizzaDetails';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  credentials = {

    pizzaName : '',
    pizzaType : '',
    pizzaPrice : ''
  }
  constructor(private pizzaService:PizzaService) { }

  pizzaDetails: Array<PizzaDetails> | undefined; 
  ngOnInit(): void 
  {
    this.getPizza();
  }

  getPizza(){

    this.pizzaService.getAllPizza().subscribe(data=>{
      this.pizzaDetails=data;
    },error=>{
      console.log(error);
    })
  }

  onSubmit(){

    if((this.credentials.pizzaName != '' && this.credentials.pizzaType != '' && this.credentials.pizzaPrice != '') && (this.credentials.pizzaName != null && this.credentials.pizzaType != null && this.credentials.pizzaPrice != null))
    {
      this.pizzaService.savePizza(this.credentials).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error)
      })
    }

    else{
      alert("Credentials cannot be empty")
    }
  }

}
