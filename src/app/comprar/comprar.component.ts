import { Component, OnInit, ViewChild } from '@angular/core';
import { ListAvailableComponent } from '../list-available/list-available.component';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss'],
  providers: [ListAvailableComponent]
})
export class ComprarComponent implements OnInit {

  
  constructor(private listAvailable: ListAvailableComponent){}
  
  ngOnInit() {
  console.log(this.listAvailable.selectedNumbers)
  }

}


