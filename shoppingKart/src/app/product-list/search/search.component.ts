import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText = "Mens wear 1";


  updateSearchText(event: any){ //catches the complete event object
    this.searchText = event.target.value;
  }
}

