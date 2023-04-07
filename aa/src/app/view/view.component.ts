import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  newName=''
  newAge=''
  constructor(private rout:ActivatedRoute) {
  this.rout.params.subscribe(data=>{
    this.newName=data['name']
    this.newAge=data['age']

  })
}
ngOnInit(): void {
  
}
}
