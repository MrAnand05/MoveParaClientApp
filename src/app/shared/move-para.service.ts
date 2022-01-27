import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { MovePara, ParaDesc } from './move-para.model';
import { environment } from './../../environments/environment';
//TODO: Use observable or .Then insted of nested move function.
//TOD: Move function in component.
@Injectable({
  providedIn: 'root'
})
export class MoveParaService {

  constructor(private http:HttpClient) { }
  
selectedPara: MovePara;
listSide:string;
paraLeft:any;
paraRight:any;
paraRightDesc:any;
btnColor:any;
readonly baseUrl=environment.baseUrl;



public getParaLeft() {
  var Left="ParaLefts"; 
  return this.http.get(`${this.baseUrl}/${Left}`);
}
public getParaRight() {
  var Right="ParaRights";
  return this.http.get(`${this.baseUrl}/${Right}`);
}

getParaRightDesc(){
  var ParasRightDesc="ParaRights/Desc";
  //TODO: Description instead of Desc

  
  var LogButtonColor="ParaRights/LogButtonColor";
  const params = new HttpParams()
  .set('buttonColor', this.btnColor)

  const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
  this.http.post(`${this.baseUrl}/${LogButtonColor}`, {params}, {
    headers: headers,
    params: params,
  }).subscribe();

  return this.http.get(`${this.baseUrl}/${ParasRightDesc}`,{responseType:"text"} );

}

refreshList(){
  var ini="Paras/Initialize";
  return this.http.delete(`${this.baseUrl}/${ini}`,{responseType:"text"} );
}

movePara(){
  var move="Paras/Move";
  var data = [{id:this.selectedPara.paraId, side:this.listSide}];
  const params = new HttpParams()
  .set('id', this.selectedPara.paraId)
  .set('side', this.listSide);

  const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

  return this.http.post(`${this.baseUrl}/${move}`, {params}, {
    headers: headers,
    params: params,
  });

}

move(listside:string)
{
  if(this.selectedPara.paraId!='' && this.listSide==listside){
    this.movePara().subscribe(res=>this.getParaLeft().subscribe(data=>{ this.paraLeft = data; this.getParaRight().subscribe(data=>{ this.paraRight = data})}));
    this.selectedPara.paraId = '';
  }
}

}
