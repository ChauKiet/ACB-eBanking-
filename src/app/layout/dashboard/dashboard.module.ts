import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material';
import{TemplatesModule} from '../templates'
const appRoutes: Routes = [
  {
    path: '', component: DashboardComponent,

  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TemplatesModule,
  ]
})
export class DashboardModule { }
