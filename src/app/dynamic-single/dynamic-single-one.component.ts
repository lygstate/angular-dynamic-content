import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Form, { FormProps, IChangeEvent, ErrorSchema } from 'react-jsonschema-form'

@Component({
  selector: 'app-dynamic-single-one',
  template: `<div #container></div>`,
  styleUrls: ['./dynamic-single-one.component.css']
})
export class DynamicSingleOneComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  constructor() {}

  ngOnInit() {}

  async ngOnChanges() {
    console.log('DynamicSingleOneComponent ngOnChanges')
  }

  async ngAfterViewInit() {
    const formProps: FormProps<any> = {
      schema: {
        "title": "A registration form",
        "description": "A simple form example.",
        "type": "object",
        "required": [
          "firstName",
          "lastName"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "age": {
            "type": "integer",
            "title": "Age"
          },
          "bio": {
            "type": "string",
            "title": "Bio"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
          },
          "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
          }
        }
      },
      uiSchema: {
        "firstName": {
          "ui:autofocus": true,
          "ui:emptyValue": ""
        },
        "age": {
          "ui:widget": "updown",
          "ui:title": "Age of person",
          "ui:description": "(earthian year)"
        },
        "bio": {
          "ui:widget": "textarea"
        },
        "password": {
          "ui:widget": "password",
          "ui:help": "Hint: Make it strong!"
        },
        "date": {
          "ui:widget": "alt-datetime"
        },
        "telephone": {
          "ui:options": {
            "inputType": "tel"
          }
        }
      },
      formData: {
        "firstName": "Chuck",
        "lastName": "Norris",
        "age": 75,
        "bio": "Roundhouse kicking asses since 1940",
        "password": "noneed"
      },
    }
    ReactDOM.render(React.createElement(Form, formProps, React.createElement('div')), this.container.element.nativeElement)
    console.log('DynamicSingleOneComponent ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('JsonSchemaComponent ngOnDestroy')
    ReactDOM.unmountComponentAtNode(this.container.element.nativeElement)
  }
}
