import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { Competition } from '../model/competition.model';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { FishService } from '../services/fish/fish.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-component-dashboard',
  templateUrl: './component-dashboard.component.html',
  styleUrls: ['./component-dashboard.component.css']
})
export class ComponentDashboardComponent {

  competition?:Competition;
  huntingFormControl?:FormGroup
  fish : any
  constructor(private competitionService: CompetitionService, private fishService : FishService,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.fetchCompetitionOfTheDay();
    this.fetchAllFish();
    this.huntingFormControl=this.formBuilder.group({
      IdentityNumber:[],
      competitionCode:[],
      name:[],
      weight:[]
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

  saveHunting(competitionCode: String, IdentityNumber: String  ){
    this.huntingFormControl=this.formBuilder.group({
      IdentityNumber:[IdentityNumber],
      competitionCode:[competitionCode],
      name:[],
      weight:[]
    })
    console.log(this.huntingFormControl?.value)
  }

    
  addHunting(): void {
    console.log(this.huntingFormControl?.value)
    this.fishService.saveHunting(this.huntingFormControl?.value)
      .subscribe(
        (response) => {
          console.log('Hunt saved successfully:', response);
          Swal.fire('Success', 'Hunt registered successfully', 'success');
        },
        (error) => {
          console.error('Error sending hunting data:', error);
          Swal.fire('Error', error.error, 'error');
        }
      );
  }
}
