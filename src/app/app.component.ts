import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose} from '@fortawesome/free-solid-svg-icons';
import { Form, FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter/counter.component';
import { HeaderComponent } from './shared/header/header.component';
import { TestBtnComponent } from './test-btn/test-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    NgFor,
    NgClass,
    NgStyle,
    FormsModule,
    NgIf,
    CounterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit, DoCheck{
  // title = 'to-do-app';
  // todoitem = '';
  // faCheck = faCheck;
  // faClose = faClose;
  // todoLabel = '';
  // checkedList = [1, 4, 5];
  // todoList = ['Hit the gym', 'Pay bills', 'Meet george', 'buy eggs', 'read a book', 'organize table'];
  // @ViewChildren('listElement') listElement: QueryList<any>;

  // deleteToDoItem(index: number) {
  //   this.todoList.splice(index, 1);
  //   this.checkedList.splice(this.checkedList.indexOf(index), 1);
  // }

  // onListClick(index: number) {
  //   this.checkedList.includes(index) ? this.checkedList.splice(this.checkedList.indexOf(index), 1) : this.checkedList.splice(index, 0, index);
  // }

  // onSubmit(formData: any) {
  //   this.todoList.push(formData.todoLabel);
  //   this.todoLabel = '';
  // }

  // TOTAL_TIME = 10000;
  // time = 5;
  // showTimeUp = false;
  // interval:any;
  // ngOnInit() {
  //   this.interval = setInterval(()=>{
  //     this.time = this.time - 1;
  //     if(this.time === 0) {
  //       this.showTimeUp =  true;
  //       clearInterval(this.interval);
  //       console.log('time up')
  //     }
  //   }, 1000)
  // }
  user = "Gauresh";
  newOrOld = "old";
 
  constructor() {
    console.log("app constructor called")
  }
  ngOnInit() {
    console.log("app onInit called")
  }

  changeUserName() {
    this.user = "Ankita";
    this.newOrOld = "new";
  }

  ngDoCheck() {
    console.log("app ngDoCheck called")
  }
}

