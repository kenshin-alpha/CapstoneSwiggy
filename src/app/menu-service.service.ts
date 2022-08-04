import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class MenuServiceService {

  path: String = "http://swiggy-env.eba-pcfujm5q.ap-south-1.elasticbeanstalk.com";

  constructor(public HttpClient: HttpClient) { }
  public getItems():any{
    let url = this.path + "/menu";
    return this.HttpClient.get(url);
  }
}
