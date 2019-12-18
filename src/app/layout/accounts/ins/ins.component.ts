import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent implements OnInit {

  public connect;

  public skip: any;

  public hide: boolean;

  public fm: FormGroup

  public sex: any = {
    type:
      [
        { id: 1, name: 'customer.sex.1' },
        { id: 2, name: 'customer.sex.2' },
      ]
  }

  constructor(
    private fb: FormBuilder,

    public snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialog: MatDialogRef<InsComponent>,

    public opendialog: MatDialog,

  ) { }

  ngOnInit() {
    this.hide = true;
    this.fmConfig();

  }
  fmConfig(item: any = { status: 1 }) {

    let config = {

      id: [item.id || 0],

      first_name: [item.first_name || '', [Validators.required]],

      last_name: [item.last_name || '', [Validators.required]],

      sex: [item.sex || 1],

      contact_email: [item.contact_email || '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

      contact_phone: [item.contact_phone || '', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11), Validators.minLength(10)]],

      contact_address: [item.contact_address || ''],

      idno: [item.idno || ''],

      idno_issued_date: [new Date(item.idno_issued_date) || new Date()],

      birth_date: [new Date(item.birth_date) || new Date()],

      password: [item.password || ''],

      status: item.status || 0,

    }

    this.fm = this.fb.group(config);

  }
  onSubmit(){
    
  }


}
