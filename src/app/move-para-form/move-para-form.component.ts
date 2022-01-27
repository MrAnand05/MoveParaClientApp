import { Component, OnInit } from '@angular/core';
import { MovePara } from '../shared/move-para.model';
import { MoveParaService } from '../shared/move-para.service';
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { concatAll } from 'rxjs';

//TODO: Remove okCLick function .
@Component({
  selector: 'app-move-para-form',
  templateUrl: './move-para-form.component.html',
  styleUrls: ['./move-para-form.component.css']
})
export class MoveParaFormComponent implements OnInit {

  constructor(public service:MoveParaService) { }

  ngOnInit(): void {
    this.service.refreshList().subscribe(res=>{this.service.btnColor = res; this.service.getParaLeft().subscribe(data=>{ this.service.paraLeft = data; this.service.getParaRight().subscribe(data=>{ this.service.paraRight = data})})});
  }
  
  faArrowLeft = faArrowLeft; 
  faArrowRight = faArrowRight;
  Left:string="left";
  Right:string="right";
  containerString:any;

  //public bodyText$: Observable<string> | undefined;


onSelectL(para: MovePara): void {
  this.service.selectedPara = para;
  }
onSelectR(para: MovePara): void {
    this.service.selectedPara = para;
    }

  okClick():void{
    this.service.getParaRightDesc();
  }

  fillContainer(){
    //this.bodyText$=this.service.paraRightDesc()
    
    this.service.getParaRightDesc().subscribe(res=>this.containerString=res.toString());
    console.log(this.containerString);
  }

}
