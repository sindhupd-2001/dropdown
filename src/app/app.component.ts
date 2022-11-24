import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';
  constructor() { }
  link?:string;
  result!:string;
  showimg(val:string){
    if(val=='a')
    {
      this.link= "/assets/apple.jpg"
    }
    if(val=='b')
    {
      this.link= "/assets/ball.jpg"
    }
    if(val=='c')
    {
      this.link= "/assets/cap.jpg"
    }
    if(val=='d')
    {
      this.link= "/assets/dog.jpg"
    }
  }
  search(val1:string){
    if(val1=='apple'|| val1=="APPLE" || val1=="app")
    {
      this.link="/assets/apple.jpg"
    }
    else
    {
      this.link=""
    }
    this.result=val1.toUpperCase();

  }
  ngOnInit(): void {
  }
}
