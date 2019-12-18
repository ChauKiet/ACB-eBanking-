import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { GameComponent } from './game/game.component';
import { TuitionComponent } from './tuition/tuition.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { PayairticketComponent } from './payairticket/payairticket.component';
import { PaytrainticketsComponent } from './paytraintickets/paytraintickets.component';
import { PaybillComponent } from './paybill/paybill.component';
import { TvfeeComponent } from './tvfee/tvfee.component';
import { PrepayComponent } from './prepay/prepay.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { LandlineComponent } from './landline/landline.component';

const appRoutes: Routes = [
    {
        path: '', component: PaymentComponent,
        children: [
            { path: '', redirectTo: 'game' },
            { path: 'game', component: GameComponent },
            { path: 'tuition', component: TuitionComponent },
            { path: 'payairticket', component: PayairticketComponent },
            { path: 'paytraintickets', component: PaytrainticketsComponent },
            { path: 'paybill', component: PaybillComponent },
            { path: 'tvfee', component: TvfeeComponent },
            { path: 'prepay', component: PrepayComponent },
            { path: 'postpaid', component: PostpaidComponent },
            { path: 'landline', component: LandlineComponent }
        ]
    }
]

@NgModule({
    declarations: [
        PaymentComponent,
        GameComponent,
        TuitionComponent,
        PayairticketComponent,
        PaytrainticketsComponent,
        PaybillComponent,
        TvfeeComponent,
        PrepayComponent,
        PostpaidComponent,
        LandlineComponent
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
export class PaymentModule { }
