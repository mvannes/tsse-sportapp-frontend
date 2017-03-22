import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import { TablepreviewComponent } from './tablepreview/tablepreview.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    routableComponents,
    TablepreviewComponent,
    DefaultComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
