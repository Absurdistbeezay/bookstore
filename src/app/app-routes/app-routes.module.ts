import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, Router } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { BookListComponent } from "../books/book-list/book-list.component";

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
