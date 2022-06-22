import {getDog,getQuote,getCatsPhoto} from "./async.js";
import {dogSelector,quoteSelector,catsPhotoSelector} from "./selectors.js";

//Event listener for click on mem-button
dogSelector.addEventListener('click',()=>{
   getDog("https://dog.ceo/api/breeds/image/random");
});
//Event listener for click on quote-button
quoteSelector.addEventListener('click',()=>{
   getQuote("https://api.breakingbadquotes.xyz/v1/quotes");
});
//Event listener for click on catsPhoto-button
catsPhotoSelector.addEventListener('click',()=>{
    getCatsPhoto("https://cataas.com/cat");
});