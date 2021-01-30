import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, EMPTY, Observable } from 'rxjs';
import { catchError, retry, shareReplay} from 'rxjs/operators';

@Injectable()
export class ApiServices {

    constructor(
        private http: HttpClient,
    ) { }

    _baseUrl = 'https://web.cheapestessay.com/';
    _metaUrl = 'https://s3.us-east-2.amazonaws.com/static.cheapestessay.com/json_files/seo.json';
    _servicesDataUrl = 'https://s3.us-east-2.amazonaws.com/static.cheapestessay.com/json_files/services_page_contents.json';

    getMetaData() {
        return this.http.get<any>(this._metaUrl, {headers:{skip:"true"}})
    }

    _loginUrl = this._baseUrl + 'checkLogin';
    _registerUrl = this._baseUrl + 'createAccount';
    getLogin(credentials) {
        return this.http.post<any>(this._loginUrl, credentials);
    }
    registerLogin(credentials) {
        return this.http.post<any>(this._registerUrl, credentials);
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
        return localStorage.getItem('set_order_token')
    }

    _countryCodeUrl = 'https://restcountries.eu/rest/v2/';
    getCountryCode() {
        return this.http.get(this._countryCodeUrl, {headers:{skip:"true"}})
    }

    _orderDisplayUrl = this._baseUrl + '';
    getOrderDetails() {
        let _service = this.http.get<any>(this._orderDisplayUrl + 'displayservicetype');
        let _paper = this.http.get<any>(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get<any>(this._orderDisplayUrl + 'displayotherpapers');
        let _writer = this.http.get<any>(this._orderDisplayUrl + 'displaywriterlevel');
        let _pSubjects = this.http.get<any>(this._orderDisplayUrl + 'displaypopularsubject');
        let _oSubjects = this.http.get<any>(this._orderDisplayUrl + 'displayothersubject');
        let _allDeadlines = this.http.get<any>(this._orderDisplayUrl + 'displaydeadline');
        let _formatStyles = this.http.get<any>(this._orderDisplayUrl + 'displayformatstyle');
        let _allDiscipline = this.http.get<any>(this._orderDisplayUrl + 'displaydiscipline');
        let _topWriters = this.http.get<any>(this._orderDisplayUrl + 'displaytop10writers');
        let _otherWriters = this.http.get<any>(this._orderDisplayUrl + 'displayotherwriters');
        let _timezone = this.http.get<any>(this._orderDisplayUrl + 'displaytimezone');
        let _addExtras = this.http.get<any>(this._orderDisplayUrl + 'displayadditionalextras');

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
        ]).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }

    getHomeCalculator(token) {
        let _paper = this.http.get<any>(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get<any>(this._orderDisplayUrl + 'displayotherpapers');
        let _deadline = this.http.get<any>(this._orderDisplayUrl + 'displaydealineformat');
        let _pages = this.http.post<any>(this._orderDisplayUrl + 'displaypages', token);
        return forkJoin([
            _paper,
            _paper1,
            _deadline,
            _pages
        ]).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }

    getPapers() {
        let _paper = this.http.get<any>(this._orderDisplayUrl + 'displaypopularpapers');
        let _paper1 = this.http.get<any>(this._orderDisplayUrl + 'displayotherpapers');
        return forkJoin([
            _paper,
            _paper1
        ])
    }

    _myOrdersUrl = this._baseUrl + 'orderslist';
    getMyOrders(token) {
        return this.http.post<any>(this._myOrdersUrl,token).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        );
    }

    _userBalanceUrl = this._baseUrl + 'displaybalance'
    getBalance(token) {
        return this.http.post<any>(this._userBalanceUrl,token).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        );
    }

    _userDiscountUrl = this._baseUrl + 'displaydiscount'
    getDiscount(token) {
        return this.http.post<any>(this._userDiscountUrl,token)
    }

    _userLevelUrl = this._baseUrl + 'displaylevelpercentage'
    getLevel(token) {
        return this.http.post<any>(this._userLevelUrl, token)
    }
    
    _generatedDataUrl = this._baseUrl + 'retrievedata'
    getGeneratedData(token) {
        return this.http.post<any>(this._generatedDataUrl, token)
    }

    _oldWritersUrl = this._baseUrl + 'displayoldwriters'
    getOldWriters(token) {
        return this.http.post<any>(this._oldWritersUrl, token).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }

    _fullNameUrl = this._baseUrl + 'updatefullname';
    getFullName(credentials) {
        return this.http.post<any>(this._fullNameUrl, credentials);
    }
    _passwordsUrl = this._baseUrl + 'updatepassword'
    getPassword(credentials) {
        return this.http.post<any>(this._passwordsUrl, credentials)
    }
    _emailUrl = this._baseUrl + 'updateemail'
    getEmail(credentials) {
        return this.http.post<any>(this._emailUrl, credentials)
    }
    _mobileUrl = this._baseUrl + 'updatemobile'
    getMobile(credentials) {
        return this.http.post<any>(this._mobileUrl, credentials)
    }
    _whatsapp = this._baseUrl + 'updatewhatsapp'
    getWhatsapp(credentials) {
        return this.http.post<any>(this._mobileUrl, credentials)
    }
    _addressUrl = this._baseUrl + 'updatebillingaddress'
    getAddress(credentials) {
        return this.http.post<any>(this._addressUrl, credentials)
    }
    _setOrderUrl = this._baseUrl + 'setOrder'
    getOrderOptions(form) {
        return this.http.post<any>(this._setOrderUrl, form).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }
    _contactUrl = this._baseUrl + 'sendcontactus'
    getContactDetails(contact_form) {
        return this.http.post<any>(this._contactUrl, contact_form);
    }
    
    _servicesUrl = this._baseUrl + 'services?page='
    getService(param) {
        return this.http.get<any>(this._servicesUrl + param);
    }
    _couponCodeUrl = this._baseUrl + 'applyDiscount'
    getCouponCode(form) {
        return this.http.post<any>(this._couponCodeUrl, form);
    }

    _orderUrl = this._baseUrl + 'getorder';
    editMyOrder(form) {
        return this.http.post<any>(this._orderUrl, form)
    }
    _saveOrderUrl = this._baseUrl + 'saveorder'
    saveOrder(form) {
        return this.http.post<any>(this._saveOrderUrl, form)
    }
    _deleteOrderUrl = this._baseUrl + 'deleteOrder'
    deleteOrder(form) {
        return this.http.post<any>(this._deleteOrderUrl, form)
    }
    _displayOrder = this._baseUrl + 'displayorder'
    displayOrder(form) {
        return this.http.post<any>(this._displayOrder, form)
    }
    _uploadFiles = this._baseUrl + 'uploadmaterial'
    uploadFiles(form) {
        return this.http.post<any>(this._uploadFiles, form)
    }
    _deleteFiles = this._baseUrl + 'deleteMaterial'
    deleteFiles(form) {
        return this.http.post<any>(this._deleteFiles, form)
    }
    _ratewriter = this._baseUrl + 'ratewriter'
    rateWriter(form) {
        return this.http.post<any>(this._ratewriter, form)
    }
    
    
    // ORDER PAYMENT APIS
    _getCardDetailsUrl = this._baseUrl + 'getCardDetails'
    getCardDetails(form) {
        return this.http.post<any>(this._getCardDetailsUrl, form).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }
    _reedemAmountUrl = this._baseUrl + 'reedemAmount'
    redeemAmout(form) {
        return this.http.post<any>(this._reedemAmountUrl, form)
    }
    _payWithBalanceUrl = this._baseUrl + 'payWithBalance'
    payUsingBalance(form) {
        return this.http.post<any>(this._payWithBalanceUrl, form)
    }
    _payWithStripeCardUrl = this._baseUrl + 'payWithStripeCard'
    payWithStripeCard(form) {
        return this.http.post<any>(this._payWithStripeCardUrl, form)
    }
    _paypalreturnUrl = this._baseUrl + 'paypalreturn'
    getPaypalReturn() {
        return this.http.get<any>(this._paypalreturnUrl).pipe(
            retry(3),
            catchError(()=>{
                return EMPTY;
            }),
            shareReplay()
        )
    }
}