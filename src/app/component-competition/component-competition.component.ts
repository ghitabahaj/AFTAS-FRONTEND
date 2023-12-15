import { Component} from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-component-competition',
  templateUrl: './component-competition.component.html',
  styleUrls: ['./component-competition.component.css']
})
export class ComponentCompetitionComponent {

  private _sub!: Subscription
  competitions: any[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
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

    this.fetchCompetitions();
  }
  

  fetchCompetitions(): void {

    this.competitionService.getAllCompetitions().subscribe(
      (data: any) => {
        this.competitions = data.result;
        console.log(data);
      },
      (error) => {
        console.error('Error retrieving all competitions :', error);
      }
    );
  }
  
  submitForm(): void {
    this.competitionService.addCompetition(this.competition).subscribe(
      (response) => {
        this.fetchCompetitions();
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
