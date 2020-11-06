import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number = 0;
  @Output() changeCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementer(){
    this.compteur--;
    this.changeCompteur.emit({value: this.compteur});
  }

  incrementer(){
    this.compteur++;
    this.changeCompteur.emit({value: this.compteur});
  }

}
