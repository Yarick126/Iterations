import renderService from '@/core/services/render.service'

import template from './home.template.html'
import styles from './home.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'


export class Home extends BaseScreen {

  constructor(){
    super({title: 'Home'})
  }
  
  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    
    return this.element
  }
}