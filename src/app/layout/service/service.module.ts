import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

const appRoutes: Routes = [
  {
      path: '', component: ServiceComponent,
      children: [
          {path : '' , redirectTo : 'open-account'},
          { path: 'open-account', component: OpenAccountComponent },

      ]
  }
]

@NgModule({
  declarations: [
    ServiceComponent,
    OpenAccountComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ServiceModule { }
