import { Injectable } from '@angular/core';

export class SecondService {
  constructor() {}

  addition(a, b) {
    console.log('Somme', a + b);
  }
}
