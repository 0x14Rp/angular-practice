import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any= {};

  constructor(private activateRoute:ActivatedRoute,
              private _heroesService:HeroesService
    ) { 

      this.activateRoute.params.subscribe(params =>{
       this.heroe = this._heroesService.getHeroe( params['id'] );
        //console.log(params);
      
      });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

}
