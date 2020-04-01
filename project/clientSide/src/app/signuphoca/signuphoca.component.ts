import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { LoginhocaComponent } from '../loginhoca/loginhoca.component';

@Component({
  selector: "app-signuphoca",
  templateUrl: "./signuphoca.component.html",
  styleUrls: ["./signuphoca.component.css"]
})
export class SignuphocaComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dialog: MatDialog,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.email
      ]),
      name: this.fb.control("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]),

      surname: this.fb.control("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ])
    });
  }

  name: string;
  surname: string;
  title: string;
  email: string;
  username: string;
  password: string;

  ngOnInit(): void {}

  signUp() {
    console.log("girdiğiniz isim :", this.name);
    console.log("girdiğiniz surname :", this.surname);
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
    console.log("girdiğiniz email : ", this.email);
    this.loginForm.reset();
  }
  openloginHoca() {
    this.dialog.open(LoginhocaComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
