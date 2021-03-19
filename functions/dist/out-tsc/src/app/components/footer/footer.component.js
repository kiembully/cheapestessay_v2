import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FooterComponent = class FooterComponent {
    constructor() {
        this.footer_links = [
            { generals: ['Home', '/'], clients: ['Contact Us', '/contact-us'], policies: ['Money Back Guarantee', '/money-back-guarantee'], contacts: ['Text & Call: +1 (909) 441-1414', 'tel:+19094411414'] },
            { generals: ['Order Now', '/order'], clients: ['About Us', '/about-us'], policies: ['Terms of Use', '/terms-of-use'], contacts: ['Email: Support@CheapestEssay.com', 'mailto:support@cheapestessay.com'] },
            { generals: ['Services', '/services'], clients: ['How it Works', '/how-it-works'], policies: ['Privacy Policy', '/privacy-policy'], contacts: ['WhatsApp: +1 (909) 441-1414', 'https://api.whatsapp.com/send?phone=19094411414'] },
            { generals: ['Pricing', '/pricing'], clients: ['Guarantee', '/guarantees'], policies: ['Revision Policy', '/revision-policy'], contacts: ['Location: Columbus, OH 43229', 'https://goo.gl/maps/FWiQ33fegs92'] },
            { generals: ['فقط للعرب', '/arabic'], clients: ['FAQs', '/faqs'], policies: ['Disclaimer', '/disclaimer'], contacts: '' },
        ];
    }
    ngOnInit() {
    }
    openBlog() {
        window.location.href = "https://blog.cheapestessay.com";
    }
    toAppStore() {
        window.location.href = "https://apps.apple.com/us/app/cheapest-custom-writing-papers/id1447217562";
    }
    toGooglePlay() {
        window.location.href = "https://play.google.com/store/apps/details?id=com.cheapestessay.service";
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map