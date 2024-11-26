import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

interface Componente {
icon: string;
name: string;
redirectTo: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    
   
      {
    icon: 'person',
    name: 'Avatar',
    redirectTo: '/avatar'
    },
    {
    icon: 'radio-button-on',
    name: 'botones',
    redirectTo: '/buttons'
    },
  ];

    
   
    
  constructor() { }

  ngOnInit() {
  }

}


