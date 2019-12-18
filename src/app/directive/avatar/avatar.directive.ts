import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[avatar]'
})
export class AvatarDirective implements OnChanges {
    @Input("width") width: number;
    @Input("height") height: number;
    @Input("type") type: boolean = true;
    @Input("src") src: string;
    @Input("title") title: string;
    @Input("action") action: boolean = false;// hiện thị icon
    @Input("background") background: string;
    @Input("color") color: string;
    @Input("addclass") addclass: string;
    @Input("reverse") reverse: boolean = false;
    @Input("change") change: boolean = false;
    @Input("path") path: string = "";
    private icon: string;
    private option = { width: 30, height: 30 };
    private token: string = "avatar-accounts";
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
    }
    ngOnChanges(e: SimpleChanges) {
        this.extract();
        this.checkstyle();
        this.elementRef.nativeElement.innerHTML = this.templates();
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline-block');

    }
    extract = () => {
        if (this.title && !this.src) {
            let s = this.title.split(" ");
            if (s.length > 1) {
                if (!this.reverse) {
                    this.icon = s[0].substr(0, 1).toLocaleUpperCase() + s[1].substr(0, 1).toLocaleUpperCase();
                } else {
                    this.icon = s[s.length - 2].substr(0, 1).toLocaleUpperCase() + s[s.length - 1].substr(0, 1).toLocaleUpperCase();
                }
            } else {
                this.icon = s[0].substr(0, 2).toLocaleUpperCase()
            }

        }
        if (!this.width && !this.height) {
            this.width = this.option.width;
            this.height = this.option.height;
        } else {
            if (this.width && !this.height) { this.height = this.width; }
            if (this.height && !this.width) { this.width = this.height; }
        }

    }
    templates = () => {
        let style = `width : ` + this.width + `px; height : ` + this.height + `px; line-height: ` + this.height + `px; font-size: ` + Math.floor(this.width / 2) + `px;`;
        if (this.background) {
            style += `background : ` + this.background + ";";
        }
        if (this.color) {
            style += `color : ` + this.color;
        }
        let _calss = (this.type ? "circle" : "square") + (this.addclass ? " " + this.addclass : "");
        let _action = this.getaction();
        let path = this.change ? this.src : (window.location.hostname === 'localhost' ? '' : window.location.origin) + '/'  + this.src;
        let str = (this.src) ? "<figure><img style='margin-bottom: 10px;' src='" + this.src + "'/></figure>" : "<div><span>" + this.icon + "</span></div>";
        return `<div class='accounts-avatar ` + _calss + `' style='` + style + `'>` + str + _action + `</div>`;
    }
    getaction = () => {
        if (this.action) {
            let svg = `<svg style='vertical-align:middle' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
            return `<div class='accounts-avatar-action'>` + svg + `</div>`;
        } else {
            return '';
        }
    }

    checkstyle = () => {

        let el = document.querySelector("style[" + this.token + "]");
        if (!el) {
            let style = `
                .circle{
                    border-radius: 50%;   
                }
                .accounts-avatar figure{
                    width : 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                .accounts-avatar figure img{
                    width : 100%;
                }
                .accounts-avatar{
                    text-align: center;
                    background: #eee;
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    border : 1px solid transparent;
                    -webkit-transition : border 500ms ease-out;
                    -moz-transition : border 500ms ease-out;
                    -o-transition : border 500ms ease-out;
                    transition : border 500ms ease-out;
                }
                .accounts-avatar-action{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    opacity: 0;
                    -webkit-transition: opacity 0.3s ease-in-out;
                    -moz-transition: opacity 0.3s ease-in-out;
                    -ms-transition: opacity 0.3s ease-in-out;
                    -o-transition: opacity 0.3s ease-in-out;
                    transition: opacity 0.3s ease-in-out;

                    -webkit-transition: background-color 0.3s ease;
                    -moz-transition: background-color 0.3s ease;
                    -ms-transition: background-color 0.3s ease;
                    -o-transition: background-color 0.3s ease;
                    transition: background-color 0.3s ease;

                }
                .accounts-avatar:hover{
                    border : 1px solid #1a73e8;
                }
                .accounts-avatar:hover .accounts-avatar-action{
                    zoom: 1;
                    filter: alpha(opacity=50);
                    opacity: 0.5;
                    background-color : rgba(32,33,36,0.6)
                }
            `;
            el = this.renderer.createElement('style');
            this.renderer.setAttribute(el, 'type', 'text/css');
            this.renderer.setAttribute(el, this.token, '');
            this.renderer.appendChild(document.head, el);
            let text = this.renderer.createText(style);
            this.renderer.appendChild(el, text);
        }
    }
}
