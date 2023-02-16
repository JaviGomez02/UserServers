import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  isLoggedIn!: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated()
    .subscribe({
      next: (resp)=>{
        if(resp){
          this.isLoggedIn=true;
        }
        else{
          this.isLoggedIn=false
        }
      },
      error:(error)=>{

      }
    });
    
  }

  signIn():void{
      console.log('Email: ', this.email, 'Password: ', this.password)
      this.authService.login(this.email,this.password)
      .subscribe({
        next: (resp) => {
          if (resp) {
            this.isLoggedIn=true;
            this.router.navigate(['/servers']);
          }
          else {
            this.email=''; 
            this.password='';
            Swal.fire({
              title: 'Incorrect email or password',
              width: 600,
              padding: '3em',
              color: '#716add',
              background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                left top
                no-repeat
              `
            })
          }
        }
      })
      
    }
    
  logOut():void{
    this.authService.logout();
    this.isLoggedIn=false;
  }
    
  
}
