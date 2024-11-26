import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enviarFormulario() {
    alert('Formulario enviado');
  }

  cancelarOperacion() {
    alert('Operación cancelada');
  }

  mostrarInformacion() {
    alert('Aquí está la información adicional')
}
}
