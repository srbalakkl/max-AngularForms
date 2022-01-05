import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-angform',
    templateUrl: './angform.component.html',
    styleUrls: ['./angform.component.css']
})


export class AngformComponent implements OnInit {
    afp1='';

    // constructor(public dialog: MatDialog) {
    constructor() {
    }

    // @ViewChild('ds') signupForm: NgForm;

    //view child is the decorator
    //@ViewChild('f') -> ViewChild Decorator with template reference variable

    answer = '';
    defaultQuestion = 'teacher';
    gender = ['male', 'female'];
    user = {
        username: '',
        email: '',
        secret: '',
        gender: ''
    }
    defUserName = "bala"

    ngOnInit(): void {
        console.log("it's running");
    }

    // OnSubmit(form: NgForm) {
    //     console.log('submitted');
    //     console.log(form);
    //     // this.user.username = this.signupForm.value;
    //     console.log(this.user.username);
    // }

    OnSubmit(form: NgForm) {
        console.log('submitted');
        console.log(form);
        // this.user.username = this.signupForm.value;
        console.log(this.user.username);

    }

    suggestUserName() {
        console.log("suggest user name is working");
        const username = "SupperUser";
        // this.signupForm?.setValue({
        //   userData:{
        //     username : username,
        //     email:'',
        //   },
        //   secret:'',
        //   gender:'mala'
        //
        // });


        // this.signupForm.form.patchValue({
        //     userData:{
        //       username : username,
        //       email:'',
        //     },
        //     secret:'',
        //     gender:'male'
        // })
    }

//     openPredictionImg() {
//         const myImg = new Image();
//         myImg.useMap = './../assets/WhatsApp Image 2021-11-15 at 3.50.33 PM (1).jpeg';
//         const img = document.createElement('img');
//         document.body.appendChild(img);
//         img.setAttribute('src', myImg.useMap);
//         img.onload = (stop);
//
//         console.log("asdf");
//     }
    mtd() {
        console.log(this.afp1)
    }
}
