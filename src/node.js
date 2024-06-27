export default class Node {
    #parent
    #op
    #var=[]

    constructor(val=null,parent=null){
        if (!!val) this.#var.push(val)
        this.#parent = parent
    }

    static createInstance(val=null,parent=null){return new Node(val,parent)}

    set operator (op){ this.#op = op}

    get mem(){return [...this.#var,this.#op ?? 'none']}

    get value(){return !!this.#op ? this.eval() : this.#var[0]}

    push=(e)=>this.#var.push(e)

    deep(val=undefined){
        let deepNode = !!val ? new Node(val,this) : new Node(this.#var.pop(),this)

        return deepNode;
    }

    eval=()=>{
        
        return this.#op.f(...this.#var)
    }
    
    resolve(){
        const n = this.eval()
        this.#var=[n];

        return n;
    }

    terminate(){
        const solve = this.resolve()

        if (!!this.#parent){
            this.#parent.push(solve)

            return this.#parent
        }else return solve 
    }
}