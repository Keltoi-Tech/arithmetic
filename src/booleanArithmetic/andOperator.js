import Operator from "../operator.js";

export default class AndOperator extends Operator{
    constructor(){super(3)}

    f=(...a)=>a[0] && a[1]
}