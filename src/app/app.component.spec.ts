import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

describe('AppComponent', () => {
  let fixture : any;
  let app: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'to-do-app' title`, () => {
    expect(app.title).toEqual('to-do-app');
  });

  it('should check default values', () => {
    expect(app.title).toBe('to-do-app');
    expect(app.todoitem).toBe('');
    expect(app.faCheck).toBe(faCheck);
    expect(app.faClose).toBe(faClose);
    expect(app.todoLabel).toBe('');
    expect(app.checkedList).toStrictEqual([1, 4, 5]);
    expect(app.todoList).toStrictEqual(['Hit the gym', 'Pay bills', 'Meet george', 'buy eggs', 'read a book', 'organize table']);
  });

  it('should check deleteToDoItem', () => {
    app.deleteToDoItem(1);
    fixture.detectChanges();
    expect(app.todoList).toStrictEqual(['Hit the gym', 'Meet george', 'buy eggs', 'read a book', 'organize table'])
    expect(app.checkedList).toStrictEqual([4,5])
  });

  
  it('should check onListClick', () => {
    app.checkedList = [2,4,5];
    fixture.detectChanges();
    app.onListClick(2);
    expect(app.checkedList).toStrictEqual([4, 5]);
    app.checkedList = [1,4,5];
    fixture.detectChanges();
    app.onListClick(3);
    expect(app.checkedList).toStrictEqual([1, 4, 5, 3]);
  });

  
  it('should check onSubmit', () => {
    app.onSubmit({todoLabel : 'eat healthy'});
    expect(app.todoList).toStrictEqual(['Hit the gym', 'Pay bills', 'Meet george', 'buy eggs', 'read a book', 'organize table', 'eat healthy']);
    expect(app.todoLabel).toBe('');
  });
});
