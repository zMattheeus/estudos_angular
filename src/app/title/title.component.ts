import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: String = ''

  constructor() { 
    console.log(`Constructor ${this.nome}`)
  }
  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`)
  }

  ngOnInit(): void {
    this.nome = this.nome + "x"
    console.log(`OnInit ${this.nome}`)
  }

}
