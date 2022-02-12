import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  private barcodeBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject("");
  private inputDomElement?: HTMLInputElement;

  initBarcodeReading(){
    try {
      this.inputDomElement = <HTMLInputElement>document.getElementById("barcodeInput");

      document.addEventListener('DOMContentLoaded', (event) => {

        this.inputDomElement?.addEventListener('change',(e: Event) =>{
          this.barcodeBehaviorSubject.next((<HTMLInputElement>e.target).value);
        });

      })


    }catch (e: any){
      console.error(e);
    }
  }

  getBarcode(): Observable<string>{
    return this.barcodeBehaviorSubject
  }
}
