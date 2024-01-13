// function City(name,temperature, weather){
//     this.Cityname = name;
//     this.temperature = temperature;
//     this.weather = weather;
// };


// function NewsChannel(name, newsTitle){
//     this.channelName = name;
//     this.newsTitle = newsTitle;
//     this.news = function(){
//         console.log(`${newsTitle} - ${this.Cityname} is ${this.weather} today. Temperature is ${this.temperature}°C`);
//     }
// };

// const Gossaan = new City("Gossan",27, "cloudy");
// const ttNews = new NewsChannel("ttNews", "Daily Weather Update")

// ttNews.news.call(Gossaan);

// function City(name, population, climate){
//     this.naav = name;
//     this.loksankhya = population;
//     this.vatavaran = climate;
// }

// City("Chubhan", 655656, "cold");


const Planet = Object.create({
    name : "Abra ka dabra",
    number : 0,
    rotate(){
        console.log("Rotate");
    }
})

