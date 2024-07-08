import { Component, inject, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/experiences.interface';
import { IProject } from '../../interfaces/projects.interfaces';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/images/MataMonstro.png',
      alt: 'Projeto Mata Monstro',
      title: 'Mata Monstro',
      width: '100px',
      height: '100px',
      description:
        '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in sed hic! Quod, rem sapiente rerum id ab expedita, libero, quos ut excepturi culpa dolores eaque incidunt totam debitis ducimus!</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/fernandomocrosky/kill-monster-project-VueJs',
        },
      ],
    },
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
