import Arithmetic from "./arithmetic";
import Formula from "./formula";
import Heap from "./heap";
import Stack from "./stack";

export default (expression='',memory={},arithmetic=new Arithmetic())=>{
    const stack = new Stack(memory,expression);

    Heap.mem = stack.tokens
    Formula.arithmetic = arithmetic

    const heap = Heap.createInstance

    heap.run()

    return {
        tokens:Heap.mem,
        input:memory,
        result:heap.formula().eval()
    }
}