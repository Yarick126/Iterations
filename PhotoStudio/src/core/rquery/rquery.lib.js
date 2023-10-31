class RQuery {
  constructor(selector){
    if(typeof selector === 'string'){
      this.element = document.querySelector(selector)

      if(!this.element){
        throw new Error(`Not found ${selector}`)
      }
    }
    else if(selector instanceof HTMLElement) {
      this.element = selector
    }
    else {
      throw new Error('Selector must be string or HTMLElement')
    }

    return this
  }

  addClass(classNames){
      if(Array.isArray(classNames)){
        classNames.forEach(e=>{
          this.element.classList.add(e)
        })
      }else{
        this.element.classList.add(classNames)
      }
  
      return this
  }
  
  removeClass(classNames){
      if(Array.isArray(classNames)){
        classNames.forEach(e=>{
          this.element.classList.remove(e)
        })
      }else{
        this.element.classList.remove(classNames)
      }
  
      return this
  }

  on(event, func){
    if(typeof event !== 'string' || typeof func !== 'function'){
      throw new Error('Event must be a string and func must be a function')
    }
    else{
      this.element.addEventListener(event, func)
      return this
    }
  }

  click(onClick){
    if(typeof onClick === 'function'){
      this.element.addEventListener('click', onClick)
    }
    else{
      throw new Error('onClick must be a function')
    }
  }

  find(selector){
    const element = new RQuery(this.element.querySelector(selector))

    if(element){
      return element
    }else{
      throw new Error(`${selector} not found`)
    }
  }

  findAll(selector){
    const elements = this.element.querySelectorAll(selector)
    return Array.from(elements).map(element => new RQuery(element))
  }

  css(key, value){
    if(typeof key !== 'string' || typeof value !== 'string'){
      throw new Error('Key and value must be an string')
    }

    this.element.style[key] = value

    return this
  }

  append(element){
    this.element.appendChild(element)
    return this
  }

  before(newElement){
    if(!(newElement instanceof HTMLElement)){
      throw new Error('Element must be an HTMLElement')
    }

    const parentElement = this.element.parentElement

    if(parentElement){
      parentElement.insertBefore(newElement, this.element)
      return this
    }
    else{
      throw new Error('Element does not have a parent element')
    }
  }

  text(text){
    if(typeof text !== 'string'){
      throw new Error('Text must be a string')
    }
    else{
      this.element.textContent = ''
      this.element.textContent = text
      return this
    }
  }

  html(htmlContent) {
		if (typeof htmlContent === 'undefined') {
			return this.element.innerHTML
		} else {
			this.element.innerHTML = htmlContent
			return this
		} 
  }

  attribute(key, value){
    if(typeof key !== 'string' || typeof value !== 'string'){
      throw new Error('Key and value must be a string')
    }

    if(value === undefined){
      this.element.getAttribute(key)
    }
    else{
      this.element.setAttribute(key, value)
    }

    return this
  }
}

export function $R(selector){
  return new RQuery(selector)
}