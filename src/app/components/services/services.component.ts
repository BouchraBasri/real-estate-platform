import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: 'home',
      title: 'Quality Properties',
      description: 'Far far away, behind the word mountains...',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'person',
      title: 'Top Rated Agent',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'apartment',
      title: 'Property for Sale',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'house',
      title: 'House for Sale',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'home',
      title: 'Quality Properties',
      description: 'Far far away, behind the word mountains...',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'person',
      title: 'Top Rated Agent',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'apartment',
      title: 'Property for Sale',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
    {
      icon: 'house',
      title: 'House for Sale',
      shortDescription:
        'Far far away, behind the word mountains...',
      fullDescription:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      expanded: false,
    },
  ];
  toggleExpanded(service: any): void {
    service.expanded = !service.expanded; // Toggle the expanded state
  }
}
