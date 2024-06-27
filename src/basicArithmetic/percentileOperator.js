import Operator from "../operator.js";

export default class PercentileOperator extends Operator{
    constructor(){super(3)}

    f=(...a)=>(a[0]/100)*a[1]
}