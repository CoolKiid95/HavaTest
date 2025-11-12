import { Component, EventEmitter, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() queryChange = new EventEmitter<string>();

  search = new FormControl('', {nonNullable:true});

  constructor(){
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(value=>this.queryChange.emit(value.trim()));
  }

  onSubmit(ev:Event){
    ev.preventDefault();
  }
  clear(){this.search.setValue('');}
}
