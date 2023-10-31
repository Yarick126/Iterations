import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './input-field.template.html'
import styles from './input-field.module.scss'
import { $R } from '@/core/rquery/rquery.lib'


export class InputField extends ChildComponent {
  constructor({type='text', inputName}){
    super()

    this.type = type
    this.inputName = inputName
  }

  render(){
    this.element = renderService.htmlToElement(template, [], styles)

    $R(this.element).find('input').attribute('type', this.type)
    $R(this.element).find('span').text(this.inputName)

    return this.element
  }
}