import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './service-card.template.html'
import styles from './service-card.module.scss'
import { $R } from '@/core/rquery/rquery.lib'


export class ServiceCard extends ChildComponent {
  constructor({imagePath, serviceName}){
    super()

    this.imagePath = imagePath
    this.serviceName = serviceName
  }

  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    
    $R(this.element).find('img').attribute('src', this.imagePath)

    $R(this.element).find('span').text(this.serviceName)

    return this.element
  }
}