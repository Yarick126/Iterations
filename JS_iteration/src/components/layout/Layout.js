import header from './header/Header.component';
import './Layout.scss'

class Layout{

  constructor(){

  }

  render(){
    const container = document.createElement('div')
    container.className = 'container'
    container.appendChild(header)

    return container
  }
}

export default Layout