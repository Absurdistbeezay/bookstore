import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookListComponent } from "./book-list.component";
import { BookFormComponent } from "../book-form/book-form.component";
import { FormsModule } from "@angular/forms";

describe("BookListComponent", () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  // it("should contain a table", () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   const table = compiled.querySelector("table");
  //   console.log(table);
  //   expect(table.rows.length).toBe(2);
  //   expect(table.rows[0].cells[0].textContent).toBe("The Lord of the Rings");
  // });
});
