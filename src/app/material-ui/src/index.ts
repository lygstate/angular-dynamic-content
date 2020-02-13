
import { default as React }  from 'react'
import { default as ReactDOM } from 'react-dom'

import { withTheme, FormProps } from 'react-jsonschema-form'
import { default as Theme } from './Theme';

const Form = withTheme(Theme)

export function renderAtElement(nativeElement: any, formProps: FormProps<any>) {
  ReactDOM.render(React.createElement(Form, formProps, []), nativeElement)
}

export function unmountAtElement(nativeElement) {
  ReactDOM.unmountComponentAtNode(nativeElement)
}
