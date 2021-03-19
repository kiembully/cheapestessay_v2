import { __decorate } from "tslib";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";
let new_order_form_default = class new_order_form_default {
    constructor() {
        this.setOrders = new FormGroup({
            service: new FormControl(3),
            page: new FormControl(1),
            set_spacing: new FormControl(1),
            academic: new FormControl(3),
            paper: new FormControl(1),
            other_paper: new FormControl(''),
            subject: new FormControl(18),
            other_subject: new FormControl(''),
            formated_style: new FormControl(1),
            other_format: new FormControl('', [Validators.required]),
            source: new FormControl(0),
            discipline: new FormControl(2),
            topic: new FormControl("Writer's Choice", [Validators.required]),
            add_detail: new FormControl('', [Validators.required]),
            timezone: new FormControl('America/Chicago'),
            deadline: new FormControl(19),
            deadlineid: new FormControl(83),
            duration: new FormControl('Days'),
            slide: new FormControl(0),
            chart: new FormControl(0),
            preferred_writer: new FormControl('any_writer'),
            writer_id: new FormControl(''),
            additionalextra: new FormControl(''),
            order_token: new FormControl(''),
            user_token: new FormControl(''),
            discount_token: new FormControl('')
        });
        this.retrieveOrder = new FormGroup({
            academic: new FormControl(3),
            add_detail: new FormControl(""),
            additionalextra: new FormControl(""),
            chart: new FormControl(0),
            chartCost: new FormControl("10.00"),
            chartTotal: new FormControl(0),
            deadline: new FormControl(3),
            deadlineLable: new FormControl("Fri, Oct 16th, 2020 at 8:33 AM"),
            discipline: new FormControl(2),
            duration: new FormControl("Days"),
            formated_style: new FormControl(1),
            iat: new FormControl(1602595998),
            life_time_Disc: new FormControl(0),
            other_format: new FormControl(""),
            other_paper: new FormControl(""),
            other_subject: new FormControl(""),
            page: new FormControl(1),
            pageCost: new FormControl("14.95"),
            pageTotal: new FormControl("14.95"),
            paper: new FormControl(1),
            preferred_writer: new FormControl("any_writer"),
            price: new FormControl("14.95"),
            price_without_discount: new FormControl("14.95"),
            service: new FormControl(3),
            set_spacing: new FormControl(1),
            slide: new FormControl(0),
            slideCost: new FormControl("7.48"),
            slideTotal: new FormControl("0.00"),
            source: new FormControl(0),
            subject: new FormControl(18),
            timezone: new FormControl("America/Chicago"),
            topic: new FormControl("Writer's Choice"),
            totalPrice: new FormControl("14.95"),
            word_count: new FormControl(280),
            writerAssignCostPerPage: new FormControl("14.95"),
            writer_id: new FormControl(""),
        });
        this.applyDiscount = new FormGroup({
            order_token: new FormControl(''),
            coupon_code: new FormControl('NWSLTTR15%'),
            user_token: new FormControl(''),
        });
        this.orderOutput = new FormGroup({
            paper: new FormControl('Essay (Any Type)'),
            subject: new FormControl('English'),
        });
    }
};
new_order_form_default = __decorate([
    Injectable()
], new_order_form_default);
export { new_order_form_default };
let profile_form_default = class profile_form_default {
    constructor() {
        this.levelForm = new FormGroup({
            lifetime_discount_id: new FormControl(),
            lifetime_discount_name: new FormControl(),
            min_requiremen: new FormControl(),
        });
        this.nameForm = new FormGroup({
            user_token: new FormControl(),
            first_name: new FormControl(''),
            last_name: new FormControl(''),
        });
        this.passwordForm = new FormGroup({
            current_password: new FormControl(),
            new_password: new FormControl(),
            retype_password: new FormControl(),
            user_token: new FormControl(),
        });
        this.emailForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
            user_token: new FormControl(),
        });
        this.mobileForm = new FormGroup({
            telephone: new FormControl(),
            prefix: new FormControl(),
            user_token: new FormControl()
        });
        this.whatsAppForm = new FormGroup({
            whatsapp_num: new FormControl(),
            user_token: new FormControl(),
        });
        this.addressForm = new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zipcode: new FormControl(),
            countrycode: new FormControl(),
            country: new FormControl(),
            user_token: new FormControl(),
        });
    }
};
profile_form_default = __decorate([
    Injectable()
], profile_form_default);
export { profile_form_default };
let service_object = class service_object {
    constructor() {
        this.service = [
            { name: 'essay-writing-services', id: 1, sub_service: 0, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'research-paper-writing-services', id: 3, sub_service: 0, cta: [
                    { text: 'Hire a Research Paper Writer!', url: '../order' },
                    { text: 'Get Your Research Paper Now!', url: '../order' },
                ] },
            { name: 'coursework-writing-services', id: 25, sub_service: 0, cta: [
                    { text: 'Hire a Coursework Writer!', url: '../order' },
                    { text: 'Get your coursework paper!', url: '../order' },
                ] },
            { name: 'case-study-writing', id: 8, sub_service: 0, cta: [
                    { text: 'Hire a Case Study Writer!', url: '../order' },
                    { text: 'Get Your Casestudy Now!', url: '../order' },
                ] },
            { name: 'write-my-essay', id: 1, sub_service: 0, cta: [
                    { text: 'Write My Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'research-article-summary', id: 35, sub_service: 0, cta: [
                    { text: 'Hire a Research Writer Now!', url: '../order' },
                    { text: 'Get Your Article Now!', url: '../order' },
                ] },
            { name: 'assignment-writing-service', id: 68, sub_service: 0, cta: [
                    { text: 'Hire an Assignment Writer!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'math-homework-help', id: 121, sub_service: 0, cta: [
                    { text: 'Get your Home Work Done', url: '../order' },
                    { text: 'Get experts Assistance', url: '../order' },
                ] },
            { name: 'book-movie-review-services', id: 6, sub_service: 0, cta: [
                    { text: 'Hire a review writer!', url: '../order' },
                    { text: 'Get Your Review Now!', url: '../order' },
                ] },
            { name: 'lab-report-abstract', id: 37, sub_service: 0, cta: [
                    { text: 'Hire a Lab Report writer!', url: '../order' },
                    { text: 'Get your Lab report!', url: '../order' },
                ] },
            { name: 'powerpoint-presentation-service', id: 30, sub_service: 0, cta: [
                    { text: 'Hire PPT Writer!', url: '../order' },
                    { text: 'Get Your Presentaion Now!', url: '../order' },
                ] },
            { name: 'admission-essay', id: 31, sub_service: 0, cta: [
                    { text: 'Order Admission Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'professional-cover-letter-writing-services', id: 3, sub_service: 0, cta: [
                    { text: 'Hire a Cover Writer Now!', url: '../order' },
                    { text: 'Avail Professional Assistance!', url: '../order' },
                ] },
            { name: 'cv-writing-services', id: 104, sub_service: 0, cta: [
                    { text: 'Hire an Expert CV Writer!', url: '../order' },
                    { text: 'Avail Experts Assistance!', url: '../order' },
                ] },
            { name: 'cv-editing-services', id: 104, sub_service: 0, cta: [
                    { text: 'Hire an Expert CV Editor!', url: '../order' },
                    { text: 'Avail Experts assistance!', url: '../order' },
                ] },
            { name: 'article-writing-services', id: 17, sub_service: 0, cta: [
                    { text: 'Hire an Article Writer!', url: '../order' },
                    { text: 'Get Your Article Now!', url: '../order' },
                ] },
            { name: 'report-writing-service', id: 29, sub_service: 0, cta: [
                    { text: 'Hire a Report Writer!', url: '../order' },
                    { text: 'Get Your Report Now!', url: '../order' },
                ] },
            { name: 'thesis-writing-services', id: 42, sub_service: 0, cta: [
                    { text: 'Hire a Thesis Writer!', url: '../order' },
                    { text: 'Get Your Thesis Report!', url: '../order' },
                ] },
            { name: 'dissertation-help', id: 27, sub_service: 0, cta: [
                    { text: 'Hire a Dissertation Writer!', url: '../order' },
                    { text: 'Get Your Dissertation Paper!', url: '../order' },
                ] },
            { name: 'writing-an-essay-outline', id: 104, sub_service: 0, cta: [
                    { text: 'Hire a Writer Now!', url: '../order' },
                    { text: 'Get Experts Assistance!', url: '../order' },
                ] },
            { name: 'blog-writers-for-hire', id: 104, sub_service: 0, cta: [
                    { text: 'Hire a Blog Writer Now!', url: '../order' },
                    { text: 'Get Experts Assistance!', url: '../order' },
                ] },
            { name: 'speech-writing-services', id: 12, sub_service: 0, cta: [
                    { text: 'Hire a Speech Writer!', url: '../order' },
                    { text: 'Get your Speech Now!', url: '../order' },
                ] },
            { name: 'article-critique-writing-services', id: 17, sub_service: 0, cta: [
                    { text: "Hire an Article Critique Writer", url: '../order' },
                    { text: "Get experts Assistance", url: '../order' },
                ] },
            { name: 'writing-a-reaction-paper', id: 17, sub_service: 0, cta: [
                    { text: 'Hire a Reaction Writer', url: '../order' },
                    { text: 'Get Your Reaction Paper', url: '../order' },
                ] },
            { name: 'professional-dissertation-proposal', id: 27, sub_service: 0, cta: [
                    { text: "Hire professional writer", url: '../order' },
                    { text: "Get experts Assistance", url: '../order' },
                ] },
            { name: 'business-simulation-report-online', id: 27, sub_service: 0, cta: [
                    { text: 'Hire an Expert!', url: '../order' },
                    { text: 'Get Your Report Done!', url: '../order' },
                ] },
            { name: 'write-my-personal-statement', id: 27, sub_service: 0, cta: [
                    { text: 'Hire an Expert!', url: '../order' },
                    { text: 'Get your Statement Done!', url: '../order' },
                ] },
            { name: 'document-formatting-services', id: 27, sub_service: 0, cta: [
                    { text: 'Hire an Expert!', url: '../order' },
                    { text: 'Get your Formatting Done!', url: '../order' },
                ] },
            { name: 'programming-assignment-help', id: 68, sub_service: 0, cta: [
                    { text: 'Hire a Programming Expert!', url: '../order' },
                    { text: 'Get your Assignment Done!', url: '../order' },
                ] },
            { name: 'professional-resume-editing', id: 68, sub_service: 0, cta: [
                    { text: 'Hire a Resume Editor!', url: '../order' },
                    { text: 'Get Experts Assistance!', url: '../order' },
                ] },
            { name: 'resume-writing-services', id: 104, sub_service: 0, cta: [
                    { text: 'Hire a Resume Writer!', url: '../order' },
                    { text: 'Get Experts Assistance!', url: '../order' },
                ] },
            { name: 'rewriting-services', id: 104, sub_service: 0, cta: [
                    { text: "Hire a Rewriter", url: '../order' },
                    { text: "Get Experts Assistance!", url: '../order' },
                ] },
            { name: 'best-paraphrasing-website', id: 104, sub_service: 0, cta: [
                    { text: "Hire a Paraphrasing Writer!", url: '../order' },
                    { text: "Get Experts Assistance!", url: '../order' },
                ] },
            { name: 'writing-a-marketing-plan', id: 104, sub_service: 0, cta: [
                    { text: "Hire a Professional writer now!", url: '../order' },
                    { text: "Avail Professional Assistance!", url: '../order' },
                ] },
            { name: 'financial-statement-analysis', id: 104, sub_service: 0, cta: [
                    { text: "Hire an Expert writer!", url: '../order' },
                    { text: "Avail Professional Assistance!", url: '../order' },
                ] },
            { name: 'swot-analysis-of-business', id: 104, sub_service: 0, cta: [
                    { text: "Hire an expert writer!", url: '../order' },
                    { text: "Avail Professional Assistance!", url: '../order' },
                ] },
            { name: 'short-story-writers', id: 104, sub_service: 0, cta: [
                    { text: "Hire a short story writer!", url: '../order' },
                    { text: "Avail Professional Assistance!", url: '../order' },
                ] },
            { name: 'assignment-writing-service', id: 68, sub_service: 0, cta: [
                    { text: "Hire an Assignment Writer!", url: '../order' },
                    { text: "Get Your Assignment Now!", url: '../order' },
                ] },
            { name: 'write-my-essay-for-me', id: 1, sub_service: 1, cta: [
                    { text: "Write My Essay For Me Now!", url: '../order' },
                    { text: "Get Your Essay Now!", url: '../order' },
                ] },
            { name: 'essay-writing-companies', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'cheap-essay-writing', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'admission-essay', id: 1, sub_service: 1, cta: [
                    { text: "Hire an Essay Writer Now!", url: '../order' },
                    { text: "Get Your Essay Now!", url: '../order' },
                ] },
            { name: 'custom-essay', id: 1, sub_service: 1, cta: [
                    { text: "Order Custom Essay Now!", url: '../order' },
                    { text: "Get Your Essay Now!", url: '../order' },
                ] },
            { name: 'scholarship-essay-writing-service', id: 1, sub_service: 1, cta: [
                    { text: "Order Scholarship Essay Now!", url: '../order' },
                    { text: "Get Your Essay Now!", url: '../order' },
                ] },
            { name: 'essay-proofreading', id: 1, sub_service: 1, cta: [
                    { text: "Hire Essay Proofreader Now!", url: '../order' },
                    { text: "Get Your Essay Now!", url: '../order' },
                ] },
            { name: 'essay-writing', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'same-day-essay-writing-service', id: 1, sub_service: 1, cta: [
                    { text: 'Get Same Day Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'college-essay-writing-service', id: 1, sub_service: 1, cta: [
                    { text: 'Order College Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'best-essay-writing-service', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'pay-for-essay', id: 1, sub_service: 1, cta: [
                    { text: 'Pay For Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'essay-editing-service', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Editor Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'college-essay', id: 1, sub_service: 1, cta: [
                    { text: 'Order College Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'buy-essay', id: 1, sub_service: 1, cta: [
                    { text: 'Buy an Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'write-my-essay', id: 1, sub_service: 1, cta: [
                    { text: 'Write My Essay For Me Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'do-my-essay', id: 1, sub_service: 1, cta: [
                    { text: 'Do My Essay Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'essay-format', id: 1, sub_service: 1, cta: [
                    { text: 'Hire an Essay Writer Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'custom-research-paper-writing', id: 3, sub_service: 1, cta: [
                    { text: 'Order a custom research paper!', url: '../order' },
                    { text: 'Get Your Custom Paper!', url: '../order' },
                ] },
            { name: 'how-to-write-a-research-paper', id: 3, sub_service: 1, cta: [
                    { text: 'Hire a Research Paper Writer!', url: '../order' },
                    { text: 'Get Your Research Paper!', url: '../order' },
                ] },
            { name: 'write-research-paper', id: 3, sub_service: 1, cta: [
                    { text: 'Hire a Research Paper Writer!', url: '../order' },
                    { text: 'Get Your Research Paper!', url: '../order' },
                ] },
            { name: 'buy-research-paper-online', id: 3, sub_service: 1, cta: [
                    { text: 'Buy a Research Paper Onilne!', url: '../order' },
                    { text: 'Get Your Research Paper!', url: '../order' },
                ] },
            { name: 'cheap-research-paper', id: 3, sub_service: 1, cta: [
                    { text: 'Buy cheap research paper!', url: '../order' },
                    { text: 'Get Your Cheap Research Paper!', url: '../order' },
                ] },
            { name: 'professional-research-paper-writers', id: 3, sub_service: 1, cta: [
                    { text: 'Hire a Professional Writer!', url: '../order' },
                    { text: 'Get Your Paper Now!', url: '../order' },
                ] },
            { name: 'college-research-paper', id: 3, sub_service: 1, cta: [
                    { text: 'Order a College Research Paper!', url: '../order' },
                    { text: 'Get Your College Paper!', url: '../order' },
                ] },
            { name: 'buy-research-paper', id: 3, sub_service: 1, cta: [
                    { text: 'Buy a Research Paper Onilne!', url: '../order' },
                    { text: 'Get Your Research Paper', url: '../order' },
                ] },
            { name: 'buy-coursework', id: 25, sub_service: 1, cta: [
                    { text: 'Buy Coursework Now!', url: '../order' },
                    { text: 'Get Your Coursework!', url: '../order' },
                ] },
            { name: 'custom-coursework', id: 25, sub_service: 1, cta: [
                    { text: 'Order Custom Coursework Now!', url: '../order' },
                    { text: 'Get Your Essay Now!', url: '../order' },
                ] },
            { name: 'coursework-website', id: 25, sub_service: 1, cta: [
                    { text: 'Order a Coursework Website!', url: '../order' },
                    { text: 'Get Your Coursework Now!', url: '../order' },
                ] },
            { name: 'coursework-help-online', id: 25, sub_service: 1, cta: [
                    { text: 'Get a Coursework Now!', url: '../order' },
                    { text: 'Get Your Coursework Help!', url: '../order' },
                ] },
            { name: 'writing-a-case-study', id: 8, sub_service: 1, cta: [
                    { text: 'Hire a Casestudy Writer!', url: '../order' },
                    { text: 'Get Your Casestudy', url: '../order' },
                ] },
            { name: 'how-to-write-a-case-study', id: 8, sub_service: 1, cta: [
                    { text: 'Hire a Case Study Writer!', url: '../order' },
                    { text: 'Get Your Casestudy Now!', url: '../order' },
                ] },
            { name: 'professional-case-study-writers', id: 8, sub_service: 1, cta: [
                    { text: 'Hire a Professional Writer', url: '../order' },
                    { text: 'Get Your Casestudy!', url: '../order' },
                ] },
            { name: 'custom-case-study-writing-service', id: 8, sub_service: 1, cta: [
                    { text: 'Order Custom Casestudy Now!', url: '../order' },
                    { text: 'Get Your Custom Casestudy!', url: '../order' },
                ] },
            { name: 'case-study-writing-help-online', id: 8, sub_service: 1, cta: [
                    { text: 'Hire a Casestudy Writer!', url: '../order' },
                    { text: 'Get Your Casestudy!', url: '../order' },
                ] },
            { name: 'writing-the-case-study', id: 8, sub_service: 1, cta: [
                    { text: 'Hire case study writer!', url: '../order' },
                    { text: 'Get Your Casestudy!', url: '../order' },
                ] },
            { name: 'case-study-writing-service', id: 8, sub_service: 1, cta: [
                    { text: 'Hire case study writer', url: '../order' },
                    { text: 'Get Your Casestudy Now!', url: '../order' },
                ] },
            { name: 'assignment-help', id: 68, sub_service: 1, cta: [
                    { text: 'Hire an Assignment Writer!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'buy-assignment', id: 68, sub_service: 1, cta: [
                    { text: 'Buy an Assignment Now!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'do-my-assignment', id: 68, sub_service: 1, cta: [
                    { text: 'Do My Assignment Now!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'online-assignment', id: 68, sub_service: 1, cta: [
                    { text: 'Order Online Assignment Now!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'write-my-assignment', id: 68, sub_service: 1, cta: [
                    { text: 'Write My Assignment Now!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'university-assignment-help', id: 68, sub_service: 1, cta: [
                    { text: 'Hire an Assignment Writer!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'writing-multiple-choice-questions', id: 68, sub_service: 1, cta: [
                    { text: 'Get Your MCQ Online!', url: '../order' },
                    { text: 'Hire a MCQ Writer', url: '../order' },
                ] },
            { name: 'assignment-writing', id: 68, sub_service: 1, cta: [
                    { text: 'Hire an Assignment Writer!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
            { name: 'assignment-editing', id: 68, sub_service: 1, cta: [
                    { text: 'Hire an Assignment Editor!', url: '../order' },
                    { text: 'Get Your Assignment Now!', url: '../order' },
                ] },
        ];
        this.services = [
            {
                set: [
                    { service: 'Essay Writing Services', link: 'essay-writing-services' },
                    { service: 'Assignment Writing Service', link: 'assignment-writing-service' },
                    { service: 'Research Paper Writing Service', link: 'research-paper-writing-services' },
                    { service: 'Case Study Writing', link: 'case-study-writing' },
                    { service: 'Coursework Writing Service', link: 'coursework-writing-services' },
                ]
            },
            {
                set: [
                    { service: 'Write my lab report', link: 'lab-report-abstract' },
                    { service: 'Speech Writing Services', link: 'speech-writing-services' },
                    { service: 'Writing a Critique', link: 'article-critique-writing-services' },
                    { service: 'Writing A Reaction Paper', link: 'writing-a-reaction-paper' },
                    { service: 'Professional Dissertation Writers', link: 'professional-dissertation-proposal' },
                ]
            },
            {
                set: [
                    { service: 'Mind Map Service', link: 'mind-map-service' },
                    { service: 'Business Simulation Report online', link: 'business-simulation-report-online' },
                    { service: 'Write My Personal Statement', link: 'write-my-personal-statement' },
                    { service: 'Document Formatting Services', link: 'document-formatting-services' },
                    { service: 'Programming Assignment', link: 'programming-assignment-help' },
                ]
            },
            {
                set: [
                    { service: 'Professional Resume Writers', link: 'resume-writing-services' },
                    { service: 'Resume Editing Services', link: 'professional-resume-editing' },
                    { service: 'Online Article Rewriter', link: 'rewriting-services' },
                    { service: 'Best Paraphrasing Website', link: 'best-paraphrasing-website' },
                    { service: 'Professional Poster Maker', link: 'professional-poster-maker' },
                ]
            },
            {
                set: [
                    { service: 'Writing a Marketing Plan', link: 'writing-a-marketing-plan' },
                    { service: 'Financial Statement Analysis', link: 'financial-statement-analysis' },
                    { service: 'SWOT Analysis of a Business', link: 'swot-analysis-of-business' },
                    { service: 'Professional Short Story Writers', link: 'short-story-writers' },
                    { service: 'Article Writing Services', link: 'article-writing-services' },
                ]
            },
        ];
        this.similarities = [
            { service: 'write-my-essay-for-me', id: 1 },
            { service: 'essay-writing-companies', id: 1 },
            { service: 'cheap-essay-writing', id: 1 },
            { service: 'admission-essay', id: 1 },
            { service: 'custom-essay', id: 1 },
            { service: 'scholarship-essay-writing-service', id: 1 },
            { service: 'essay-proofreading', id: 1 },
            { service: 'essay-writing', id: 1 },
            { service: 'same-day-essay-writing-service', id: 1 },
            { service: 'college-essay-writing-service', id: 1 },
            { service: 'best-essay-writing-service', id: 1 },
            { service: 'pay-for-essay', id: 1 },
            { service: 'essay-editing-service', id: 1 },
            { service: 'college-essay', id: 1 },
            { service: 'buy-essay', id: 1 },
            { service: 'write-my-essay', id: 1 },
            { service: 'do-my-essay', id: 1 },
            { service: 'essay-format', id: 1 },
            { service: 'custom-research-paper-writing', id: 3 },
            { service: 'how-to-write-a-research-paper', id: 3 },
            { service: 'write-research-paper', id: 3 },
            { service: 'buy-research-paper-online', id: 3 },
            { service: 'cheap-research-paper', id: 3 },
            { service: 'professional-research-paper-writers', id: 3 },
            { service: 'college-research-paper', id: 3 },
            { service: 'buy-research-paper', id: 3 },
            { service: 'buy-coursework', id: 25 },
            { service: 'custom-coursework', id: 25 },
            { service: 'coursework-website', id: 25 },
            { service: 'coursework-help-online', id: 25 },
            { service: 'writing-a-case-study', id: 8 },
            { service: 'how-to-write-a-case-study', id: 8 },
            { service: 'professional-case-study-writers', id: 8 },
            { service: 'custom-case-study-writing-service', id: 8 },
            { service: 'case-study-writing-help-online', id: 8 },
            { service: 'writing-the-case-study', id: 8 },
            { service: 'case-study-writing-service', id: 8 },
            { service: 'assignment-help', id: 68 },
            { service: 'buy-assignment', id: 68 },
            { service: 'do-my-assignment', id: 68 },
            { service: 'online-assignment', id: 68 },
            { service: 'write-my-assignment', id: 68 },
            { service: 'university-assignment-help', id: 68 },
            { service: 'writing-multiple-choice-questions', id: 68 },
            { service: 'assignment-writing', id: 68 },
            { service: 'assignment-editing', id: 68 },
        ];
    }
};
service_object = __decorate([
    Injectable()
], service_object);
export { service_object };
//# sourceMappingURL=data.js.map