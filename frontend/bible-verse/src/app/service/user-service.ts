import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/User";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private httpClient: HttpClient) {}

    url = "http://localhost:8080/user";

    loginUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${this.url}/login`, user)
    }

    isLoggedIn() {
        let user = sessionStorage.getItem('user');
        return !(user === null);
    }

    logout(){
        sessionStorage.removeItem('user');
    }
}