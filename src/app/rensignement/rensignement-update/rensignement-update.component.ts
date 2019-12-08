import { Component, OnInit  } from '@angular/core';
import {ReunionService} from '../../service/reunion.service' ;
import { Reunion } from '../../Model/reunion';
/*import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
*/

@Component({
  selector: 'app-rensignement-update',
  templateUrl: './rensignement-update.component.html',
  styleUrls: ['./rensignement-update.component.css']
})
export class RensignementUpdateComponent implements OnInit {


constructor( private reunionservice: ReunionService) {}
 r: Reunion[] = new Array();



ngOnInit(){

  this.getAll () ;
 }

 private getAll() {

  this.reunionservice.getAll().subscribe(data => {
this.r=data ;
      console.log(this.r);
    }, ex => {
      console.log(ex);
    });

  }


}

