import Arithmetic from "../arithmetic";
import CubedOperator from "./cubedOperator";
import DivideOperator from "./divideOperator";
import MultiplyOperator from "./multiplyOperator";
import PercentileOperator from "./percentileOperator";
import PowerOperator from "./powerOperator";
import SquareOperator from "./squareOperator";
import SubOperator from "./subOperator";
import SumOperator from "./sumOperator";

export default class BasicArithmetic extends Arithmetic{
    constructor(operators={}){
        super({
            ...operators,
            '>':new PowerOperator(),
            '³':new CubedOperator(),
            '²':new SquareOperator(),
            '*':new MultiplyOperator(),
            '/':new DivideOperator(),
            '%':new PercentileOperator(),
            '+':new SumOperator(),
            '-':new SubOperator()
        })
    }

    static get createInstance(){ return new BasicArithmetic()}
}