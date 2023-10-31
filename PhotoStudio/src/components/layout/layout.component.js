import ChildComponent from '@/core/components/child.component'
import renderService from '@/core/services/render.service'

import template from './layout.template.html'
import styles from './layout.module.scss'
import { LeftSide } from './left-side/left-side.component'
import { Header } from './header/header.component'
import { $R } from '@/core/rquery/rquery.lib'


export class Layout extends ChildComponent {

  constructor({router, children}){
    super()

    this.router = router
    this.children = children

  }



  render(){
    this.element = renderService.htmlToElement(template, [], styles)

    let mainElement = $R(this.element).find('main');

    const contentContainer = $R(this.element).find('#content')
		contentContainer.append(this.children)

		mainElement
      .before(new Header().render())
      .append(contentContainer.element)

    const leftComponent = new LeftSide(
      {
        router: this.router
      }).render()
  
    $R(this.element).find('#left-side').append(leftComponent)

    return this.element
  }
}