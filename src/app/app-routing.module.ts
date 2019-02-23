import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewListComponent } from "./reviews/review-list/review-list.component";

const routes: Routes = [
  {
    path: "reviews/:id",
    component: ReviewListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
