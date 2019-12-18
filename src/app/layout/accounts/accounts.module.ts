import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

import { AccountsComponent } from './accounts.component';
import { InfoComponent } from './info/info.component';
import { InsComponent } from './ins/ins.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ShareComponent } from './share/share.component';

const appRoutes: Routes = [
    {
        path: '', component: AccountsComponent,
        children: [
            { path: '', redirectTo: 'info' },
            { path: 'info', component: InfoComponent },
            { path: 'ins', component: InsComponent },

        ]
    }
]

@NgModule({
    declarations: [
        AccountsComponent,
        InfoComponent,
        InsComponent,
        ChangepasswordComponent,
        ShareComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    entryComponents: [
        InsComponent,
        ChangepasswordComponent,
        ShareComponent
    ],
    exports: [
        InsComponent,
        ChangepasswordComponent,
        ShareComponent
    ]
})
export class AccountsModule { }
