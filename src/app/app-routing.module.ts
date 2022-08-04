import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MerchantMenuComponent } from './merchant-menu/merchant-menu.component';
import { MerchantWelcomeComponent } from './merchant-welcome/merchant-welcome.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
