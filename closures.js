var Singleton = (function(){
    
    var instance;

    var _Singleton = function(name){
        this.name = name;
    }

    return {
        getInstance: function(name){
            if(!instance) instance = new _Singleton(name);
            return instance;
        }
    } 
})()

var singleton = Singleton.getInstance();


console.log();

