import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { User } from "../models/user-interface";
@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
})
export class DataTableComponent implements OnInit {
  @Input() dataUser: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataUser = this.dataService.getUsersData();
  }
}
