import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      name:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });
   }


  ngOnInit(): void {
  }
  salvarCadastro(){
    console.log('Forms: ', this.formCadastro.valid);
  }
}
