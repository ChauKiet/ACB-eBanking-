import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastrService {
    public data: any = {}
    public key = "toastr";
    public timeout = 100;
    constructor() {

    }
    public token = () => {
        return (new Date()).getTime();
    }
    public set = (response: any) => {
        if (typeof response === 'object' && response.status && response.message) {
            switch (response.status) {
                case 1:
                    this.success(response.message);
                    break;
                case 2:
                    this.secondary(response.message);
                    break;
                case 0:
                    this.warning(response.message);
                    break;
                default:
                    break;
            }
            if (response.status == 1) {

            }
            return true;
        }
        return false;
    }
    public info = (message) => {
        let option = { class: 'bg-info text-white', token : (new Date()).getTime(), type :'info', message: message , icon : 'info' };
        this.exec(option);
    }
    public error = (message) => {
        let option = { class: 'bg-danger text-white', token : (new Date()).getTime(), type :'error', message: message , icon : 'error_outline' };
        this.exec(option);
    }
    public success = (message) => {
        let option = { class: 'bg-success text-white', token : (new Date()).getTime(), type :'success', message: message , icon : 'done' };
        this.exec(option);
    }
    public secondary = (message) => {
        let option = { class: 'bg-secondary text-white', token : (new Date()).getTime(), type :'secondary', message: message };
        this.exec(option);
    }
    public warning = (message) => {
        let option = { class: 'bg-warning text-white', token : (new Date()).getTime(), message: message , icon : 'warning'};
        this.exec(option);
    }
    public exec = (option) => {
        console.log(option)
        let el = document.querySelector('[main-toastr]');
        if(!el){
            el = document.createElement('div');
            el.setAttribute('main-toastr','');
            el.className = this.key;
            document.body.insertBefore(el,null);
        }
        let pos = el.getBoundingClientRect();
        let toast = document.createElement('div');
        toast.innerHTML = this.template(option);
        el.appendChild(toast);
        toast.style.transition = 'all 1s';
        toast.style.left = '0';
        toast.style.opacity = '1';
        
        //toast.style.transitionDuration = '1s , 1s';
        let close = toast.querySelector('.close');
        let timeout = this.timeout;
        let connect;
        // setTimeout(() => {
           
        //     toast.style.left = '0px';
        //     toast.style.opacity = '1';
        // });
        if(close){
            close.addEventListener('click',function(e){
                toast.remove();
                clearInterval(connect);
                e.preventDefault();
            },false);
        }
        toast.addEventListener('hover' , function(e) {
            e.preventDefault();
        },false);
        connect = setInterval(() => {
            if(timeout == 0){
                toast.className+=' remove';
                clearInterval(connect);
                // setTimeout(toast.remove(),1000);
            }
            timeout = timeout - 1;
        }, 1000);
    }
    public template = (o) => {
        return `<div `+this.key+` type='`+o.type+`' class='toast-container `+o.class+`'>
            <div class='row'>
                `+((o.icon) ? `<i class='material-icons icon'>`+o.icon+`</i>` : ``)+`
                <div class='col message'>
                <span>`+o.message+`</span>
                <span class='close'><i class='material-icons'>close</i></span>
                </div>
            </div>
        </div>`;
    }
}
