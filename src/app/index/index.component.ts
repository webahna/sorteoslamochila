import { Component } from '@angular/core';
import { ListAvailableComponent } from '../list-available/list-available.component';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    console.log('Hala Madrid');
  }

  goToComprar() {
    this.router.navigate(['comprar']);
  }
}
