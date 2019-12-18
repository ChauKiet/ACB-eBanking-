import { Component, OnInit, ViewChildren, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public fm: FormGroup;

  public hide;

  public checked: boolean = true;

  public PassRD;

  public connect;

  @ViewChildren('password') password;

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChangepasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.fm = this.fb.group({
      id: this.data.id,
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.hide = true;

    this.checked = true;

    this.PassRD = this.randomPass();
  }
  checkedRandom() {
    this.checked = !this.checked;

    if (this.checked === false) {
      this.fm.get('password').setValue('');
    } else {
      this.randomPass();
    }
  }
  randomPass() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var pass = "";
    for (var x = 0; x < 9; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    this.fm.get('password').setValue(pass);
  }
  onSubmit(){
    this.snackBar.open("Thay đổi mật khẩu thành công", 'Close', { duration: 5000 });
    this.dialogRef.close(true);
    console.log(this.fm.value);
    

  }

}
