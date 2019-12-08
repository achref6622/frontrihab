import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Config} from '../utils/Config';
import{Membre} from '../Model/Membre'
import {Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

constructor(private httpClient: HttpClient) {}
public getAll(): Observable<Membre[]> {

  return this.httpClient.get<Membre[]>('http://localhost:9028/membre');
  }
public save(membre: Membre): Observable<any> {

  return this.httpClient.post('http://localhost:9028' + '/membre/add',membre);
  }

}
