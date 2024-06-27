import Arithmetic from "../arithmetic";
import AndOperator from "./andOperator";
import NotOperator from "./notOperator";
import OrOperator from "./orOperator";
import XorOperator from "./xorOperator";

export default class BooleanArithmetic extends Arithmetic{
    constructor(){
        super({
            'NOT':new NotOperator(),
            'XOR':new XorOperator(),
            'AND':new AndOperator(),
            'OR': new OrOperator(),
        })
    }

    static get createInstance(){ return new BooleanArithmetic()}
}