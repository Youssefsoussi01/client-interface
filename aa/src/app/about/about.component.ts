import { HttpClient } from '@angular/common/http';
import { Component, NgZone,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators, NgForm,FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-about',
  //standalone:true,
  //imports:[NgbTimepickerModule,JsonPipe,FormsModule,ReactiveFormsModule,CommonModule],
  //imports:[FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 // providers:[NgbTimepickerConfig],

})
//export class AboutComponent implements OnInit {
  //constructor(private share:ShareServiceService){
    //console.log(this.share.data)
    //console.log(this.share.url)
    //this.share.print()
    

 // }
 // ngOnInit(): void {
    
 // }
//}
export class AboutComponent implements OnInit {
  hours: string[] = [];
  minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  myForm:any
  
  showSubmitMessage = false;
    isSubmitted = false;
    showCancelMessage = false;
    minuteStep = 5;
    
    
   
      constructor(private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
        hour: ['', Validators.required],
        minute:['', Validators.required],
        location: ['', Validators.required],
        product: ['', Validators.required] });
        
      }
      ngOnInit():void  {
        for(let i=8; i<=16; i++) {
          this.hours.push(i.toString().padStart(2, '0'));
        }
      }
      submitForm(form: FormGroup) {
        this.showSubmitMessage = true;
        this.isSubmitted = true;
        const hour = this.myForm.get('hour').value;
        const minute = this.myForm.get('minute').value;
        const time = `${hour}:${minute}`;
        this.myForm.patchValue({time: time});
        console.log('Time selected: ' + time);
        console.log(this.myForm.value);
      }
    
      onCancel() {
        this.showCancelMessage=true;
        this.myForm.reset();
      }
   
  }
