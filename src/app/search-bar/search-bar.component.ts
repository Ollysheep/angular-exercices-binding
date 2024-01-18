import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent {
  @Output() searchTextChange = new EventEmitter<string>();

  onSearchTextChange(event: any) {
    const searchText = event.target.value;

    this.searchTextChange.emit(searchText);
  }
}
