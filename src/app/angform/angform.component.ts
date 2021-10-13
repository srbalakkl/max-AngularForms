import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-angform',
  templateUrl: './angform.component.html',
  styleUrls: ['./angform.component.css']
})
export class AngformComponent implements OnInit {

  constructor() { }
  answer = '';

  defaultQuestion = 'teacher';
  gender =['male','female'];

  ngOnInit(): void {
    console.log("it's running");
  }

  OnSubmit(form :NgForm){
    console.log('submitted');
    console.log(form);
  }

}
