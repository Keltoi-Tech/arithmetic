import Operator from "../operator.js";

export default class CubedOperator extends Operator{
    constructor(){super(4)}

    f=(...a)=>a[0]*a[0]*a[0];
}