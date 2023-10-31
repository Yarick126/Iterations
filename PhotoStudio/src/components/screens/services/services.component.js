import renderService from '@/core/services/render.service'

import template from './services.template.html'
import styles from './services.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import { ServiceCard } from '@/components/ui/service-card/service-card.component'


export class Services extends BaseScreen {
  constructor(){
    super({title: 'Services'})
  }
  render(){
    this.element = renderService.htmlToElement(template, [], styles)
    $R(this.element)
      .find('#service-cards')
      .append( 
        new ServiceCard({
          imagePath: 'https://avatars.mds.yandex.net/i?id=1dc51dc645ecf8c628ef8cc71ce0d56968db88f1-9228969-images-thumbs&n=13',
          serviceName: 'PHOTOSHOOT'
        }).render())
        .append( 
          new ServiceCard({
            imagePath: 'https://blog.nextonlabs.com/hs-fs/hubfs/21207.jpg?width=7064&name=21207.jpg',
            serviceName: 'PRIVATE HIRE'
          }).render())
        .append( 
        new ServiceCard({
          imagePath: 'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized/d/7/d7006d04743a15edca984505aad26efb0ec80d3a14b95ba1805532066543dc6c/team-collaboration-slide3.png',
          serviceName: 'TEAM COLLAB'
        }).render())

    return this.element
  }
}