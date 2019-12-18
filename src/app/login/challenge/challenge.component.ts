import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  public connect;

  public hide: boolean;

  public fm: FormGroup

  constructor(
    private fb: FormBuilder,

    public snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialog: MatDialogRef<ChallengeComponent>,

    public opendialog: MatDialog,

  ) { }

  ngOnInit() {
    this.hide = true;
    this.fmConfig();

  }
  fmConfig(item: any = { status: 1 }) {

    let config = {
      contact_email: [item.contact_email || '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

    }

    this.fm = this.fb.group(config);

  }
  onSubmit(){
    let data=this.fm.value;
    // console.log(data);
    this.dialog.close(true);
    

  }
}
