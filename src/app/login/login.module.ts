import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { ChallengeComponent } from './challenge/challenge.component';

const appRoutes: Routes = [
    {
        path: '', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'signin' },
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'challenge', component: ChallengeComponent },

        ]
    }
]

@NgModule({
    declarations: [
        LoginComponent,
        SigninComponent,
        SignupComponent,
        ChallengeComponent
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
export class LoginModule { }
