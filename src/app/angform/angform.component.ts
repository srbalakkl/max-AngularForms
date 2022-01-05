import {Component, ViewChild} from '@angular/core';
// import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-angform',
    templateUrl: './angform.component.html',
    styleUrls: ['./angform.component.css']
})


export class AngformComponent {
    @ViewChild('ds') signupForm: any;
    answer = 'aas';

    //view child is the decorator
    //@ViewChild('f') -> ViewChild Decorator with template reference variable
    defaultQuestion = 'teacher';
    gender = ['male', 'female'];
    user = {
        username: '',
        email: '',
        gender: '',
        questionAnswer:'',
        secret: '',
    }
    defUserName = ''

    // constructor(public dialog: MatDialog) {
    constructor() {
    }

    suggestUserName() {
        console.log("suggest user name is working");
        const suggestName = "SupperUser";
        // this.signupForm?.setValue({
        //     usersData: {
        //         userName: suggestName
        //     },
        //
        // });

        //proper way of setting a value is by using the patchValue method

        this.signupForm.form.patchValue({
            usersData:{
                userName : suggestName,
            }
        });
    }

    // OnSubmit(form: NgForm) {
    OnSubmit() {
        console.log('submitted');
        this.user.username = this.signupForm.value.usersData.userName;
        this.user.email = this.signupForm.value.usersData.email;
        this.user.gender = this.signupForm.value.usersData.gender;
        this.user.questionAnswer = this.signupForm.value.usersData.questionAnswer;
        this.user.secret = this.signupForm.value.usersData.secret;

        console.log("gonna reset");

        this.signupForm.reset;
    }
}




/*import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-angform',
    templateUrl: './angform.component.html',
    styleUrls: ['./angform.component.css']
})
export class AngformComponent {
    @ViewChild('f', { static: false }) signupForm: any;
    defaultQuestion = 'teacher';
    answer = '';
    genders = ['male', 'female'];
    user = {
        username: '',
        email: '',
        secretQuestion: '',
        answer: '',
        gender: ''
    };
    submitted = false;

    suggestUserName() {
        const suggestedName = 'Superuser';
        // this.signupForm.setValue({
        //   userData: {              email:'',

        //     username: suggestedName,
        //     email: ''
        //   },
        //   secret: 'pet',
        //   questionAnswer: '',
        //   gender: 'male'
        // });
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
    }

    // onSubmit(form: NgForm) {
    //   console.log(form);
    // }

    onSubmit() {
        this.submitted = true;
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;

        this.signupForm.reset();
    }
}*/
