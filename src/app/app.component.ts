import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DataI } from './data-i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ciudades_base';
  data:DataI[]=[]
  constructor(private service: DataService){
    service.getData();
    setTimeout(() => {
      this.data = service.data;
      console.log(this.data);
      
    }, 1000);
  }
}
