import { Component, OnInit, Input, inject } from '@angular/core';
import { MovePara } from '../shared/move-para.model';
import { MoveParaService } from '../shared/move-para.service';

@Component({
  selector: 'app-para-list',
  templateUrl: './para-list.component.html',
  styleUrls: ['./para-list.component.css']
})
export class ParaListComponent implements OnInit {
   @Input() listSide : string; 
   @Input() paraList : MovePara[];

  constructor(public service:MoveParaService) { }

  ngOnInit(): void {
  }

  onSelect(para:MovePara, listside:string){
    this.service.selectedPara=para;
    this.service.listSide = listside;
  }


}
