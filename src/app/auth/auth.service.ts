import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Observable } from 'rxjs';

export interface AuthState {
  state: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private amplifyService: AmplifyService) { }

  stateChange(): Observable<AuthState> {
    return this.amplifyService.authStateChange$;
  }

  signOut(): Promise<boolean> {
    return this.amplifyService.auth().signOut();
  }

}
