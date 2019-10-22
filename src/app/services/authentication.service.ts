import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AuthenticationService {

    constructor(private http: HttpClient){}

    login(email: string , password: string){
        return this.http.post<any>(`http://127.0.0.1:3333/authenticate` , { email, password})
        .pipe(map(user => {
            if(user && user.token){
                localStorage.setItem('currentUser' , JSON.stringify(user));
                
            }
            return user;
        }));
    }

    logout(){
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}