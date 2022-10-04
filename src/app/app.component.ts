import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'angular-tabs';

  public sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];

  public xAxisSettings : Object = { valueType: 'Category' }; 
  public chartData : Object = [
    { month: 'January', salesValue: 35 }, { month: 'February', salesValue: 28 },
    { month: 'March', salesValue: 34 }, { month: 'April', salesValue: 32 },
    { month: 'May', salesValue: 40 }, { month: 'June', salesValue: 32 },
    { month: 'July', salesValue: 35 }, { month: 'August', salesValue: 55 },
    { month: 'September', salesValue: 38 }, { month: 'October', salesValue: 30 },
    { month: 'November', salesValue: 25 }, { month: 'December', salesValue: 32 }
  ];
  public tabHeaderText : Object[] = [
    {text: 'HTML'},
    {text: 'Java'},
    {text : 'Python'}
  ];
  public tabContent : string[] = [
    "HyperText Markup Language is the standard markup language used to create web pages.",
    "Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers." ,
    "Python was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code."
  ];
 
  }
 