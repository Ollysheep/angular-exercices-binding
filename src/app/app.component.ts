import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { User } from "./models/user-interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  users!: User[];
  usersInit!: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = [...this.dataService.getUsersData()];
    this.usersInit = [...this.users];
  }

  searchText: string = "";
  filterType: string = "first";

  onSearchTextChange(searchText: string) {
    this.searchText = searchText;
    this.FilteredUsers();
  }

  onFilterTypeChange(filterType: string) {
    this.filterType = filterType;
    this.FilteredUsers();
  }

  FilteredUsers() {
    // if (this.filterType === "title") {
    this.users = this.usersInit.filter((user) =>
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
