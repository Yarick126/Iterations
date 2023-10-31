import renderService from '@/core/services/render.service'

import template from './not-found.template.html'
import styles from './not-found.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'


export class NotFound extends BaseScreen {
  constructor(){
    super({title: 'Not found'})
  }
  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    return this.element
  }
}