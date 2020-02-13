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

import { FormProps, IChangeEvent, ErrorSchema } from 'react-jsonschema-form'
const rjsfPromise = import('../material-ui/src')

export const testFormPros: FormProps<any> = {
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

@Component({
  selector: 'JsonSchemaComponent',
  template: `<div #container></div>`,
  styleUrls: ['./JsonSchemaComponent.scss']
})
export class JsonSchemaComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @Input() schema: any
  @Input() formData: any
  @Input() onChange?: (e: IChangeEvent<any>, es?: ErrorSchema) => any

  constructor() {}

  ngOnInit() {}

  async ngOnChanges() {
    await this.render()
    console.log('DynamicSingleOneComponent ngOnChanges')
  }

  async render() {
    const formProps: FormProps<any> = {
      schema: this.schema,
      formData: this.formData,
      onChange: this.onChange,
    }

    const rjsf = await rjsfPromise
    rjsf.renderAtElement(this.container.element.nativeElement, testFormPros)
  }

  async ngAfterViewInit() {
    await this.render()
    console.log('DynamicSingleOneComponent ngAfterViewInit')
  }

  async ngOnDestroy() {
    console.log('JsonSchemaComponent ngOnDestroy')
    const rjsf = await rjsfPromise
    rjsf.unmountAtElement(this.container.element.nativeElement)
  }
}
