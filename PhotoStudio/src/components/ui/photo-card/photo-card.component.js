import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './photo-card.template.html'
import styles from './photo-card.module.scss'
import { $R } from '@/core/rquery/rquery.lib'


export class PhotoCard extends ChildComponent {
  
  constructor({imagePath, categoryName}){
    super()

    this.imagePath = imagePath
    this.categoryName = categoryName
  }

  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    
    $R(this.element).find('img').attribute('src', this.imagePath)
    $R(this.element).find('span').text(this.categoryName)

    return this.element
  }
}