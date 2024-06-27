import Operator from "../operator.js"

export default class MultiplyOperator extends Operator{
    constructor(){super(3)}

    f=(...a)=>a[0]*a[1]
}