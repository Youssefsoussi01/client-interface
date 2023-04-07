import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
      name:'youssef',
      last:'soussi',
      country:'tunisia'
  }
  url="www.winopapa.com"
  isAdmin=true
    constructor() { }
  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)
  }

}
