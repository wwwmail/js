
class EventManager {
    
    constructor() {
		
        this.events = {};
		
        if (EventManager._instance) {
            return EventManager._instance;
        }

        EventManager._instance = this;
    }

    static getInstance() {
        return EventManager._instance;
    }

    getListener() {
        return this.events;
    }
	
	setListener(key, value){
		
		return this.events[Object.keys(this.events).length] = {[key]:value};
	
	}

    addListener(listener, someEventFunction){
		
		return  this.setListener(listener, someEventFunction);

    }
	
	_checkEvent(event){
		for (var prop in this.events) {
			
			for (var propInner in this.events[prop]) {
				
				if(this.events[prop].hasOwnProperty(event)){
					
					return true;
				}else{
					return false;
				}
			}
		
		}
	}
	
	dispatch(event, data){
		
		
		for (var prop in this.events) {
			
			for (var propInner in this.events[prop]) {
				
				if(this._checkEvent(event) && propInner == event){
					this.events[prop][propInner](data);
				}else{
					throw "Cannot find event in EventManager"; 
				}
			}
		
		}

	}
	
	


}


let eventManager = new EventManager();



eventManager.addListener('moe luboe sobitie1', function (data) { 
                        console.log('first function: ', data) });
eventManager.addListener('moe luboe sobitie1', function (data) { 
    console.log('second function: ', data) });

eventManager.addListener('moe luboe sobitie2', function (data) { 
    console.log('second function: ', data) });


eventManager.dispatch('moe luboe sobitie1', 33333);
eventManager.dispatch('moe luboe sobitie333333', 33333);

