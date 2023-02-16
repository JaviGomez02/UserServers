import { Injectable } from '@angular/core';
import { of, Observable, switchMap, catchError } from 'rxjs';
import { UsersService } from '../users/services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UsersService, private http: HttpClient, private cookieService: CookieService) { }
  loggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  isAuthenticated() {
    //Recuperamos la clave authenticated de localStorage
    // const promise = new Promise(
    //   (resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(localStorage.getItem('authenticated')==='true');
    //     }, 800);
    //   }
    // );
    // return promise;

    
    return this.http.get<any>(`http://localhost:8000/jwt`,this.httpOptions)
    .pipe(switchMap(resp=>{
      console.log("autenticado")
      return of (true)
    }),catchError(error=>{
      console.log("no autenticado")
      return of (false)
    }))

  }
 
  login(email: string, password: string):Observable<boolean>{
    //Recuperamos el usuario y comprobamos que la contraseña sea correcta
  //  return this.userService.getUserByEmail(email)
  //   .pipe( switchMap((user=> {
  //     if (user.length && user[0].password===password){
  //       localStorage.setItem('authenticated', 'true');
  //       localStorage.setItem('rol',user[0].rol)
  //       return of(true)
  //     }
  //     else{
  //       localStorage.setItem('authenticated', 'false');
  //       return of(false)
  //     }
  //   })))

    return this.http.post<any>(`http://localhost:8000/auth/login`,{"email":email, "password":password},this.httpOptions)
    .pipe(switchMap(resp=>{
      // console.log(resp)
      this.cookieService.set('token', resp.access_token)
      this.cookieService.set('rol', resp.rol)
      return of (true)
    }),catchError(error=>{
      // console.log(error)
      this.cookieService.delete('token')
      return of (false)
    }))


    
    
  }
 
  logout() {
    //Cambiamos el valor de la clave authenticated a false en localStorage
    this.cookieService.delete('token')
    this.cookieService.delete('rol')
  }
}
