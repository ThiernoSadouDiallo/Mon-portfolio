import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Formulaire soumis:', this.contactForm);
    // Ici vous pouvez ajouter la logique pour envoyer l'email
    alert('Message envoyé avec succès !');
    this.contactForm = { name: '', email: '', subject: '', message: '' };
    this.submitted = false;
  }

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'tsd2100380@gmail.com',
      link: 'mailto:tsd2100380@gmail.com'
    },
    {
      icon: '📞',
      title: 'Téléphone',
      value: '+33 6 64 68 43 55',
      link: 'tel:+33664684355'
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'Grenoble, France',
      link: '#'
    }
  ];
}
