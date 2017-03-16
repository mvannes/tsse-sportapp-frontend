import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routableComponents = [
  LoginComponent,
  ChatComponent
];
