import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './heading.template.html'
import styles from './heading.module.scss'
import { $R } from '@/core/rquery/rquery.lib'


export class Heading extends ChildComponent {
  constructor(headingText){
    super()

    this.headingText = headingText
  }

  render(){
    this.element = renderService.htmlToElement(template, [], styles)

    $R(this.element).text(this.headingText)

    return this.element
  }
}