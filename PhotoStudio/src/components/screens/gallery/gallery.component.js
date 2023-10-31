import renderService from '@/core/services/render.service'

import template from './gallery.template.html'
import styles from './gallery.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'
import { PhotoCard } from '@/components/ui/photo-card/photo-card.component'
import { $R } from '@/core/rquery/rquery.lib'


export class Gallery extends BaseScreen {
  constructor(){
    super({title: 'Gallery'})
  }

  render(){
    this.element = renderService.htmlToElement(template, [
      
    ], styles)

    $R(this.element).find('#photo-category').append(new PhotoCard(
      {
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/800px-Mona_Lisa-restored.jpg',
        categoryName: 'PORTRAITS'
      }).render())
      .append(new PhotoCard(
        {
          imagePath: 'https://www.usmagazine.com/wp-content/uploads/2022/06/The-Bachelors-Haley-Ferguson-and-Oula-Palve-Are-Married-After-Las-Vegas-Wedding-See-the-Romantic-Photos-04.jpg?w=1200&quality=82&strip=all',
          categoryName: 'WEDDING'
        }).render())
      .append(new PhotoCard(
        {
          imagePath: 'https://i.pinimg.com/originals/6b/1d/35/6b1d35558d72fb03c01b5d78baa30334.jpg',
          categoryName: 'DRONE'
        }).render())
    
    return this.element
  }
}