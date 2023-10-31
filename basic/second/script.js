const inputs = document.querySelectorAll('input')
const solution = document.querySelector('button')
const operator = document.querySelector('select')
const answer = document.querySelector('#answer')
const userInfo = document.querySelector('#userInfo')

const userName = document.querySelector('#name')
const userAge = document.querySelector('#age')
const userSex = document.querySelector('#sex')
const isAlive = document.querySelector('#isAlive')
const sendInfo =document.querySelector('#send')


class User {

  constructor(name, age, sex, alive = true){
    this.name = name
    this.age = age
    this.sex = sex
    this.alive = alive
  }

  getInfo = (e)=>{
    e.innerHTML = 'Info: '
    if(this.alive === 'true')
      e.innerHTML += `His name ${this.name}, ${this.age}'s old, sex: ${this.sex}`
    else
      e.innerHTML += 'Hes dead' 
  }
}

class Male extends User{
  constructor(married = false){
    super()
    this.married = married
  }
}

inputs[1].focus()

solution.addEventListener('click', ()=>{
  console.clear()
  if(!parseInt(inputs[0].value) || !parseInt(inputs[1].value)){
    console.error('there is no params!');
    return
  }
  try {
    answer.innerHTML =  ''
    answer.innerHTML += eval(inputs[0].value+operator.value+inputs[1].value);  
  } catch (error) {
    throw new Error(error)
  }
})

sendInfo.addEventListener('click', (e)=>{
  e.preventDefault()
  if(!userName.value || !userAge.value || userSex.value === 'choose your sex'){
    alert('Enter the damn info!')
    return
  }

  new User(userName.value, userAge.value, userSex.value, isAlive.value).getInfo(userInfo)

  
})