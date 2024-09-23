import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-list/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }


getAllProperties(): Observable<IProperty[]>{
 return this.http.get('data/properties.json').pipe(map(data => {
  const PropertiesArray: Array<IProperty> =[];
  for(const id in data){
    if(data.hasOwnProperty(id))
    {
      PropertiesArray.push(data[id]);
    }
  
 }
   return PropertiesArray;
   }))
 }

}

