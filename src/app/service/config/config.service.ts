import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LineDetail, StationDirection } from 'src/tools/data';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
  getLinesUrl = '/interface/metromap/metromap.aspx?func=lines';

  getLineStationUrl = '/interface/metromap/metromap.aspx?func=lineStations&line=';

  getLineExfStationsUrl = '/interface/metromap/metromap.aspx?func=exfltime&line1=';

  getLines() {
    return this.http.get(this.getLinesUrl);
  }

  getLineStations(lineNo:number) {
    return this.http.get<LineDetail>(this.getLineStationUrl+lineNo)
  }

  getLineExfStations(lineNo:number){
    return this.http.get<StationDirection[]>(this.getLineExfStationsUrl+lineNo)
  }
}
