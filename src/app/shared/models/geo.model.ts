export interface IGeo {
  lat: string;
  lng: string;
}

export class Geo {
  lat: string;
  lng: string;

  constructor( geo: IGeo ) {
    this.lat = geo.lat;
    this.lng = geo.lng;
  }
}
