import { Component } from "@angular/core";
import { discoverDirectives } from "@angular/core/src/render3/context_discovery";

@Component({
   selector: 'pm-root',
   template: 
   `<div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
    
})

export class AppComponent {
  pageTitle: string = 'Ace Product Managment';
}
