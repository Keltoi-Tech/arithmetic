export default class Arithmetic{
    #operators;
    #keys;
    
    constructor(operators={}){
        this.#operators= operators;
        this.#keys = Object.keys(operators);
    }

    match(op=''){
        const operators = this.#operators;
        const keys = this.#keys;

        return (keys.includes(op)) ? operators[op] : undefined
    }
}