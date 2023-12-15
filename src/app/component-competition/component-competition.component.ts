import { Component } from '@angular/core';

@Component({
  selector: 'app-component-competition',
  templateUrl: './component-competition.component.html',
  styleUrls: ['./component-competition.component.css']
})
export class ComponentCompetitionComponent {
  competitions: any[] = []; 

  constructor() {
  
    this.competitions = [
      {
        code: 'ims-23-06-20',
        date: '2023-06-20',
        startTime: '13:00',
        endTime: '15:00',
        location: 'Imsouane'
      }
    ];
  }

 
  addCompetition() {
    
  }

  
  editCompetition(competition: any) {
   
  }
}
