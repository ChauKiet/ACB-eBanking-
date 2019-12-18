import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public connect:any;
  public opened: boolean = true;
  public ipad = 930;
  public linkDef = { reports: true };
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth <= this.ipad) {
          this.opened = false;
        } else {
          let link = this.router.url;
          let ls = link.split('/');
          link = (ls.length == 1) ? ls[0] : ls[1];
          this.opened = (this.linkDef.hasOwnProperty(link)) ? false : true;
        }
      }
    })
  }

  ngOnInit() {
  }
  eventOpened(e) {
    this.opened = (this.opened == true) ? false : true;
  }
  ngOnDestroy() {
    if (this.connect) {
      this.connect.unsubscribe();
    }
  }


}
