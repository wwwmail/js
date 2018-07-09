// class EventManager {
//  constructor() {
//    if (EventManager._isInitialized) {
//      throw new Error('Can only be initialized once!');
//    }
//
//    EventManager._isInitialized = true;
//  }
//
//  foo() { this.type++; }
//};
//
//const s1 = new EventManager(); // OK
//const s2 = new EventManager(); //


class EventManager {
    
    
 //   this.aa = new Array();

    constructor() {
        //this.listener1 = new Array();
        this.aa = {};
        if (EventManager._instance) {
            return EventManager._instance;
        }

        EventManager._instance = this;
    }

    static getInstance() {
        return EventManager._instance;
    }

    getListener() {
        return this.listener;
    }

    addListener(listener, someEventFunction){
        
       
        return this.aa[listener] = someEventFunction; //= someEventFunction;
    }


}


let eventManager = new EventManager();



let b = new EventManager();



eventManager.addListener('moe luboe sobitie1', function (data1) { 
    console.log('first function: ', data) });
eventManager.addListener('moe luboe sobitie1', function (data2) { 
    console.log('second function: ', data) });

console.log(eventManager);
//
//console.log(eventManager.getListener());
//console.log(b.getListener());
//
//let um1 = new EventManager('Kakarotto');
//let um2 = new EventManager('Vegeta');
//let um3 = EventManager.getInstance();
//let um4 = EventManager.getInstance();
//
//console.log(um1 === um2);
//console.log(um1 === um3);
//console.log(um1 === um4);
//console.log(um2 === um3);
//console.log(um2 === um4);
//console.log(um3 === um4);
//
//console.log(um1.getName() === 'Kakarotto');
//console.log(um2.getName() === 'Kakarotto');
//console.log(um3.getName() === 'Kakarotto');
//console.log(um4.getName() === 'Kakarotto');