import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AsidebarComponent } from './shared/asidebar/asidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { TranslateModule } from '@ngx-translate/core';

import { AvartarModule } from '../directive/avatar';
import { AccountsModule } from './accounts/accounts.module'
const appRoutes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'info', loadChildren: './info/info.module#InfoModule' },
            { path: 'service', loadChildren: './service/service.module#ServiceModule' },
            { path: 'transfers', loadChildren: './transfers/transfers.module#TransfersModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'utilities', loadChildren: './utilities/utilities.module#UtilitiesModule' },
            { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
        ]
    }
]


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        AsidebarComponent,

    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AvartarModule,
        AccountsModule
        // TablesModule
    ],
})
export class LayoutModule { }
