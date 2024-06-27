import terser from '@rollup/plugin-terser';

export default {
    input:{
        arithmetic:'src/arithmetic.js',
        formula:'src/formula.js',
        heap:'src/heap.js',
        node:'src/node.js',
        operator:'src/operator.js',
        stack:'src/stack.js',
        resolve:'src/resolve.js',
        attribute:'src/attribute.js',
        'arithmetics/basic':'src/basicArithmetic/index.js',
        'arithmetics/boolean':'src/booleanArithmetic/index.js'
    },
    plugins:[
        terser({
            keep_classnames:true,
            keep_fnames:true
        })
    ],
    output:[
        {
            dir:'dist',
            entryFileNames:'[name].js',
            format:'es'
        }
    ],
    external:["arithmoi"]
}