import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JsonSchemaModule } from './JsonSchema/JsonSchemaComponent.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonSchemaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
