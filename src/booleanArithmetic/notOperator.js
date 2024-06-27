import Operator from "../operator.js";

export default class NotOperator extends Operator{
    constructor(){super(5)}

    f=(...a)=>!a[0]
}