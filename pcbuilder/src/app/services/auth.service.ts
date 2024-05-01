import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    private currentUser = new BehaviorSubject<User | null>(null);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get currentUserDetails() {
        return this.currentUser.asObservable();
    }

    constructor() {}

    login(user: User) {
        this.loggedIn.next(true);
        this.currentUser.next(user);
    }

    logout() {
        this.loggedIn.next(false);
        this.currentUser.next(null);
    }
}