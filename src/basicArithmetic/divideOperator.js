import Operator from "../operator.js"

export default class DivideOperator extends Operator{
    constructor(){super(3)}

    f=(...a)=>a[0]/a[1]
}