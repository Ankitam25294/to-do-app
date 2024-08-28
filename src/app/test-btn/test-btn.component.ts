import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  standalone: true,
  imports: [],
  templateUrl: './test-btn.component.html',
  styleUrl: './test-btn.component.scss'
})
export class TestBtnComponent implements DoCheck, OnDestroy{

  testClickAction() {
    console.log("testClickAction called")
  }

  ngDoCheck() {
    console.log("test btn ngDoCheck called")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("test btn ngOnDestroy called")
    
  }
}
