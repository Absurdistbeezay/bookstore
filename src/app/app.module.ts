import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BookFormComponent } from "./books/book-form/book-form.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { AppRoutesModule } from "./app-routes/app-routes.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
    ReviewsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
