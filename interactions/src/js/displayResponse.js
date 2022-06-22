import { mainSelector,textSelectorForName } from "./selectors.js";

const cleanMainSelector=()=>{
    while(mainSelector.firstChild){
        mainSelector.removeChild(mainSelector.firstChild);
    }
}

export const displayName=(text)=>{
    cleanMainSelector();
    textSelectorForName.innerHTML="";
    let infoAboutError=document.createElement("h2");
    infoAboutError.textContent=text;
    textSelectorForName.appendChild(infoAboutError);
}
//mem
export const displayDog=(response)=>{
    let figureImage=document.createElement("figure");
    let image=document.createElement("img");
    image.src=response.message;
    figureImage.appendChild(image);
    mainSelector.appendChild(figureImage);
}
//quote
export const displayQuote=(response)=>{
    let quote=document.createElement('p');
    quote.textContent=response[0].quote;
    let labelForQuote=document.createElement('label');
    labelForQuote.textContent=response[0].author;
    mainSelector.appendChild(quote);
    mainSelector.appendChild(labelForQuote);
}
//cats
export const displayCatsPhoto=(response)=>{
    let figureImage=document.createElement("figure");
    let image=document.createElement("img");
    image.src=response.url;
    figureImage.appendChild(image);
    mainSelector.appendChild(figureImage);
}