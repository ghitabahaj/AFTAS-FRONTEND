import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { CompetitionService } from '../services/competition/competition.service';
import { MembersService } from '../services/member/members.service';
import { RankingPost } from '../model/ranking-post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register-member-component',
  templateUrl: './register-member-component.component.html',
  styleUrls: ['./register-member-component.component.css']
})
export class RegisterMemberComponentComponent {

  private _sub!: Subscription
  members: any;
  selectedCompetition: any;
  ranking?: RankingPost;
  rankingFormControl?:FormGroup;
  name:string=""
  constructor(private competitionService: CompetitionService , private memberService : MembersService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    initFlowbite();
    this.getavailableCom();
    this.fetchMembers();
    this.rankingFormControl = this.formBuilder.group({
      identityNumber: ["",Validators.required],
      code: ["",Validators.required]

    })

  }
  fetchMembers() {
    this.memberService.getAllMembers().subscribe(
      (data: any) => {
        this.members = data.result;
        console.log(data);
      },
      (error) => {
        console.error('Error retrieving all members :', error);
      }
    );
  }
  getavailableCom() {
    this.competitionService.getAvailableCompetitions().subscribe(
      (data: any) => {
        this.selectedCompetition = data.result;
        console.log("hhh"+data);
      },
      (error) => {
        console.error('Error retrieving all competitions :', error);
      }
    );
  }
  
  registerMember(): void {
    if(this.rankingFormControl?.invalid) return;
    this.memberService.registerMember(this.rankingFormControl?.value)
      .subscribe(
        (response) => {
          console.log('Member registered successfully:', response);
          Swal.fire('Success', 'Member registered successfully', 'success');
        },
        (error) => {
          console.error('Error sending competition data:', error);
          Swal.fire('Error', error.error, 'error');
        }
      );
  }
  


  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
  searchMember(){
    this.memberService.searchMember(this.name).pipe(
      map(data=> data),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {

          console.error('Error:', error.error);
          return throwError(error.error);
        } else {        
          console.error('An unexpected error occurred:', error);
          return throwError(error.error);
        }})
        ).subscribe(
          (data: any) => {
            this.members = data.result;
            console.log(data.result);
          },
        );

  }
}
