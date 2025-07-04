import { Component, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SheringDataService } from '../../services/shering-data.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  
  items: CartItem[] = [];

  total = 0;
  


  constructor(private sheringDataService:SheringDataService, private router: Router){
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];

    

  }
  
  onDeleteCart(id: number) {
   this.sheringDataService.idProductEventEmitter.emit(id);
  }

}
 