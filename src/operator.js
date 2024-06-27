export default class Operator{
    #precedence

    constructor(precedence=2){
        this.#precedence = precedence
    }

    f=(...a)=>a

    get precedence(){return this.#precedence}
}