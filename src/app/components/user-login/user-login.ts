import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.html',
})

export class UserLogin{
    title = 'Login';

    formLogin: FormGroup;
    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(){
        this.formLogin = this.formBuilder.group({
            usuario: ['', Validators.required],
            contraseña: ['', Validators.required],
            recordarme: false
        })
    }
}