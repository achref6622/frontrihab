import { Component, OnInit } from '@angular/core';
/*
import { ReunionService } from '../../Service/reunion.service';
import { Reunion } from '../../Model/reunion';
import { FormGroup, FormControl } from '@angular/forms';*/
@Component({
  selector: 'app-rensignement-add',
  templateUrl: './rensignement-add.component.html',
  styleUrls: ['./rensignement-add.component.css']
})
export class RensignementAddComponent implements OnInit {

constructor(/*private reunionservice:ReunionService*/) { }

/*
 reunion : Reunion=new Reunion ();
  submitted = false;
*/
 ngOnInit() {  /* this.submitted=false; */ }
/*
     Reunionform=new FormGroup({
     objectif_form:new FormControl( ),
    date_form:new FormControl(),
    heuredeb_form:new FormControl(),
     heurefin_form:new FormControl(),
      pv_form:new FormControl() ,
       type_form:new FormControl()
  });

  saveReunion(saveReunion){
    this.reunion=new Reunion();
    this.reunion.objectif_reunion=this.objectif.value;
    this.reunion.date_reunion=this.date.value;
    this.reunion.heure_debut=this.heuredeb.value;
    this.reunion.heure_fin=this.heurefin.value;
    this.reunion.pv=this.pv.value;
  this.reunion.type_reunion=this.type.value;
    this.submitted = true;
    this.save();
  }

  save() {
this.reunionservice.save(this.reunion)
     .subscribe(data => console.log(data), error => console.log(error));
    this.reunion = new Reunion();
  }
  get objectif(){
    return this.Reunionform.get('objectif_form');
  }

  get date(){
    return this.Reunionform.get('date_form');
  }

  get type(){
    return this.Reunionform.get('type_form');
  }

  get heuredeb(){
    return this.Reunionform.get('heuredeb_form');
  }

  get heurefin(){
    return this.Reunionform.get('heurefin_form');
  }

   get pv(){
    return this.Reunionform.get('pv_form');
  }

  addReunionForm(){
    this.submitted=false;
    this.Reunionform.reset();
  }
*/
}
