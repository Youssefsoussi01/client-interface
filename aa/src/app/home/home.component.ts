import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myForm:any
  constructor(private formbuilder:FormBuilder){
    this.myForm=this.formbuilder.group({
      fname:['',[Validators.required,Validators.minLength(5)]],
      age:['',Validators.required],
      email:['',[Validators.email ,Validators.required]]
    })   
   }
  ngOnInit(): void {
    
  }
print(){
  console.log(this.myForm.value)
}
}