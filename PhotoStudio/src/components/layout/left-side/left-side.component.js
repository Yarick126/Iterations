import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './left-side.template.html'
import styles from './left-side.module.scss'
import { $R } from '@/core/rquery/rquery.lib'

export class LeftSide extends ChildComponent {
  constructor({router = null}){
    super()
    this.router = router
  }

  render(){ 
    this.element = renderService.htmlToElement(template, [], styles)

    return this.element
  }
}