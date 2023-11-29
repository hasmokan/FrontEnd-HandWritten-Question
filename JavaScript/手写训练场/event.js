class Event{
    constructor(){
        this.map = new Map()
    }

    on(eventName, callback){
        if(!this.map.has(eventName)){
            this.map.set(eventName, [callback])
        }
        else{
            this.map.set(eventName,this.map.get(eventName).push(callback))
        }
    }

    emit(eventName, ...param){
        let eventArr = this.map.get(eventName)
        eventArr.map(item => item(...param))
    }

    delete(eventName, callback){
        if(!callback)
            this.map.delete(eventName)
        else {
            let val = this.map.get(eventName)
            this.map.set(eventName, val.filter(item => item !== callback))
        } 

    }
}

