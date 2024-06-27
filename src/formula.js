import Arithmetic from "./arithmetic";
import Node from "./node";

export default class Formula{
    #tokens
    static arithmetic = new Arithmetic()

    constructor(tokens=[]){
        this.#tokens = tokens;
    }

    get tokens(){return this.#tokens}

    eval(){
        let node = Node.createInstance(this.#tokens.shift())
        let precedence = 0

        for(let token of this.#tokens){
            let op= Formula.arithmetic.match(token)

            if (!!op){
                if (op.precedence==precedence)
                    node.resolve()
                else if (op.precedence > precedence)
                    node = node.deep()
                else 
                    node = node.terminate()

                node.operator = op

                precedence = op.precedence
            }else node.push(token)
        }

        const result = node.terminate()

        return result instanceof Node ? result.value : result
    }
}