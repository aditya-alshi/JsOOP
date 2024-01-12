```javascript
function Portal(domainName){

    const website = {}
    
    website.domainName = domainName;
    website.earning = 0;
    website.subscribe = function(clickSubscribe){
        website.earning += clickSubscribe*4
    }
    website.unSubscribe = function(clickUnsubscribe){
        website.earning -= clickUnsubscribe*4;
    }

    return website;

}
```
Made a function accepting <ins>*domainName*</ins> argument.

now as soon as the object is made like this

```javascript
const ignou = Portal("www.ignou.com");
const shopify = Portal("Shopify");
```

what's happening here is, these **ignou** and **shopify** are created and all the properties and method are passed down to them. 
Which means they have their own copies of attributes and methods. which means **ignou** has it's seperate space for attributes and methods and similarly **shopify** has it's own.

So basically there are two memory for ultimately the same method. And that's the way it is. No problem with that, because, you know, computers are fast enough. But still, there's a better way of doing this. Let's see how to do it.

What if the *methods* **subscribe** and **unSubscribe** can be taken out of the <ins>Portal contructor function</ins>? Like this.

