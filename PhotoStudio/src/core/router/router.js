import { NotFound } from "@/components/screens/not-found/not-found.component"
import { ROUTES } from "./routes.data"
import { Layout } from "@/components/layout/layout.component"
import { $R } from "../rquery/rquery.lib"

export class Router {
  #routes = ROUTES
  #currentRoute = null
  #layout = null

  constructor(){
    window.addEventListener('popstate', () => {
      this.#handleRouteChange()
    })

    this.#handleRouteChange()
    this.#handleLinks()
  }

  getCurrentPath=()=>{
    return window.location.pathname
  }

  navigate(path){
    if(path !== this.getCurrentPath()){
      window.history.pushState({}, '', path)
      this.#handleRouteChange()
    }
  }

  #handleLinks(){
    document.addEventListener('click', event =>{
      const target = event.target.closest('a')
      if(target){
        event.preventDefault()
        this.navigate(target.href)
      }
    })
  }

  #handleRouteChange(){
    const path = this.getCurrentPath() || '/'
    let route = this.#routes.find(route => route.path === path)

    if(!route){
      route = {
        component: NotFound
      }
    }

    this.#currentRoute = route
    this.#render()
  }

  #render(){
    const component = new this.#currentRoute.component()
    let directoryName = component.constructor.name.toUpperCase(), 
        urlImage = ''
    if(component.constructor.name.toUpperCase() === 'HOME'){
      directoryName = ' '
      urlImage = 'url("https://media.istockphoto.com/id/1093914934/photo/empty-studio-with-photography-lighting.jpg?s=612x612&w=0&k=20&c=WI0OApbMzeRviRwFR9tISanskRu_TEFxA8ztYZERsVA=")'
    }

    if(!this.#layout){
      this.#layout = new Layout({
        router: this,
        children: component.render(),
      }).render()
      
      $R('#app').append(this.#layout)
    }else{
      $R('#content').html('').append(component.render())
    }
    $R('#app').find('span').html('').text(directoryName)
    $R(this.#layout).css('background-image', urlImage)
  }
}