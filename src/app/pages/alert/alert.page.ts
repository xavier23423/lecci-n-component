import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
roleMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {

    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK']
});
await alert.present();
};

async presentAlertMultipleButton() {
  const alert = await this.alertCtrl.create({
  backdropDismiss: false,
  header: 'Alert',
  subHeader: 'Important message',
  message: 'This is an alert!',
  buttons: ['Cancel', 'Open Modal', 'Delete']
  });
await alert.present();
  }

}
