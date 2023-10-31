import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './header.template.html'
import styles from './header.module.scss'


export class Header extends ChildComponent {

  constructor(){
    super()
  }

  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    return this.element
  }
}