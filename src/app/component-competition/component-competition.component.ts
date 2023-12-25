import { Component} from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-component-competition',
  templateUrl: './component-competition.component.html',
  styleUrls: ['./component-competition.component.css']
})
export class ComponentCompetitionComponent {


  private _sub!: Subscription
  competitions: any[] = [];
  selectedRankings: any[] = [];
  itemsPerPage: number = 5;
  currentPage = 0;
  pageSize = 3;
  pageSizeOptions: number[] = [3, 5, 25, 100];
  totalItems = 0;
  competition: any = {
    code: '',
    date: '',
    startTime: '',
    endTime: '',
    numberOfParticipants: 0,
    location: '',
    amount: 0.0,
    rankingList:[]
  };

  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {

    this.loadCompetitions();

  }

  loadCompetitions(): void {
    this.competitionService.getAllPageCompetitions(this.currentPage, this.pageSize).subscribe(
      (response: any) => {
        console.log('Competitions:', response.content);

        this.competitions = response.content;
        this.totalItems = response.totalElements;
        this.selectedRankings = response.content.rankingList;    
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }


  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCompetitions();
  }
  


  
  getRank(code: string): void {
    const selectedCompetition = this.competitions.find(comp => comp.code === code);  
    if (selectedCompetition) {
      this.selectedRankings = selectedCompetition.rankingList;
      console.log(this.selectedRankings)
    } else {
      this.selectedRankings = []; 
    }
  }
  
  submitForm(): void {
    this.competitionService.addCompetition(this.competition).subscribe(
      (response) => {
        this.loadCompetitions();
        console.log('Competition data sent successfully:', response);
        Swal.fire("Success","Competition data sent successfully","success");
        

      },
      (error) => {
        console.error('Error sending competition data:', error);
        Swal.fire("Error",error.error,"error");
      }
    );
  }

  getCompetitionStatus(competition: any): string {
    const currentDate = new Date();
    const competitionDate = new Date(competition.date + 'T' + competition.startTime);
    const endTime = new Date(competition.date + 'T' + competition.endTime);

    const currentDateOnly = currentDate.toISOString().slice(0, 10);
    const competitionDateOnly = competitionDate.toISOString().slice(0, 10);

    console.log('Current Date:', currentDate);
    console.log('Competition Date:', competitionDate);
    console.log('End Time:', endTime);

    if (competitionDateOnly < currentDateOnly) {
        return 'Finished';
    } else if (currentDateOnly === competitionDateOnly) {
        const currentHour: number = currentDate.getHours();
        const currentMinute: number = currentDate.getMinutes();

        const endHour: number = endTime.getHours();
        const endMinute: number = endTime.getMinutes();

        const isBeforeEndTime = currentHour < endHour || (currentHour === endHour && currentMinute < endMinute);

        if (isBeforeEndTime) {
            return 'En cours';
        } else {
            return 'Upcoming';
        }
    } else {
        return 'Upcoming';
    }
}


  

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
  

}
