import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  enabledCountries = true;
  isChecked = false;
  isCheckedName = '';
  checkboxData = ["India", "USA", "UK"];
  checker = false;
  onChange(e, i) {
    // e = event i = index
    if (e.target.checked) {
      // country list check 
      this.checker = e.target.checked;
      this.enabledCountries = false;

      this.isChecked = true;
      this.isCheckedName = e.target.name;
      console.log("country value", e.target.name);
      console.log("country selected", e.target.checked);
    } else {
      // country list uncheck 
      this.checker = false;
      this.isChecked = false;
      this.enabledCountries = true;
      console.log("country value", e.target.name);
      console.log("country selected", e.target.checked);
    }
  }
  countryChange(data) {
    if (data.target.checked) {
      // To enable country list && Check
      this.enabledCountries = false;
    } else {
      // To disenable country list && uncheck
      this.enabledCountries = true; // disable
      this.isChecked = false; // uncheck the list check box
    }
  }
}
