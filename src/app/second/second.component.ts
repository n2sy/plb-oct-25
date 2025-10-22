import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) txtColor: string = 'blue';
  @Output() eventToParent = new EventEmitter();

  emettreEvenement() {
    this.eventToParent.emit('Message de la part de votre enfant');
  }
}
