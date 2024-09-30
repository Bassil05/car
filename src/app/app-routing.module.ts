import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { RegComponent } from './reg/reg.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'details',component:DetailsComponent},
  {path:'reg',component:RegComponent},
  {path:'logo',component:LogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
