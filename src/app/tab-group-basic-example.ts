import { Component } from "@angular/core";

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: "tab-group-basic-example",
  templateUrl: "tab-group-basic-example.html"
})
export class TabGroupBasicExample {
  name = "Angular";
  BuyFee = 0.001425;
  Discount = 0.28;
  tax = 0;
  Stack = 1;
  BPrice = 0;
  SPrice = 0;
  Amount = 0;
  BuyFeeCount = 0;
  tax2 = 0.001;
}

export class AppComponent {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
