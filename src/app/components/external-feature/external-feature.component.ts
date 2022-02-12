import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppComponent} from "../../app.component";
import {BarcodeService} from "../../services/barcode.service";

@Component({
  selector: 'app-external-feature',
  templateUrl: './external-feature.component.html',
  styleUrls: ['./external-feature.component.css']
})
export class ExternalFeatureComponent implements OnInit {

  public barcode = '';

  constructor()  {
  }

  ngOnInit(): void {}

}
