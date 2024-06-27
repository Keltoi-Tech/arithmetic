import Operator from "../operator.js"

export default class SquareOperator extends Operator{
    constructor(){super(4)}

    f=(...a)=>a[0]*a[0]
}