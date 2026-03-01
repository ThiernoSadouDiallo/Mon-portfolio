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
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec gestion de panier, paiement et administration.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour visualiser et analyser des données en temps réel.',
      image: 'assets/project2.jpg',
      technologies: ['React', 'TypeScript', 'D3.js', 'Express'],
      link: '#',
      github: '#'
    },
    {
      title: 'Application Mobile',
      description: 'Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.',
      image: 'assets/project3.jpg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      title: 'API RESTful',
      description: 'API robuste et scalable avec authentification JWT et documentation Swagger.',
      image: 'assets/project4.jpg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      link: '#',
      github: '#'
    },
    {
      title: 'Site Portfolio',
      description: 'Site portfolio moderne et responsive avec animations et transitions fluides.',
      image: 'assets/project5.jpg',
      technologies: ['Angular', 'TypeScript', 'Html', 'Css'],
      link: '#',
      github: '#'
    },
    {
      title: 'Système de Chat',
      description: 'Application de messagerie en temps réel avec WebSockets et notifications push.',
      image: 'assets/project6.jpg',
      technologies: ['Socket.io', 'Node.js', 'React', 'MongoDB'],
      link: '#',
      github: '#'
    }
  ];
}
