import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {
  password = '';
  message = 'Create your password here:';
  messages: string[];

  constructor() { }

  checkPassword(password: string) {
    if (this.c_length()) {
      this.message = "Password needs to be 8 characters minimum."
      document.getElementById("progressbar").style.width = "57px";
      document.getElementById("progressbar").style.backgroundColor = "#bc2323";
      document.getElementById("box2").style.marginTop = "40px";

    } else if (this.c_numberCnt()) {
      this.message = "Password needs to have at least 1 number."
      document.getElementById("progressbar").style.width = "115px";
      document.getElementById("progressbar").style.backgroundColor = "#bc5f0d";
      document.getElementById("box2").style.marginTop = "40px";

    } else if (this.c_metaCnt()) {
      this.message = "Password needs to have at least 1 special character."
      document.getElementById("progressbar").style.width = "172px";
      document.getElementById("progressbar").style.backgroundColor = "#f9d000";
      document.getElementById("box2").style.marginTop = "40px";

    } else if (this.c_upperCnt() || this.c_lowerCnt()) {
      this.message = "Password needs to have at least 1 uppercase and 1 lowercase character."
      document.getElementById("progressbar").style.width = "230px";
      document.getElementById("progressbar").style.backgroundColor = "#a1c421";
      document.getElementById("box2").style.marginTop = "40px";

    } else {
      this.message = "Password is strong."
      document.getElementById("progressbar").style.width = "288px";
      document.getElementById("progressbar").style.backgroundColor = "#72c421";
      document.getElementById("box2").style.marginTop = "40px";

    }
    
  }

  c_length(): boolean {
    if ( this.password.length < 8) {
      return true;
    } else {
      return false;
    }
  }

  c_numberCnt(): boolean {
    var pass = this.password;
    var numInPassword = pass.match(/\d/g);
    if (numInPassword == null) {
      return true;
    } else {
      return false;
    }
  }

  c_metaCnt(): boolean {
    var pass = this.password;
    var scInPassword = pass.match(/[!#$%'()*+,-./:;<=>?@[\]^_`{|}~/]/g);
    if (scInPassword == null) {
      return true;
    } else {
      return false;
    }
  }

  c_upperCnt(): boolean {
    var pass = this.password;
    var ucInPassword = pass.match(/[A-Z]/g);
    if (ucInPassword == null) {
      return true;
    } else {
      return false;
    }
  }

  c_lowerCnt(): boolean {
    var pass = this.password;
    var lcInPassword = pass.match(/[a-z]/g);
    if (lcInPassword == null) {
      return true;
    } else {
      return false;
    }
  }

  resetPassword() {
    this.password = '';
    this.message = "Password cleared."
    document.getElementById("progressbar").style.width = "0px";
    document.getElementById("box2").style.marginTop = "0px";
  }

  ngOnInit() {
  }

}
