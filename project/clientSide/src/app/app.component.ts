import { Component } from "@angular/core";
// import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "./auth/login/login.component";
import { LoginnComponent } from "./loginn/loginn.component";
import { OpenComponent } from "./open/open.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "clientSide";
  constructor(private dialog: MatDialog, private router: Router) {}

}
