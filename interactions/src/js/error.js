import { displayName } from "./displayResponse.js";

export class HandlingError extends Error{
    constructor(message){
        super();
        this.message=message;
        this.name="HandlingError";
        this.printError();
    }

    printError() {
        displayName("Oops, server can`t give it");
    }
}