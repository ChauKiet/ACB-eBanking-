import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { Routes, RouterModule } from '@angular/router';
import { GlobalsService } from "./globals";
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './globals/auth.guard';
import { DeviceDetectorModule } from 'ngx-device-detector';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
const appRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule', },
  { path: 'login', loadChildren: './login/login.module#LoginModule', },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule',canActivate: [AuthGuard]  },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [ CookieService, AuthGuard , GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
