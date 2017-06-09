import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ModelVisite } from '../../models/ModelVisite';
/*
  Generated class for the ControleurVisiteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ControleurVisiteListProvider {

  jsonApiUrl = 'http://172.29.56.14/~tnour1/ionicNewWorld/jsonCreatorListeVisite.php'
  constructor(public http: Http) { }

  load(): Observable<ModelVisite[]>{
    //console.log(this.jsonApiUrl);
    //console.log(this.http.get(`${this.jsonApiUrl}?idControleur=2`));

    return this.http.get(`${this.jsonApiUrl}?idControleur=2`).map(res => <ModelVisite[]>res.json());
  }
}
