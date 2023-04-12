import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataI } from './data-i';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string= environment.api_url
  data:DataI[]=[]

  constructor() { this.getData()}
  getData():void{
    fetch(this.url).then(response => response.json()).then(data =>this.data=data).catch((error)=> console.log(error));
  }
}
