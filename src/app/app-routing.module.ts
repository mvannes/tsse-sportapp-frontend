import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TablepreviewComponent} from "./tablepreview/tablepreview.component";
import {DefaultComponent} from "./default/default.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: DefaultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tablepreview', component: TablepreviewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routableComponents = [
  LoginComponent
];
