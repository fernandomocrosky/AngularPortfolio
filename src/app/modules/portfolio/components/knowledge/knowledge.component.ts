import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/images/icons/html.svg',
      alt: 'Icone HTML5',
    },
    {
      src: 'assets/images/icons/css.svg',
      alt: 'Icone CSS3',
    },
    {
      src: 'assets/images/icons/js.svg',
      alt: 'Icone JavaScript',
    },
    {
      src: 'assets/images/icons/node.svg',
      alt: 'Icone NodeJS',
    },
    {
      src: 'assets/images/icons/go.svg',
      alt: 'Icone Golang',
    },
    {
      src: 'assets/images/icons/python.svg',
      alt: 'Icone Python',
    },
    {
      src: 'assets/images/icons/react.svg',
      alt: 'Icone React',
    },
    {
      src: 'assets/images/icons/angular.svg',
      alt: 'Icone Angular',
    },
    {
      src: 'assets/images/icons/laravel.svg',
      alt: 'Icone Laravel',
    },
    {
      src: 'assets/images/icons/docker.svg',
      alt: 'Icone Docker',
    },
  ]);
}
