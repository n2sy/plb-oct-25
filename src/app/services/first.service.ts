import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private secondSer: SecondService) {}

  afficherSalut() {
    console.log('Bienvenue dans le monde des services');
    this.secondSer.addition(4, 5);
  }
}
