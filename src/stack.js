export default class Stack{
    #memory
    #formula

    constructor(memory={},formula=''){
        this.#memory = memory
        this.#formula = formula
    }

    inspect(token=''){
        const val = this.#memory[token] ?? token
    
        return isNaN(val) 
            ? val 
            : typeof val =="boolean" 
                ? val 
                : parseFloat(val)
    }

    variable=(name='')=>this.#memory[name] ?? null;

    get tokens (){
        return this.#formula
        .match(/\W|[A-z0-9^.]+/g)
        .filter(o=>o!=' ')
        .map(x=>x=='^'?'>':x)
        .map(token=>this.inspect(token))
    }
}