import { Component, OnInit } from '@angular/core';
import { MembreService } from '../../Service/membre.service';
import { Membre } from '../../Model/membre';
@Component({
  selector: 'app-membre-update',
  templateUrl: './membre-update.component.html',
  styleUrls: ['./membre-update.component.css']
})
export class MembreUpdateComponent implements OnInit {
constructor( private membreservice: MembreService) {}
 membres: Membre[] = new Array();



ngOnInit(){this.getAll(); }

 private getAll() {

  this.membreservice.getAll().subscribe(data => {

     this.membres = data ;
      console.log(data);
    }, ex => {
      console.log(ex);
    });

  }


}
