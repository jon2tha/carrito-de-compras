import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { SheringDataService } from '../../services/shering-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

   products!: Product[];



  constructor( private productservice:ProductService, private sheringDataservice:SheringDataService ,private router:Router){
    if(this.router.getCurrentNavigation()?.extras.state){
      this.products = this.router.getCurrentNavigation()?.extras.state!['products'];
      


    }
  }
  ngOnInit(): void {
    if(!this.products){
      this.products = this.productservice.findAll();

    }
  
  }



  onAddCart(product: Product) {
    this.sheringDataservice.productEventEmitter.emit(product);
  }

}
