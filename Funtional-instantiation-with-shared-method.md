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

```javascript
const webSiteMethods = {
    subscribe(clickSubscribe){
        website.earning += clickSubscribe*4
    },
    unSubscribe(clickUnsubscribe){
        website.earning -= clickUnsubscribe*4;
    }
}

function Portal(domainName){
    const website = {}
    
    website.domainName = domainName;
    website.earning = 0;

    return website;
}
```

---
Now, just slow down and understand this piece by piece.

<ins>Focus on this part.</ins> 
```javascript
function Portal(domainName){
    const website = {}
    
    website.domainName = domainName;
    website.earning = 0;

    return website;
}
```
>What exactly is happening here?

{} This is object notation. We are going to fill it up with attributes and methods? All good till here?

If it was like this 
```javascript
{
    domainName = "blahblah",
    earning = 5000
}
```
It is easy add attributes to it.

It will work. But how will you set it up from the outside of these brackets. I mean, if it was like this

```javascript
{}
```
Just that. How? I mean, what to do with it? how to add stuff inside?


 This is the reason why we use a variable with it. So that we can add attribute to it from the outside. 

So let's do it. 

Assign the above non-named object a nice name, say **'hingoo'**.

```javascript
const hingoo = {}
```

Now we can add stuff inside of it like this

```javascript
hingoo.domainName = "hingoo"
hingoo.earning = 0;
```

so that object now must be looking like this

```javascript
{
    domainName : "hingoo",
    earning : 0
}
```
Awsome we got what we want. 

---
>We made the object. And added stuff to it. Awsome. Very nice. But, something is missing

We can only create one *website* with a *domainName = "hingoo"*

what if I want to make '**pingoo**' as well. Also '**mingoo**'. And '**dingoo**' too? 
What to do?

Simple, just using the same process and keep creating as many websites as you want. 

```javascript
const hingoo = {}
hingoo.domainName = "hingoo"
hingoo.earning = 0;

const pingoo = {}
pingoo.domainName = "pingoo"
pingoo.earning = 0;

const mingoo = {}
mingoo.domainName = "mingoo"
mingoo.earning = 0;

const dingoo = {}
dingoo.domainName = "dingoo"
dingoo.earning = 0;

```

Isn't it repeated every single time. Do we have any option.?<br/>
How about, we create a function which returns an object. Hmm, let's try

```javascript
const createObjects = function(){
    return {};
}
```
Ok. its just returning an empty object. Now what

Let's create a 'CreateWebsite' function in this way.

```javascript
const createWebsite = function(domainName){
    return {
        domainName : domainName,
        earning : 0
    };
}
```

Ok. Understood. Now what?

```javascript
const hingoo = createWebsite("hingoo");
```
Awsome. so this way we can create as many website as we want. Just add name in the parameter and new website is created. Nice. Great Job

---
>But wait. What about the **earning** attribute?

The **earning** attribute keeps track of, well, earnings of the website. So let's say if the website gets subscribers, the website will earn $4. And if unscubscribe by any subscribe it will loose $4. 

Ok. How to do it? It's simple. Just add two methods like this. 
```javascript
const createWebsite = function(domainName){
    return {
        domainName : domainName,
        earning : 0,
        subscribe(numOfSubscribersAdded){
            earning += numOfSubscribersAdded*4;
        },
        unSubscribe(numOfSubscribersLost){
            earning -= numOfSubscribersLost*4;
        }
    };
}
```
```javascript
Output
ReferenceError: earning is not defined
```

Excuse me? 'earning is not defined'? What do you mean?
The method is in the same object as earning. So why is earning not accesible?

><ins>Let's understand this.</ins><br/>
In JavaScript, when you are inside a method of an object, the **'this'** keyword is used to refer to the current instance of the object. Without **'this'**, the interpreter doesn't know that you are referring to the **'earning'** property of the object itself.
<br/><br/>In your original code, when you wrote **'earning' += numOfSubscribersAdded * 4;**, JavaScript didn't find the **'earning'** variable declared within the scope of the subscribe method or as a parameter, so it assumed you were trying to reference a variable named **'earning'** in a higher scope, but it couldn't find it.<br/><br/>By using **'this'**.**'earning'**, you explicitly tell JavaScript that you are referring to the **'earning'** property of the current object instance. It helps to distinguish the property of the object from any potential variables with the same name in different scopes.

I didn't understand at all. If the method is in the same object as the earnings. Why can' t it just recognise it?

>In JavaScript, when a function is called as a method of an object (like subscribe being called on the hingoo object), the value of this inside that function refers to the object the method was called on.<br/><br/>However, when you use a variable without a qualifier inside a function, JavaScript looks for that variable in the current function's scope first. If it doesn't find it, it looks for it in outer scopes, but it does not automatically look for it in the object to which the method belongs.<br/><br/>In your original code:
```javascript 
subscribe(numOfSubscribersAdded){
    earning += numOfSubscribersAdded * 4;
},
```
>The JavaScript interpreter doesn't automatically know that **'earning'** refers to the **'earning'** property of the object. Without **'this'**, it looks for a variable named **'earning'** in the function's scope and its outer scopes, but it doesn't find it.<br/><br/>By using **'this**.**earning'**, you explicitly tell JavaScript to look for **'earning'** as a property of the current object, and not as a standalone variable.<br/><br/>So, in short, adding **'this'**. is necessary to explicitly reference the property of the object within a method.

So what is the outer scope of the method subscribe here?

>In JavaScript, each function creates its own scope. In the case of your subscribe method, its scope includes the function parameters (numOfSubscribersAdded), any variables declared within the function, and any variables declared in outer scopes.<br/><br/>In your original code:
```javascript
const createWebsite = function(domainName){
    return {
        domainName : domainName,
        earning : 0,
        subscribe(numOfSubscribersAdded){
            earning += numOfSubscribersAdded * 4;
        },
        unSubscribe(numOfSubscribersLost){
            earning -= numOfSubscribersLost * 4;
        }
    };
}

const hingoo = createWebsite("hingoo");

hingoo.subscribe(6);

console.log(hingoo);
```
>The **'subscribe'** method is part of the object created by the **'createWebsite'** function. Its outer scope is the scope of the **'createWebsite'** function, which includes the ***'domainName'*** parameter and any variables declared within **'createWebsite'**. However, it does not automatically include the properties of the object being created (**'earning'** in this case).<br/><br/>By using **'this**.**earning'** within the **'subscribe'** method, you explicitly specify that **'earning'** is a property of the object, and it is not a variable within the function's scope or its outer scopes.

So our code will be modified like this

```javascript
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

hingoo.subscribe(5)

console.log(hingoo);
```

```javascript
Output
{
  domainName: 'hingoo',
  earning: 20,
  subscribe: [Function: subscribe],
  unSubscribe: [Function: unSubscribe]
}
```

Now My big question is this:<br/>
If I need to explicitly tell the subscribe the this is the 