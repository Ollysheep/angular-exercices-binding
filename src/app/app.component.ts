import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  searchText: string = "";
  filterType: string = "";

  constructor(private dataService: DataService) {}

  onSearchTextChange(searchText: string) {
    this.searchText = searchText;
  }

  onFilterTypeChange(filterType: string) {
    this.filterType = filterType;
  }

  get FilteredUsers() {
    const allUsers = this.dataService.getUsersData();

    // if (this.filterType === "title") {
    return allUsers.filter((user) =>
      user.name[this.filterType]
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
    /*  } else if (this.filterType === "first") {
      return allUsers.filter((user) =>
        user.name.first.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else if (this.filterType === "last") {
      return allUsers.filter((user) =>
        user.name.last.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      return allUsers;
    }*/
  }
}
