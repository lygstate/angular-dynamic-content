import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonSchemaComponent } from './JsonSchemaComponent';

@NgModule({
  declarations: [JsonSchemaComponent],
  imports: [CommonModule],
  exports: [JsonSchemaComponent],
  entryComponents: [JsonSchemaComponent]
})
export class JsonSchemaModule {
  static dynamicComponentsMap = {
    JsonSchemaComponent
  };
}
