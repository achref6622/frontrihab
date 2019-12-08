import { Injectable } from '@angular/core';
import {Reunion} from '../model/reunion' ;
import {Config} from '../utils/Config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private url = Config.BASE_URL + '/reunion';

  constructor(private httpClient:HttpClient) { }


   public getAll(): Observable<Reunion[]> {
    return this.httpClient.get<Reunion[]>(this.url);
  }
}

