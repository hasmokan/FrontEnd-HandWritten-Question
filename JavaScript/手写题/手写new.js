function myNew(){
    let newObj = null
    let constructor = Array.prototype.shift
}



var obj = { 
    name : 'cuggz', 
    fun : function(){ 
      console.log(this.name); 
    } 
  } 
  obj.fun()     // cuggz
  new obj.fun() // undefined
  