import LayoutComponent from "./LayoutComponent";
import removeArrayValue from "../util/utils.js"
class Layout{
    constructor(){

    }
    #dirty=false;
    objs=[];
    curObj=null;
    reLayout(){
        this.#dirty=false;
    }

    invalid(){
        this.#dirty=true;
    }

    isValid(){
        return this.#dirty;
    }
}