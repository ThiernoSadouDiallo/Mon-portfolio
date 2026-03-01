import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    // Frontend
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },

    // Backend
    { name: 'PHP', icon: '🐘' },
    { name: 'Java', icon: '☕' },

    // DB
    { name: 'MySQL', icon: '🛢️' },

    // DevOps / Outils
    { name: 'Git', icon: '🔀' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔁' },
    { name: 'Ansible', icon: '🤖' },
    { name: 'Linux', icon: '🐧' },
  ];

  categories = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Java']
    },
    {
      title: 'Base de données',
      skills: ['MySQL']
    },
    {
      title: 'Outils & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Ansible', 'Linux']
    }
  ];
}
