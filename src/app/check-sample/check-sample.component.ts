import { Component, OnDestroy, OnInit, AfterContentChecked, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, OnDestroy ,AfterContentChecked, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit {

  quantidade: number = 0;


  constructor() { }


  adicionar(){
    this.quantidade +=1
  }

  decrementar(){
    this.quantidade -=1
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  ngDoCheck(): void {
    console.log("DoCheck")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Tchau");
  }

}
