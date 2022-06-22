import {HandlingError} from "./error.js";
import { displayName,displayDog,displayQuote,displayCatsPhoto} from "./displayResponse.js";

//mem
export async function getDog(url){
    try {
        displayName("Dog");
        let res=await fetch(url);
        let json=await res.json();
        displayDog(json);
    } catch (error) {
        throw new HandlingError("dog`s photo can`t be load");
    }
}
//quotes
export async function getQuote(url){
    try {
        displayName("Quote");
        let res=await fetch(url);
        let json=await res.json();
        displayQuote(json);
    } catch (error) {
        throw new HandlingError("quote can`t be load");
    }
}
//cats
export async function getCatsPhoto(url){
    try {
        displayName("Cat");
        let res=await fetch(url);
        displayCatsPhoto(res);
    } catch (error) {
        throw new HandlingError(" cat`s photo can`t be load");
    }
}