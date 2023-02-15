import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';
import { MessegerComponent} from './pages/notfound/messeger/messeger.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  {path:'portfolio', component: CardComponent},
  // {path:'**', redirectTo:''} //neste caso retorna para a pagina principal TitleComponent
  {path:'**', component: MessegerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
