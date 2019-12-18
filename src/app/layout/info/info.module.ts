import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { InterestComponent } from './interest/interest.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';


const appRoutes: Routes = [
    {
        path: '', component: InfoComponent,
        children: [
            {path : '' , redirectTo : 'exchange'},
            { path: 'exchange', component: ExchangeComponent },
            { path: 'interest', component: InterestComponent },
            { path: 'pricelist', component: PricelistComponent },
        ]
    }
]

@NgModule({
    declarations: [
        InfoComponent,
        ExchangeComponent,
        InterestComponent,
        PricelistComponent
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
export class InfoModule { }
