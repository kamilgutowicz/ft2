import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  notifications = 7;
  showSpinner = false;
  opened = false;

  log(state){
    console.log(state);
  }

  loadData() {
    this.showSpinner = true;

    setTimeout(()=>{
      this.showSpinner = false;
    }, 5000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
