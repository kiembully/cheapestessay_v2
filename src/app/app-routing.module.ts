import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';
import { DiscountComponent } from './discount/discount.component';
import { LevelComponent } from './level/level.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RevisionPolicyComponent } from './revision-policy/revision-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FaqsComponent } from './faqs/faqs.component';
import { MoneyBackGuaranteeComponent } from './money-back-guarantee/money-back-guarantee.component';
import { PricingComponent } from './pricing/pricing.component';
import { AuthGuard, PendingChangesGuard } from './auth.guard';
import { GuaranteesComponent } from './guarantees/guarantees.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'order',component:OrderComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'revision-policy',component:RevisionPolicyComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'terms-of-use',component:TermsOfUseComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'money-back-guarantee',component:MoneyBackGuaranteeComponent},
  {path:'pricing',component:PricingComponent},
  {path:'guarantees',component:GuaranteesComponent},
  {path:'free-quote',component:FreeQuoteComponent},
  {path:'what-we-do',component:WhatWeDoComponent},
  {path:'services',component:ServicesComponent},
  {path:'404',component:PageNotFoundComponent},
  {path:'my-orders',component:MyOrdersComponent,canActivate:[AuthGuard]},
  {path:'my-orders/order-details/:id',component:OrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'balance',component:BalanceComponent,canActivate:[AuthGuard]},
  {path:'discount',component:DiscountComponent,canActivate:[AuthGuard]},
  {path:'level',component:LevelComponent,canActivate:[AuthGuard]},
  {path:'edit-order/:id',component:EditOrderComponent,canDeactivate:[PendingChangesGuard],canActivate:[AuthGuard]},
  {path:'stripe-checkout/:id',component:CheckoutComponent,canActivate:[AuthGuard]},
  {path:'update-card/:id',component:CardComponent,canActivate:[AuthGuard]},
  {path:'invoice',component:InvoiceComponent,canActivate:[AuthGuard]},
  {path:':id',component:ServicesDetailComponent},
  // {path: '**', redirectTo: '404'},
  // {path:'order-details',component:OrderDetailsComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
