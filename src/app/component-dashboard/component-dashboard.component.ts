import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { Competition } from '../model/competition.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FishService } from '../services/fish/fish.service';

@Component({
  selector: 'app-component-dashboard',
  templateUrl: './component-dashboard.component.html',
  styleUrls: ['./component-dashboard.component.css']
})
export class ComponentDashboardComponent {
saveHunt() {
throw new Error('Method not implemented.');
}
  competition?:Competition;
  huntingFormControl?:FormGroup
  fish : any
  constructor(private competitionService: CompetitionService, private fishService : FishService,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.fetchCompetitionOfTheDay();
    this.fetchAllFish();
    this.huntingFormControl=this.formBuilder.group({
      memberIdentity:[],
      competitionCode:[]
    })

  }

  fetchAllFish():void{
     this.fishService.getAllFishes().subscribe(
      (data:any) =>{
        this.fish = data.result;
        console.log(this.fish)
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
     );
  }


  fetchCompetitionOfTheDay(): void {
    
    this.competitionService.getCompetitionOftheDay().subscribe(


      (data: any) => {
   
         this.competition = data.result;
        console.log(data);

      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }

  saveHunting(competitionCode: String, memberIdentity: String){
    this.huntingFormControl=this.formBuilder.group({
      memberIdentity:[memberIdentity],
      competitionCode:[competitionCode]
    })
    console.log(this.huntingFormControl?.value)
  }
}
