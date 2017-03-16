import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";

import { ChatSessionComponent } from './chat-session/chat-session.component';
import { ChatSessionListComponent } from './chat-session-list/chat-session-list.component';

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
    ChatSessionComponent,
    ChatSessionListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
