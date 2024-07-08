import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/experiences.interface';
import { IProject } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/images/MataMonstro.png',
      alt: 'Projeto Full Stack',
      title: 'Vida fullstack',
      width: '100px',
      height: '100px',
      description:
        '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in sed hic! Quod, rem sapiente rerum id ab expedita, libero, quos ut excepturi culpa dolores eaque incidunt totam debitis ducimus!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/fernandomocrosky/kill-monster-project-VueJs',
        },
      ],
    },
  ]);
}
