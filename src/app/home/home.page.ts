import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // constructor(private alertController: AlertController) { }

  listaUsuarios: Usuario[] = [];
  constructor(private StorageService: StorageService) {}

  async buscarUsuarios(){
    this.listaUsuarios = await this.StorageService.getAll();
  }

  ionViewCanEnter(){
   this.buscarUsuarios();
  }
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Email sent',
  //     message: 'An email was sent to the email you typed.',
  //     buttons: ['OK'],
  //   });

  await alert.present();


  ngOnInit() {
  }

}
