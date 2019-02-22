import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BookFormComponent } from "./book-form.component";
import { FormsModule } from "@angular/forms";

// import { Book } from "src/app/models/book";

describe("BookFormComponent", () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BookFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should emit an event on click", () => {
    spyOn(component.createBook, "emit");

    //trigger the click
    const nativeElement = fixture.debugElement.nativeElement;
    const button = nativeElement.querySelector("button");
    button.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(component.createBook.emit).toHaveBeenCalled();
  });

  // it('should add a book to the array', ()=>{
  //   component.addBook(new Book('The Lathe of Heaven', 'Ursula K Le Guin', '', 3);
  //   expect(component.books.length).toBe(3);
  //   expect(component.books[2].title).toBe('The Lathe of Heaven');
  // });
});
