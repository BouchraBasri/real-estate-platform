import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  searchInput: string = '';

  onSearch(): void {
    if (this.searchInput.trim()) {
      console.log(`Searching for: ${this.searchInput}`);
      // Add your search logic here
    } else {
      console.log('Please enter a valid search query.');
    }
  }
}
