import renderService from '@/core/services/render.service'

import template from './about-us.template.html'
import styles from './about-us.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'


export class AboutUs extends BaseScreen {
  constructor(){
    super({title:'About us'})
  }
  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    return this.element
  }
}