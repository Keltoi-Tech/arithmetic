import Arithmetic from "./arithmetic";
import Formula from "./formula";
import Heap from "./heap";
import Stack from "./stack";

export default (expression='',memory={},arithmetic=new Arithmetic())=>{
    
    const ts = expression.split('=')

    const stack = new Stack(memory,ts[1]);

    Heap.mem = stack.tokens
    Formula.arithmetic = arithmetic

    const heap = Heap.createInstance

    heap.run()
    memory[ts[0]] = heap.formula().eval()

    return memory
}