function Portal(domainName){

    const website = {}
    
    website.domainName = domainName;
    website.earning = 0;

    return website;

}

const ignou = Portal("www.ignou.com");
const shopify = Portal("Shopify");

shopify.subscribe(8);
ignou.subscribe(6);

console.log(ignou.earning);
console.log(shopify);