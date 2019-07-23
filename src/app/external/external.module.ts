import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalRoutingModule } from './external-routing.module';
import { LoginComponent } from './login/login.component';
import { AmplifyAngularModule } from 'aws-amplify-angular';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    AmplifyAngularModule
  ]
})
export class ExternalModule { }
