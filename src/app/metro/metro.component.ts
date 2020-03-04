import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpRequest } from "@angular/common/http";
import { ConfigService } from "../config/config.service";
import { Line, LineDetail, StationDirection } from "../../tools/data";
import { animate,trigger,transition,query,stagger,style, keyframes } from "@angular/animations";

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.less'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(10, [
            animate('0.5s', style({ height: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ height: 100 }),
          stagger(10, [
            animate('0.2s' , style({ height: 40 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class MetroComponent implements OnInit {

  tabs = [{title:"线路与车站",icon:"map"},{title:"路径与票价",icon:"directions"},{title:"实时运营信息",icon:"notifications"},{title:"电子致歉信",icon:"email"},{title:"新闻与互动",icon:"forum"}];
  lines:Line[] = [];
  cols=8;
  currentLine=new Line();
  stations = [];

  constructor(private _http:HttpClient,private configService:ConfigService) { }

  ngOnInit(): void {
    this.cols = (window.innerWidth <= 800) ? 4 : 8;
    this.getLines();
  }
  onResize(event): void{
    this.cols = (event.target.innerWidth <= 800) ? 4 : 8;
  }
  lineOnClick(){
  }
  logAnimation(_event) {
    console.log(_event)
  }
  lineGridClick(event:Line){
    this.currentLine=event;
    this.getLineStations(event.line_no);
  }
  getLines(){
    this.configService.getLines()
    .subscribe((data:Line[])=>{
      this.lines = data;
      console.log(data);
    })
  }
  getLineStations(lineNo:number){
    this.stations=[];
    this.configService.getLineStations(lineNo)
    .subscribe((date:LineDetail)=>{
      this.stations = date.levels[0].locations;
      this.stations.forEach(stati => {
        stati.transfer=[];
      });
      this.getLineExfStations(lineNo);
    })
  }
  getLineExfStations(lineNo:number){
    this.configService.getLineExfStations(lineNo)
    .subscribe((data:StationDirection[])=>{
      debugger
      data.forEach(element => {
        if(element.line===this.currentLine.line_no){
          return;
        }
        for (let index = 0; index < this.stations.length; index++) {
          const stat = this.stations[index];
          if( this.stations[index].transfer.filter(x=>{
            return x.line_no===element.line
          }).length===0 && stat.title===element.name){
            let newLine = this.lines.filter(e=>{
              return e.line_no===element.line
            })[0]
            this.stations[index].transfer.push(newLine)
          }
        }
      });
    })
  }

}
