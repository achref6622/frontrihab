import { Component, OnInit } from '@angular/core';
import { MembreService } from '../../Service/membre.service';
import { Membre } from '../../Model/membre';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-membre-add',
  templateUrl: './membre-add.component.html',
  styleUrls: ['./membre-add.component.css']
})
export class MembreAddComponent implements OnInit {

  constructor(private membreservice:MembreService) { }


membre : Membre=new Membre ();
  submitted = false;

 ngOnInit() {   this.submitted=false;  }

     Membreform=new FormGroup({
     cin_form:new FormControl( ),
    prenom_form:new FormControl(),
   nom_form:new FormControl(),
    poste_form:new FormControl(),
     email_form:new FormControl() ,
     adresse_form:new FormControl()
  });

  saveMembre(saveMembre){
    this.membre=new Membre();
    this.membre.cin=this.cin.value;
    this.membre.prenom=this.prenom.value;
    this.membre.nom=this.nom.value;
    this.membre.poste_membre=this.poste.value;
    this.membre.email=this.email.value;
  this.membre.adresse=this.adresse.value;
 this.membre.tel=this.tel.value;

  }


  get cin(){
    return this.Membreform.get('cin');
  }

  get prenom(){
    return this.Membreform.get('prenom');
  }

  get nom(){
    return this.Membreform.get('nom');
  }

  get poste(){
    return this.Membreform.get('poste');
  }
  get email(){
    return this.Membreform.get('email');
  }
   get adresse(){
    return this.Membreform.get('adresse');
  }
   get tel(){
    return this.Membreform.get('tel');
  }

  addMembreForm(){
    this.submitted=false;
    this.Membreform.reset();
  }
}
