import { Component } from '@angular/core';
import { PaymentWaysComponent } from "../payment-ways/payment-ways.component";
import { CreditCardComponent } from "../credit-card/credit-card.component";

@Component({
  selector: 'app-payment',
  imports: [PaymentWaysComponent, CreditCardComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
