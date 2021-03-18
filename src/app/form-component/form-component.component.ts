import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  submitted = false;
  submit(login: any){
    console.log("Form Submitted",login)
    this.submitted = true;
  }
  myFunction(){
    this.submitted=false;
  }

}
