import {Component} from '@angular/core';

import {BarcodeService} from "./services/barcode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-global-feture-test';

  public barcodeData: string = "";
  src: string = "assets/Barcode-pana.svg";

  constructor(private barcodeService: BarcodeService) {
  }

  ngOnInit() {

    this.barcodeService.initBarcodeReading();

    // subscribe barcodeChange
    this.barcodeService.getBarcode().subscribe(response => {
      this.barcodeData = response;
    })
  }








}

