import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footer_links: Links[] = [
    {generals:['Home','/'], clients:['Contact Us','/contact-us'], policies:['Money Back Guarantee','/money-back-guarantee'], contacts:['Text & Call: +1 (909) 441-1414','tel:+19094411414']},
    {generals:['Order Now','/order'], clients:['About Us','/about-us'], policies:['Terms of Use','/terms-of-use'], contacts:['Email: Suppoert@CheapestEssay.com','mailto:support@cheapestessay.com']},
    {generals:['Services','/services'], clients:['How it Works','/how-it-works'], policies:['Privacy Policy','/privacy-policy'], contacts:['WhatsApp: +1 (909) 441-1414','https://api.whatsapp.com/send?phone=19094411414']},
    {generals:['Pricing','/pricing'], clients:['Guarantee','/guarantees'], policies:['Revision Policy','/revision-policy'], contacts:['Location: Columbus, OH 43229','https://goo.gl/maps/FWiQ33fegs92']},
    {generals:['فقط للعرب','/arabic'], clients:['FAQs','/faqs'], policies:['Disclaimer','/disclaimer'], contacts: ''},
  ]

  openBlog() {
    window.open("https:/blog.cheapestessay.com","_blank")
  }
  toAppStore() {
    window.location.href = "https://apps.apple.com/us/app/cheapest-custom-writing-papers/id1447217562"
  }
  toGooglePlay() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.cheapestessay.service"
  }

}

export interface Links {
    generals: any;
    clients: any;
    policies: any
    contacts: any;
}