import { Injectable } from '@angular/core';
import { Station, Line, LineDetail, StationDirection } from "../../../tools/data";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor() { }

  produceLineTitle(lines:Line[]){
    lines.forEach(line => {
      line.title=line.line_no===41?"浦江线":`${line.line_no}号线`
    });
  }

  addStationsForLine(lineDetail:LineDetail)  {

  }

  addTransferForLine(line:Line,transfers:StationDirection[],allLines:Line[]){
    let distincted = Array.from(new Set(transfers.map((item)=> { return {line: item.line,name: item.name}})));
    distincted.forEach(element => {
      if(element.line===line.line_no){
        return;
      }
     
      for (let index = 0; index < line.stations.length; index++) {
        let curStat = line.stations[index];
        if(!curStat.transfer) curStat.transfer=[];
        if( curStat.transfer.filter(x=>{
          return x.line_no===element.line
        }).length===0 && curStat.title===element.name){
          let newLine = allLines.filter(e=>{
            return e.line_no===element.line
          })[0]
          curStat.transfer.push(newLine)
        }
      }
    });
  }
}
