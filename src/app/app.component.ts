import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:left">
     <h1> {{title}}</h1>
    <product-detail></product-detail>

    </div>
  `,
  styles: [`
  div {
    
    border:1px solid red;
    
  }
 `]
})
export class AppComponent {
  title = 'Welcome to App Store!';
}
