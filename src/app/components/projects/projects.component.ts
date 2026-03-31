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
      title: 'Mon Portfolio',
      description: 'Site portfolio moderne et responsive avec animations et transitions fluides.',
      technologies: ['Angular', 'TypeScript', 'Html', 'Css'],
      github: '#'
    },
    {
      title: 'Jeu de PUZZLE',
      description: 'Le but de ce projet est de réaliser une application de jeu, dotée d\'une interface graphique, mais pouvant être utilisé sans l\'interface graphique tout en implémentant la vue console, ce jeu consiste en un puzzle à glissière.',
      technologies: ['Angular', 'TypeScript', 'Html', 'Css'],
      github: '#'
    },
    {
      title: 'Jukebox Numérique',
      description: 'Le but du projet est de réaliser une application de musique qui sera nommée MUSITY, dotée d\'une interface graphique. L\'objectif est de remplacer et valoriser l\'ancien jukebox qui existait dans les bars en France pour apporter une meilleur expérience clientèle.',
      technologies: ['flutter', 'FlutterFlow'],
      github: '#'
    }
  ];
}
