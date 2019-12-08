import { Component, OnInit } from '@angular/core';
import {ReunionService} from '../../service/reunion.service' ;

@Component({
  selector: 'app-rensignement',
  templateUrl: './rensignement.component.html',
  styleUrls: ['./rensignement.component.css']
})
export class RensignementComponent implements OnInit {

  constructor(private reunionService: ReunionService) { }
  ngOnInit() {
    this.getAll () ;
      }
      
       private getAll() {
    
        this.reunionService.getAll().subscribe(data => {
          console.log(data);
        }, ex => {
          console.log(ex);
        });
      }
}
