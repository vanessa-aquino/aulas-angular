import { Component, Input, OnInit } from '@angular/core';
import { PaymentWaysComponent } from "../payment-ways/payment-ways.component";
import { CreditCardComponent } from "../credit-card/credit-card.component";
import { PaymentOption } from '../models/payment-option.interface';
import { ParcelOption } from '../models/parcel-option.interface';

@Component({
  selector: 'app-payment',
  imports: [PaymentWaysComponent, CreditCardComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  totalValueStr: string = 'R$';
  @Input() totalValue: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.formatTotalValue();
  }

  formatTotalValue() {
    this.totalValueStr = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.totalValue);
  }

  updatePaymentWay(paymentOption: PaymentOption): void {
    console.log('Componente pai -', paymentOption)
  }

  updateParcel(parcelOption: ParcelOption): void {
    console.log('Componente pai -', parcelOption)
  }


}
