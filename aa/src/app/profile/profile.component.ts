import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms'; 

import { FormBuilder,FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
//export class ProfileComponent implements OnInit {

  //name=''
  //id=''
  //country=''

  //constructor(private route:ActivatedRoute){
       //this.route.queryParams.subscribe(data=>{
       // console.log(data['name'])
       // console.log(data['id'])
        //console.log(data['country'])
        //this.name=data['name']
        //this.id=data['id']
        //this.country=data['country']
       //}) 
      //}
   
  //ngOnInit():void{

  //}

//}
export class ProfileComponent {
  myForm:any
  showSubmitMessage = false;
    isSubmitted = false;
    showCancelMessage = false;
    minuteStep = 5;
      
  //appointmentForm: FormGroup;
  //constructor() {
  //  this.appointmentForm = new FormGroup({
    //  'appointmentDate': new FormControl('', Validators.required),
     // 'appointmentTime': new FormControl('', Validators.required),
     // 'location': new FormControl('', Validators.required),
     // 'product': new FormControl('', Validators.required)
  //  });
 // }
 constructor(private formBuilder: FormBuilder) {
  this.myForm = this.formBuilder.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: ['', Validators.required],
    product: ['', Validators.required] });
  }
  submitForm(form: FormGroup) {

    this.showSubmitMessage=true;
      this.isSubmitted = true;
      
    console.log(this.myForm.value);
  }

  onCancel() {
    this.showCancelMessage=true;
    this.myForm.reset();
  }
}


