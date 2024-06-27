import Formula from "./formula"

export default class Heap {
    static mem =[]
    static expression='[xp]'

    #children=[]
    #elements=[]

    constructor(){}

    static get createInstance(){return new Heap()}

    get children(){return this.#children}
    get elements(){return this.#elements}


    run(index=0){
        while(index<Heap.mem.length){
            const s = Heap.mem[index]

            if (s=='('){
                const c = new Heap()
                index = c.run(index+1)
                this.#elements.push(Heap.expression)
                this.#children.push(c)
            }
            else if (s==')' || index==Heap.mem.length)break;
            else this.#elements.push(s)

            index++;
        }

        return index
    }

    formula(){
        const resolveParenthesis = this.#elements.filter(e=>e==Heap.expression)

        resolveParenthesis.forEach((p,i)=>{
            const f = this.#children[i].formula()

            const ie = this.#elements.indexOf(p)

            const evaluate = f.eval()

            this.#elements[ie] = evaluate

        })

        return new Formula(this.#elements)
    }
}
