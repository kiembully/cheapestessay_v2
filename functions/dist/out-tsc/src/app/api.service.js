import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { forkJoin, EMPTY } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
let ApiServices = class ApiServices {
    constructor(http) {
        this.http = http;
        this._baseUrl = 'https://web.cheapestessay.com/';
        this._loginUrl = this._baseUrl + 'checkLogin';
        this._registerUrl = this._baseUrl + 'createAccount';
        this._countryCodeUrl = 'https://restcountries.eu/rest/v2/';
        this._orderDisplayUrl = this._baseUrl + '';
        this._writersProfileUrl = this._baseUrl + 'writerDetail';
        this._myOrdersUrl = this._baseUrl + 'orderslist';
        this._userBalanceUrl = this._baseUrl + 'displaybalance';
        this._userDiscountUrl = this._baseUrl + 'displaydiscount';
        this._userLevelUrl = this._baseUrl + 'displaylevelpercentage';
        this._generatedDataUrl = this._baseUrl + 'retrievedata';
        this._oldWritersUrl = this._baseUrl + 'displayoldwriters';
        this._fullNameUrl = this._baseUrl + 'updatefullname';
        this._passwordsUrl = this._baseUrl + 'updatepassword';
        this._emailUrl = this._baseUrl + 'updateemail';
        this._mobileUrl = this._baseUrl + 'updatemobile';
        this._whatsapp = this._baseUrl + 'updatewhatsapp';
        this._addressUrl = this._baseUrl + 'updatebillingaddress';
        this._setOrderUrl = this._baseUrl + 'setOrder';
        this._contactUrl = this._baseUrl + 'sendcontactus';
        this._resetPasswordUrl = this._baseUrl + 'forgotPassword';
        this._servicesUrl = this._baseUrl + 'services?page=';
        this._seoUrl = this._baseUrl + 'seo?page=';
        this._reviewsUrl = this._baseUrl + 'allWriterReviews';
        this._couponCodeUrl = this._baseUrl + 'applyDiscount';
        this._orderUrl = this._baseUrl + 'getorder';
        this._saveOrderUrl = this._baseUrl + 'saveorder';
        this._deleteOrderUrl = this._baseUrl + 'deleteOrder';
        this._displayOrder = this._baseUrl + 'displayorder';
        this._uploadFiles = this._baseUrl + 'uploadmaterial';
        this._deleteFiles = this._baseUrl + 'deleteMaterial';
        this._ratewriter = this._baseUrl + 'ratewriter';
        // ORDER PAYMENT APIS
        this._getCardDetailsUrl = this._baseUrl + 'getCardDetails';
        this._saveCardDetailsUrl = this._baseUrl + 'saveCardDetails';
        this._deleteCardDetailUrl = this._baseUrl + 'deleteCardDetails';
        this._reedemAmountUrl = this._baseUrl + 'reedemAmount';
        this._payWithBalanceUrl = this._baseUrl + 'payWithBalance';
        this._payWithStripeCardUrl = this._baseUrl + 'payWithStripeCard';
        this._payWithPaypalUrl = this._baseUrl + 'payWithPayPal';
        this._paypalreturnUrl = this._baseUrl + 'paypalreturn';
    }
    getLogin(credentials) {
        return this.http.post(this._loginUrl, credentials);
    }
    registerLogin(credentials) {
        return this.http.post(this._registerUrl, credentials);
    }
    loggedIn() {
        return !!localStorage.getItem('user_token');
    }
    getToken() {
        return localStorage.getItem('user_token');
    }
    getDraftOrder() {
        return localStorage.getItem('order_draft');
    }
    getOrderToken() {
        return localStorage.getItem('set_order_token');
    }
    getCountryCode() {
        return this.http.get(this._countryCodeUrl, { headers: { skip: "true" } });
    }
    getOrderDetails() {
        let _service = this.http.get(this._orderDisplayUrl + 'displayservicetype');
        let _paper = this.http.get(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get(this._orderDisplayUrl + 'displayotherpapers');
        let _writer = this.http.get(this._orderDisplayUrl + 'displaywriterlevel');
        let _pSubjects = this.http.get(this._orderDisplayUrl + 'displaypopularsubject');
        let _oSubjects = this.http.get(this._orderDisplayUrl + 'displayothersubject');
        let _allDeadlines = this.http.get(this._orderDisplayUrl + 'displaydeadline');
        let _formatStyles = this.http.get(this._orderDisplayUrl + 'displayformatstyle');
        let _allDiscipline = this.http.get(this._orderDisplayUrl + 'displaydiscipline');
        let _topWriters = this.http.get(this._orderDisplayUrl + 'top10Writers');
        let _otherWriters = this.http.get(this._orderDisplayUrl + 'displayotherwriters');
        let _timezone = this.http.get(this._orderDisplayUrl + 'displaytimezone');
        let _addExtras = this.http.get(this._orderDisplayUrl + 'displayadditionalextras');
        return forkJoin([
            _service,
            _paper,
            _paper1,
            _writer,
            _pSubjects,
            _oSubjects,
            _allDeadlines,
            _formatStyles,
            _allDiscipline,
            _topWriters,
            _otherWriters,
            _timezone,
            _addExtras
        ]).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getTopWriters() {
        return this.http.get(this._orderDisplayUrl + 'displaytop10writers').pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getTopWritersProfile() {
        return this.http.get(this._orderDisplayUrl + 'top10Writers').pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getWritersProfile(id) {
        return this.http.post(this._writersProfileUrl, id).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getHomeCalculator(token) {
        let _paper = this.http.get(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get(this._orderDisplayUrl + 'displayotherpapers');
        let _deadline = this.http.get(this._orderDisplayUrl + 'displaydealineformat');
        let _pages = this.http.post(this._orderDisplayUrl + 'displaypages', token);
        return forkJoin([
            _paper,
            _paper1,
            _deadline,
            _pages
        ]).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getDeadlines() {
        return this.http.get(this._orderDisplayUrl + 'displaydeadline');
    }
    getPapers() {
        let _paper = this.http.get(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get(this._orderDisplayUrl + 'displayotherpapers');
        return forkJoin([
            _paper,
            _paper1
        ]);
    }
    getMyOrders(token) {
        return this.http.post(this._myOrdersUrl, token).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getBalance(token) {
        return this.http.post(this._userBalanceUrl, token).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getDiscount(token) {
        return this.http.post(this._userDiscountUrl, token);
    }
    getLevel(token) {
        return this.http.post(this._userLevelUrl, token);
    }
    getGeneratedData(token) {
        return this.http.post(this._generatedDataUrl, token);
    }
    getOldWriters(token) {
        return this.http.post(this._oldWritersUrl, token).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getFullName(credentials) {
        return this.http.post(this._fullNameUrl, credentials);
    }
    getPassword(credentials) {
        return this.http.post(this._passwordsUrl, credentials);
    }
    getEmail(credentials) {
        return this.http.post(this._emailUrl, credentials);
    }
    getMobile(credentials) {
        return this.http.post(this._mobileUrl, credentials);
    }
    getWhatsapp(credentials) {
        return this.http.post(this._mobileUrl, credentials);
    }
    getAddress(credentials) {
        return this.http.post(this._addressUrl, credentials);
    }
    getOrderOptions(form) {
        return this.http.post(this._setOrderUrl, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getContactDetails(contact_form) {
        return this.http.post(this._contactUrl, contact_form);
    }
    getNewPassword(form) {
        return this.http.post(this._resetPasswordUrl, form);
    }
    getService(param) {
        return this.http.get(this._servicesUrl + param).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getSeo(param) {
        return this.http.get(this._seoUrl + param).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getReviews() {
        return this.http.get(this._reviewsUrl).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getCouponCode(form) {
        return this.http.post(this._couponCodeUrl, form);
    }
    editMyOrder(form) {
        return this.http.post(this._orderUrl, form);
    }
    saveOrder(form) {
        return this.http.post(this._saveOrderUrl, form);
    }
    deleteOrder(form) {
        return this.http.post(this._deleteOrderUrl, form);
    }
    displayOrder(form) {
        return this.http.post(this._displayOrder, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    uploadFiles(form) {
        return this.http.post(this._uploadFiles, form);
    }
    deleteFiles(form) {
        return this.http.post(this._deleteFiles, form);
    }
    rateWriter(form) {
        return this.http.post(this._ratewriter, form);
    }
    getCardDetails(form) {
        return this.http.post(this._getCardDetailsUrl, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    saveCardDetails(form) {
        return this.http.post(this._saveCardDetailsUrl, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    deleteCardDetails(form) {
        return this.http.post(this._deleteCardDetailUrl, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    redeemAmout(form) {
        return this.http.post(this._reedemAmountUrl, form);
    }
    payUsingBalance(form) {
        return this.http.post(this._payWithBalanceUrl, form);
    }
    payWithStripeCard(form) {
        return this.http.post(this._payWithStripeCardUrl, form);
    }
    payWithPaypal(form) {
        return this.http.post(this._payWithPaypalUrl, form).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
    getPaypalReturn() {
        return this.http.get(this._paypalreturnUrl).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay());
    }
};
ApiServices = __decorate([
    Injectable()
], ApiServices);
export { ApiServices };
//# sourceMappingURL=api.service.js.map