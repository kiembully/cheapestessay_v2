import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, PendingChangesGuard } from 'src/app/auth.guard';
import { ApiServices } from 'src/app/api.service';
import { TokenInterceptorService } from 'src/app/token-interceptor.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonDialogComponent } from './dialogs/common-dialog/common-dialog.component';
import { UserEntryComponent } from './components/user-entry/user-entry.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderComponent } from './order/order.component';
import { CommonProgressBarComponent } from './components/common-progress-bar/common-progress-bar.component';
import { NewOrderOutputComponent } from './components/new-order-output/new-order-output.component';
import { UserCouponComponent } from './components/user-coupon/user-coupon.component';
import { PayOrderComponent } from './components/pay-order/pay-order.component';
import { PayOrderFormComponent } from './components/pay-order-form/pay-order-form.component';
import { CommonPayOrderComponent } from './components/common-pay-order/common-pay-order.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { BalanceComponent } from './balance/balance.component';
import { DiscountComponent } from './discount/discount.component';
import { DiscountPageModalComponent } from './components/discount-page-modal/discount-page-modal.component';
import { LevelComponent } from './level/level.component';
import { LevelPageModalComponent } from './components/level-page-modal/level-page-modal.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CommonOrderDetailsStatusComponent } from './components/common-order-details-status/common-order-details-status.component';
import { CommonOrderDetailsPaperComponent } from './components/common-order-details-paper/common-order-details-paper.component';
import { CommonOrderDetailsComponent } from './components/common-order-details/common-order-details.component';
import { CommonOrderDetailsFilesComponent } from './components/common-order-details-files/common-order-details-files.component';
import { CommonOrderDetailsPaymentComponent } from './components/common-order-details-payment/common-order-details-payment.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CommonHowItWorksComponent } from './components/common-how-it-works/common-how-it-works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonNewOrderButtonComponent } from './components/common-new-order-button/common-new-order-button.component';
import { RevisionPolicyComponent } from './revision-policy/revision-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FaqsComponent } from './faqs/faqs.component';
import { MoneyBackGuaranteeComponent } from './money-back-guarantee/money-back-guarantee.component';
import { PricingComponent } from './pricing/pricing.component';
import { CommonBannerCalculatorComponent } from './components/common-banner-calculator/common-banner-calculator.component';
import { CommonGuaranteesComponent } from './components/common-guarantees/common-guarantees.component';
import { FloatingLinksComponent } from './components/floating-links/floating-links.component';
import { GuaranteesComponent } from './guarantees/guarantees.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { CommonReviewsComponent } from './components/common-reviews/common-reviews.component';
import { ApplyFreeQuoteComponent } from './components/apply-free-quote/apply-free-quote.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { CommonServicesSlideComponent } from './components/common-services-slide/common-services-slide.component';
import { CommonDialogMessageComponent } from './components/common-dialog-message/common-dialog-message.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { CommonUploadComponent } from './components/common-upload/common-upload.component';
import { ContentPhotoInfoComponent } from './components/content-photo-info/content-photo-info.component';
import { CommonDiscountBannerComponent } from './components/common-discount-banner/common-discount-banner.component';
import { CommonAdditionalServiceComponent } from './components/common-additional-service/common-additional-service.component';
import { CommonCompanyFlexingComponent } from './components/common-company-flexing/common-company-flexing.component';
import { CommonWriterFlexingComponent } from './components/common-writer-flexing/common-writer-flexing.component';
import { CommonClientReviewsComponent } from './components/common-client-reviews/common-client-reviews.component';
import { CommonFaqsComponent } from './components/common-faqs/common-faqs.component';
import { CommonSubpagesHeaderComponent } from './components/common-subpages-header/common-subpages-header.component';
import { CommonFaqsDataComponent } from './components/common-faqs-data/common-faqs-data.component';
import { CommonGuaranteesContentComponent } from './components/common-guarantees-content/common-guarantees-content.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OrderSummaryComponent } from './order-components/order-summary/order-summary.component';
import { PaperDetailsComponent } from './order-components/paper-details/paper-details.component';
import { ServiceLevelComponent } from './order-components/service-level/service-level.component';
import { ContactInformationComponent } from './order-components/contact-information/contact-information.component';
import { RateWriterComponent } from './components/rate-writer/rate-writer.component';
import { CommonOverlappingCarouselComponent } from './components/common-overlapping-carousel/common-overlapping-carousel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CardComponent } from './card/card.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ArabicComponent } from './arabic/arabic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnnouncementDialogComponent } from './dialogs/announcement-dialog/announcement-dialog.component';
import { CommonServiceSimilaritiesComponent } from './components/common-service-similarities/common-service-similarities.component';
import { TopWritersComponent } from './top-writers/top-writers.component';
import { WritersProfileComponent } from './writers-profile/writers-profile.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    CommonDialogComponent,
    UserEntryComponent,
    NewOrderComponent,
    OrderComponent,
    CommonProgressBarComponent,
    NewOrderOutputComponent,
    UserCouponComponent,
    PayOrderComponent,
    PayOrderFormComponent,
    CommonPayOrderComponent,
    ProfileTabComponent,
    LogoutComponent,
    MyOrdersComponent,
    ProfileComponent,
    UpdateProfileComponent,
    BalanceComponent,
    DiscountComponent,
    DiscountPageModalComponent,
    LevelComponent,
    LevelPageModalComponent,
    OrderDetailsComponent,
    CommonOrderDetailsStatusComponent,
    CommonOrderDetailsPaperComponent,
    CommonOrderDetailsComponent,
    CommonOrderDetailsFilesComponent,
    CommonOrderDetailsPaymentComponent,
    HowItWorksComponent,
    CommonHowItWorksComponent,
    ContactUsComponent,
    CommonNewOrderButtonComponent,
    RevisionPolicyComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    FaqsComponent,
    MoneyBackGuaranteeComponent,
    PricingComponent,
    CommonBannerCalculatorComponent,
    CommonGuaranteesComponent,
    FloatingLinksComponent,
    GuaranteesComponent,
    FreeQuoteComponent,
    CommonReviewsComponent,
    ApplyFreeQuoteComponent,
    ServicesComponent,
    ServicesDetailComponent,
    CommonServicesSlideComponent,
    CommonDialogMessageComponent,
    EditOrderComponent,
    CommonUploadComponent,
    ContentPhotoInfoComponent,
    CommonDiscountBannerComponent,
    CommonAdditionalServiceComponent,
    CommonCompanyFlexingComponent,
    CommonWriterFlexingComponent,
    CommonClientReviewsComponent,
    CommonFaqsComponent,
    CommonSubpagesHeaderComponent,
    CommonFaqsDataComponent,
    CommonGuaranteesContentComponent,
    WhatWeDoComponent,
    OrderSummaryComponent,
    PaperDetailsComponent,
    ServiceLevelComponent,
    ContactInformationComponent,
    RateWriterComponent,
    CommonOverlappingCarouselComponent,
    CheckoutComponent,
    InvoiceComponent,
    CardComponent,
    PageNotFoundComponent,
    DisclaimerComponent,
    ArabicComponent,
    AnnouncementDialogComponent,
    CommonServiceSimilaritiesComponent,
    TopWritersComponent,
    WritersProfileComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    FileUploadModule
  ],
  providers: [AuthGuard, ApiServices, Title, Meta, PendingChangesGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
