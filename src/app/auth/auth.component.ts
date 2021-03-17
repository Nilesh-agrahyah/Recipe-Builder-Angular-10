import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit{
    isLoginMode = true;


    constructor(private authService: AuthService){}
    ngOnInit(){

    }

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm){
        if(form.invalid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        if(this.isLoginMode){
            
        }
        else{
            this.authService.signup(email, password).subscribe( res => {
                console.log(res);
            },
            err => {
                console.log(err);
                
            })
        }
        
        form.reset()
    }
}