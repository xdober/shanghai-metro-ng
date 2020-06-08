import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpRequest } from "@angular/common/http";
import { ConfigService } from "../service/config/config.service";
import { Line, LineDetail, StationDirection, Station } from "../../tools/data";
import { animate,trigger,transition,query,stagger,style, keyframes } from "@angular/animations";
import { StationService } from "../service/station/station.service";

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.less'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(10, [
            animate('0.5s', style({ height: 0,opacity:0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          stagger(10, [
            style({opacity:0}),
            animate('0.5s' , style({ opacity: 1 }))
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
  currentLineStations = [];

  startLine = new Line();
  startStation=new Station();
  endLine = new Line();
  endStation=new Station();
  distLine = new Line();
  distStation = new Station();

  constructor(private _http:HttpClient,private configService:ConfigService,private stationService:StationService) { }

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
      this.stationService.produceLineTitle(this.lines);
      console.log(data);
    })
  }
  async getLineStations(lineNo:number){
    this.currentLineStations=[];
    let curLine=this.lines.filter((line:Line)=>{return line.line_no===lineNo})[0]
    if(curLine && curLine.stations && curLine.stations.length>0){
      this.currentLineStations = curLine.stations;
      return;
    }
    let lineDetail = await this.configService.getLineStations(lineNo).toPromise();
    //先加载出站点
    this.currentLineStations = lineDetail.levels[0].locations;

    curLine.stations=lineDetail.levels[0].locations;
    // curLine.stations.forEach(e=>{ e.transfer=[]})

    let transfers = await this.configService.getLineExfStations(lineNo).toPromise();
    this.stationService.addTransferForLine(curLine,transfers,this.lines);
    this.currentLineStations = curLine.stations;
    
  }

}
