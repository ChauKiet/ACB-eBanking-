import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { InAcbComponent } from './in-acb/in-acb.component';
import { OutsideAcbComponent } from './outside-acb/outside-acb.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

const appRoutes: Routes = [
    {
        path: '', component: TransfersComponent,
        children: [
            { path: '', redirectTo: 'in-acb' },
            { path: 'in-acb', component: InAcbComponent },
            { path: 'outside-acb', component: OutsideAcbComponent },
        ]
    }
]

@NgModule({
    declarations: [
        TransfersComponent,
        InAcbComponent,
        OutsideAcbComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    entryComponents: []
})
export class TransfersModule { }
