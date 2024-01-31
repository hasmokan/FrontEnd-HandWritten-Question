function getType(value){
    if(!value) {
        return value + ''
    }

    if(typeof value === 'object'){
        let valueClass = Object.prototype.toString.call(value)
        type = valueClass.split('')[1]
        console.log(type)
    }
}


getType('123')