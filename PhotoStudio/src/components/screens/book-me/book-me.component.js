import renderService from '@/core/services/render.service'

import template from './book-me.template.html'
import styles from './book-me.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'
import { Heading } from '@/components/ui/heading/heading.component'
import { $R } from '@/core/rquery/rquery.lib'
import { InputField } from '@/components/ui/input-field/input-field.component'


export class BookMe extends BaseScreen {

  constructor(){
    super({title:'Book me'})
  }

  render(){
    this.element = renderService.htmlToElement(template, [
      new Heading('Lets get in touch')
    ], styles)
    
    $R(this.element).find('#input-fields').append(
      new InputField({
        inputName:'MY NAME:'
      }).render()
    )
    .append(
      new InputField({
        inputName:'TYPE OF BOOKING:'
      }).render()
    )
    .append(
      new InputField({
        type: 'email',
        inputName:'EMAIL:'
      }).render()
    )
    .append(
      new InputField({
        type:'number',
        inputName:'PHONE NUMBER:'
      }).render()
    )


    return this.element
  }
}