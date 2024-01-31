function debounce(func, delay){
  let timer
  return function(...args){
    if(timer){
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => func.apply(this, args), delay)

  }
}


function debounce(func, delay){
  let timer;
  return function(){
    if(timer){
      clearTimeout(timer)
      timer = null      
    }
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}