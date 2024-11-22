import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() shortDescription: string = '';
  @Input() fullDescription: string = '';
  @Input() expanded: boolean = false;

  toggleExpanded(event: Event): void {
    event.preventDefault();
    this.expanded = !this.expanded;
  }
}
