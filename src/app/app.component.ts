import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName: string = 'DynamicSingleOneComponent';
  modulePath: string = 'src/app/dynamic-single/dynamic-single.module';
  moduleName: string = 'DynamicSingleModule';
  renderComponent() {}
}
