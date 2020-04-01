import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SelectionPageComponent } from "../selection-page/selection-page.component";
import { SignuphocaComponent } from "../signuphoca/signuphoca.component";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from "@angular/forms";
import { SelectionpagehocaComponent } from "../selectionpagehoca/selectionpagehoca.component";

@Component({
  selector: "app-loginhoca",
  templateUrl: "./loginhoca.component.html",
  styleUrls: ["./loginhoca.component.css"]
})
export class LoginhocaComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      password: this.fb.control("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  username: string;
  password: string;

  ngOnInit(): void {}
  login() {
    console.log("Girdiğiniz kullanıcı adı: ", this.username);
    console.log("girdiğiniz password", this.password);
    this.loginForm.reset();
  }

  openSignUp() {
    this.dialog.open(SignuphocaComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
  openSelectionHoca() {
    this.dialog.open(SelectionpagehocaComponent, {
      width: "2700px",
      height: "1500px"
    });
  }
}
