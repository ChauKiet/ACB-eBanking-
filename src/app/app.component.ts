import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService,public router: Router ) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang('vi');
    const browserLang = this.translate.getBrowserLang();    
    this.translate.use(browserLang.match(/en|vi/) ? browserLang : this.translate['currentLang'] && this.translate['currentLang'].length == 2 ? this.translate['currentLang'] : "vi");
    this.router.events.subscribe(val => {

			if (val instanceof NavigationEnd) {
				
			}
		})
  }
  ngOnInit() { }
}
