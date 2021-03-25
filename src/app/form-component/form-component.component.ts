import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { User } from '../user';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  userModel= new User("","","","","","","","","","");
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }

  submitted = false;
  submit(login: any){
    console.log("Form Submitted",login)
    this.submitted = true;
    console.log(this.form.value);
  }
  myFunction(){
    this.submitted=false;
  }
  mathFormGroup!: FormGroup;
  constructor() {
    this.initForm();
  }
  randomNumber = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  initForm() {
    this.mathFormGroup = new FormGroup(
      {
        firstNumber: new FormControl(this.randomNumber(), [
          Validators.required
        ]),
        secondNumber: new FormControl(this.randomNumber(), [
          Validators.required
        ]),
        answer: new FormControl("")
      },
      [this.answerValidator]
    );
  }
  answerValidator(form: AbstractControl) {
    console.log(form.value);
    const { firstNumber, secondNumber, answer } = form.value;
    if (answer === parseInt(firstNumber) + parseInt(secondNumber)) {
      return null;
    }
    return { math: true };
  }
}
  
 

