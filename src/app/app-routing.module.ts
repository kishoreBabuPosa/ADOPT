import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SIGNINComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'',redirectTo:'/Main',pathMatch:'full'},
  { path : 'home', component : HomeComponent },
  {path:'Main',component:MainComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'signin',component:SIGNINComponent},
  {path:'Aboutus',component:AboutUsComponent},
  {path:"help",component:HelpComponent},
  {path:"Contactus",component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }