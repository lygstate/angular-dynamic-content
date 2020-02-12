import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicSingleOneComponent } from './dynamic-single-one.component';

@NgModule({
  declarations: [DynamicSingleOneComponent],
  imports: [CommonModule],
  exports: [DynamicSingleOneComponent],
  entryComponents: [DynamicSingleOneComponent]
})
export class DynamicSingleModule {
  static dynamicComponentsMap = {
    DynamicSingleOneComponent
  };
}
