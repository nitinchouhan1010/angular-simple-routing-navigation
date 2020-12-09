import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HeaderComponent } from "./header/header.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "User", component: UserComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    UserComponent,
    ContactUsComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
