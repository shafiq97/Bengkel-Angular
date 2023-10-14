import { Component } from "@angular/core";

interface User {
  name: string;
  email: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent {
  user: User = {
    name: "",
    email: "",
  };

  onSubmit() {
    alert(this.user.email);
    console.log(this.user);
  }
}

