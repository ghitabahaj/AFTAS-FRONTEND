import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-component-competition',
  templateUrl: './component-competition.component.html',
  styleUrls: ['./component-competition.component.css']
})
export class ComponentCompetitionComponent {

  ngOnInit(): void {
    initFlowbite();
  }
  
  

}
