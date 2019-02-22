import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BookFormComponent } from "./books/book-form/book-form.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [AppComponent, BookListComponent, BookFormComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angles on Books'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Angles on Books");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to Angles on Books!"
    );
  });
});
