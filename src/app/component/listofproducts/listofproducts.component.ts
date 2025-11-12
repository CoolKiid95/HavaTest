import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardsComponent } from '../product-cards/product-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../services/products.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listofproducts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardsComponent, SearchbarComponent, FormsModule],
  templateUrl: './listofproducts.component.html',
  styleUrl: './listofproducts.component.css'
})
export class ListofproductsComponent {
private productsService = inject(ProductsService);
//Estados de productos
allProducts: any[] = [];
products: any[] = [];
visible: any[] = [];
loading = true;
error = '';
query = '';

//paginación
page = 1;
pageSize : number = 12;
pageSizeOptions = [8,12,16,24];

placeholders = Array.from({length:this.pageSize});

ngOnInit(): void {
  this.load();
}

//Llamado a la API con filtro para searchbar
load() {
  this.loading=true;
  this.error='';
  this.productsService.getProducts().subscribe({
    next: data=>{
      this.allProducts = Array.isArray(data) ? data :[];
      this.applyFilter();
      this.loading=false;
    },
    error: err=>{
      this.error = err?.message || 'No se pueden cargar los productos.';
      this.loading=false;
    }
  })
}

//busqueda
onQuery(term:string){
  this.query=term || '';
  this.applyFilter();
}

applyFilter(){
  const t = this.query.trim().toLowerCase();
  const base = this.allProducts;
  this.products = !t
  ? base.slice()
  : base.filter(p => {
      const title = (p.title || '').toLowerCase();
      const cat = (p.category || '').toLowerCase();
      return t.split(/\s+/).filter(Boolean).every(w=> title.includes(w) || cat.include(w));
  })
  this.page = 1;
  this.updatePlaceholders();
  this.updateVisible();
}

//ayudantes de paginación
get totalItems(): number {return this.products.length}
get totalPages(): number {return Math.max(1, Math.ceil(this.totalItems / this.pageSize))}
get startIndex(): number { return (this.page - 1) * this.pageSize}
get endIndex(): number { return Math.min(this.startIndex + this.pageSize, this.totalItems)}
get pageSlice(): any[] {return this.products.slice(this.startIndex, this.endIndex)}

updateVisible(){
  this.visible= this.products.slice(this.startIndex, this.endIndex);
}

goTo(page: number){
  const p = Math.min(Math.max(1, page), this.totalPages);
  if (p !== this.page) {
    this.page = p;
    this.updateVisible();
  };
}
next(){this.goTo(this.page+1)}
prev(){this.goTo(this.page-1)}

changePageSize(size:number){
  this.pageSize=size;
  this.page = 1;
  this.updatePlaceholders();
  this.updateVisible();
}
updatePlaceholders(){
  this.placeholders=Array.from({length:this.pageSize})
}
trackById = (_:number, item:any) => item?.id ?? _;
}
