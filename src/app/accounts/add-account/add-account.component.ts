import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHome = new EventEmitter();

  sendAccountToHome(nameValue, statusValue) {
    this.eventToHome.emit({
      name: nameValue,
      status: statusValue,
    });
  }
}
