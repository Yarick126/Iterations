const app = document.querySelector('#app')


function* gen() {
  let ask1 = yield "2 + 2 = ?";

  alert(ask1);

  let ask2 = yield "3 * 3 = ?"

  alert(ask2); 
}



const  Main = ()=> {

  function* gen() {
    try {
      let result = yield "2 + 2 = ?";
  
      alert("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
    } catch(e) {
      alert(e);
    }
  }
  
  let generator = gen();
  
  generator.throw(new Error("Ответ не найден в моей базе данных")); // (2)

  const main = document.createElement('main')

  return main
}

app.appendChild(Main())