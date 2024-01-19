import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filter-selector",
  templateUrl: "./filter-selector.component.html",
  styleUrls: ["./filter-selector.component.css"],
})
export class FilterSelectorComponent {
  @Output() filterTypeChange = new EventEmitter<string>();

  onFilterTypeChange(event: any) {
    this.filterTypeChange.emit(event.target.value);
  }
}
