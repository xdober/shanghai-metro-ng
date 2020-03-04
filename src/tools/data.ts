export class Line {
    line_no:number;
    color:string;
    bgcolor:string;
}

export class Station{
    id: string
    title: string
    description: string
    pin: string
    fill: string
    x: string
    y: string
    zoom: string
    transfer:Line[]
}

export class TubeLevel{
    id: string
    title: string
    map: string
    minimap: string
    locations: Station[]
}

export class LineDetail{
    client_tag: string
    mapwidth: string
    mapheight: string
    categories: []
    levels: TubeLevel[]
}

export class StationDirection{
    line: number
    stat_id: string
    name: string
    station_code: string
    first_time: string
    first_time_desc: string
    last_time: string
    last_time_desc: string
    direction: number
    description: string
    firstarrival_time: number
    lastarrival_time: number
}