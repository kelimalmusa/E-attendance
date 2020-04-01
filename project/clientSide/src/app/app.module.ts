import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AhmetComponent } from "./ahmet/ahmet.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule } from "@angular/forms";
import { OpenComponent } from "./open/open.component";
import { LoginnComponent } from "./loginn/loginn.component";
import { SignupComponent } from "./signup/signup.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { SelectionPageComponent } from "./selection-page/selection-page.component";
import { LoginhocaComponent } from "./loginhoca/loginhoca.component";
import { SignuphocaComponent } from "./signuphoca/signuphoca.component";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "dashboard", component: LoginnComponent },
  { path: "", component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AhmetComponent,
    LoginComponent,
    OpenComponent,
    LoginnComponent,
    SignupComponent,
    SelectionPageComponent,
    LoginhocaComponent,
    SignuphocaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FlexLayoutModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
