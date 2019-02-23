import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-review-list",
  templateUrl: "./review-list.component.html",
  styleUrls: ["./review-list.component.css"]
})
export class ReviewListComponent implements OnInit {
  bookId = -1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    return this.route.snapshot.params[this.bookId];
  }
}
