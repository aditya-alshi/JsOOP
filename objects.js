const createWebsite = function(domainName){
    return {
        domainName : domainName,
        earning : 0,
        subscribe: function(numOfSubscribersAdded){
            this.earning += numOfSubscribersAdded*4;
        },
        unSubscribe: function(numOfSubscribersLost){
            this.earning -= numOfSubscribersLost*4;
        }
    };
}

const hingoo = createWebsite("hingoo");

hingoo.subscribe(7)

console.log(hingoo);