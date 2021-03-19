import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { user_functions } from '../app/data/user-data';
import { NavigationEnd } from '@angular/router';
import { DialogTriggers } from '../app/data/ui-services';
let AppComponent = class AppComponent {
    constructor(titleService, metaTagService, router, dialog, _trigger, route) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.router = router;
        this.dialog = dialog;
        this._trigger = _trigger;
        this.route = route;
        this.schema = {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            name: 'Cheapest Essay',
            url: 'https://angular.io',
            description: "Looking for the cheapest essay writing service Hire qualified essay writers, who will do your 'write my paper' requests. Save up to 15% on your first order.",
            logo: "https://d3se3mk07n7blr.cloudfront.net/assets/img/cheapestessay-icon.svg",
            image: "https://d3se3mk07n7blr.cloudfront.net/assets/img/cheapestessay-icon.svg",
            sameAs: [
                "https://www.facebook.com/CheapestEssay/",
                "https://twitter.com/CheapestEssay",
                "https://www.instagram.com/cheapestessay/"
            ],
            address: {
                "@type": "PostalAddress",
                "streetAddress": "Columbus Ohio",
                "postOfficeBoxNumber": "43229",
                "addressLocality": "Columbus",
                "addressRegion": "Ohio",
                "postalCode": "43229",
                "addressCountry": "USA"
            },
            openingHours: ["Mon-Sun 00:00-23:59"],
        };
        this.new_user_functions = new user_functions;
        this.routerWithNoFooter = [
            'order',
            'my-orders',
            'profile',
            'balance',
            'discount',
            'level',
            'order-details',
            'edit-order',
            'stripe-checkout',
            'update-card',
            'invoice',
            'maintenance',
            '404',
        ];
    }
    // popup = this._trigger.openAnnouncementDialog();
    ngOnInit() {
        this.titleService.setTitle("Cheapest Essay Writing Service by Qualified Essay Writers $8/page");
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Cheapest essay writing service, write my paper, paper writing service, professional paper writing service, academic writing services, professional writing services, cheapest writing services, professional writers, cheap writing services, cheap essay writing services, essay writing service cheapest, writing paper service, professional essay writers, essay writers, online writing services,  affordable writing service' },
            { name: 'description', content: "Looking for the cheapest essay writing service Hire qualified essay writers, who will do your 'write my paper' requests. Save up to 15% on your first order." },
            { name: 'robots', content: 'index, follow' },
        ]);
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        // display popup announcment
        const token = localStorage.getItem('user_token');
        let status = (!token);
        if (status) {
            let popup = this._trigger;
            let path = this.new_user_functions.getCurrentPath();
            if (path != 'maintenance') {
                setTimeout(function () {
                    popup.openAnnouncementDialog();
                }, 20000);
            }
        }
    }
    getFooterStatus() {
        let path = this.new_user_functions.getCurrentPath().replace(/\//g, ' ');
        let new_path = path.split(" ");
        let routes = this.routerWithNoFooter;
        for (let i = 0; i < this.routerWithNoFooter.length - 1; i++) {
            if (this.routerWithNoFooter.includes(new_path[0], i)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    isMaintenance() {
        let path = this.new_user_functions.getCurrentPath();
        return (path == 'maintenance') ? false : true;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [user_functions, DialogTriggers]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map