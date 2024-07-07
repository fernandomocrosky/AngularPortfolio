import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Mundo Mapping | Apr 2024 - Present',
      },
      text: "<p>Durante meu período na Mundo mapping, realizei manuntenção de sua plataforma, correção de bugs, implementação de novas features e integração com API's com a plataforma</p>",
    },
  ]);
}
