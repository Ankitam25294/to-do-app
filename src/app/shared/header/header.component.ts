import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestBtnComponent } from '../../test-btn/test-btn.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    TestBtnComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() user = "Gauresh";
  showTestBtn = true;
  constructor() {
    console.log("header constructor called")
  }
  ngOnInit() {
    console.log("header ngOnInit called")
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log("header ngOnChanges called", simpleChanges)
  }

  ngDoCheck() {
    console.log("header ngDoCheck called")
  }

  destroyTestButton() {
    this.showTestBtn = false;
  }

  ngAfterViewInit() {
    console.log("header ngAfterViewInit called")
  }

  ngAfterViewChecked() {
    console.log("header ngAfterViewChecked called")
  }

  ngAfterContentInit() {
    console.log("header ngAfterContentInit called")
  }

  ngAfterContentChecked() {
    console.log("header ngAfterContentChecked called")
  }
}
