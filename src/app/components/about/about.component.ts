import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  experiences = [
    {
      year: '2025',
      title: 'Stage en Administration Système Linux',
      company: 'Chez InnovQube',
      description: 'Automatisation, Supervision et Déploiement d\'Applications.'
    },
  ];

  education = [
    {
      year: '2026',
      degree: 'L3 en Informatique',
      school: 'EPSI campus de Grenoble'
    },
    {
      year: '2025',
      degree: 'L2 en Informatique',
      school: 'EPSI campus de Grenoble'
    },
    {
      year: '2024',
      degree: 'L2 en Informatique & Télécoms',
      school: 'Université Nongo Conakry'
    },
     {
      year: '2023',
      degree: 'Langue Anglaise',
      school: 'Top Accountancy School'
    },
     {
      year: '2022',
      degree: 'L1 en Informatique & Télécoms',
      school: 'Université Nongo Conakry'
    },
  ];
}
