import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWaysComponent } from './payment-ways/payment-ways.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreditCardComponent, PaymentComponent, PaymentWaysComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-components';
}
