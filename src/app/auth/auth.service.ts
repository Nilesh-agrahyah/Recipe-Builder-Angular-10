import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private http: HttpClient) { }
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjPGKKrQxsODxouJxy7p20DmmbcTkk5TA', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handdleError))
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjPGKKrQxsODxouJxy7p20DmmbcTkk5TA', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handdleError))
    }

    private handdleError(errRes: HttpErrorResponse) {
        let errMsg = 'An unknown error occured!';
        if (!errRes.error || !errRes.error.error) {
            return throwError(errMsg);
        }
        switch (errRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errMsg = 'The email address is already in use by another account!';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errMsg = 'Password sign-in is disabled for this project!';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errMsg = 'We have blocked all requests from this device due to unusual activity. Try again later!';
                break;
            case "USER_DISABLED":
                errMsg = 'The user account has been disabled by an administrator!';
                break;
            case "EMAIL_NOT_FOUND":
            case "INVALID_PASSWORD":
                errMsg = 'The credentials are invalid or not found!';
                break;
            default:
                errMsg = 'An unknown error occured!';
        }
        return throwError(errMsg);
    }
}