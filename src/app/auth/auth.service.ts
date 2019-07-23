import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Observable, from } from 'rxjs';
import { CognitoUser } from '@aws-amplify/auth';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private amplifyService: AmplifyService) { }

  stateChange(): Observable<AuthState> {
    return this.amplifyService.authStateChange$;
  }

  signOut(): Promise<undefined> {
    return this.amplifyService.auth().signOut();
  }

  user(): Observable<CognitoUser> {
    return from(this.amplifyService.auth().currentAuthenticatedUser());
  }

}
