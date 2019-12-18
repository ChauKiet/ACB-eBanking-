import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    NgxChartsModule
  ],

})
export class TemplatesModule { }
