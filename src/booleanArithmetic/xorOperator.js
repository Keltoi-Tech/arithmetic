import Operator from "../operator.js";

export default class XorOperator extends Operator{
    constructor(){super(4)}

    f=(...a)=>(!a[0] ^ !a[1])? true : false
}