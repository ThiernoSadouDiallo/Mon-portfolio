import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [

    {
      title: 'Gestionnaire d\'emploi de temps',
      description: 'Développement d\'une application permettant de créer des emplois du temps avec Java POO tout en respectant un certain nombre de contraintes.',
      technologies: ['Java POO', 'Linux'],
      github: '#'
      
    },
   {  
      title: 'Générateur de Corewar',
      description: 'Corewar est un jeu de programmation dans lequel deux programme informatique sont en concurrence pour le controle d\'une machine virtuelle appélée MARS.',
      technologies: ['Java POO', 'Linux', 'Swing'],
      github: '#'
      
    },
    {
      title: 'Site Portfolio',
      description: 'Site portfolio moderne et responsive avec animations et transitions fluides.',
      technologies: ['Angular', 'TypeScript', 'Html', 'Css'],
      github: '#'
    }
  ];
}
