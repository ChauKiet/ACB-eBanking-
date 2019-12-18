import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesComponent } from './utilities.component';
import { SignatureComponent } from './signature/signature.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

const appRoutes: Routes = [
    {
        path: '', component: UtilitiesComponent,
        children: [
            { path: '', redirectTo: 'signature' },
            { path: 'signature', component: SignatureComponent },
            { path: 'registration', component: RegistrationComponent },
        ]
    }
]

@NgModule({
    declarations: [
        UtilitiesComponent,
        SignatureComponent,
        RegistrationComponent
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
export class UtilitiesModule { }
