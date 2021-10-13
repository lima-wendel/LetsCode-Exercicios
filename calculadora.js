let calculadora=(() =>{
     
    let _arrayCalculadora1 = [];
    let _arrayCalculadora2 =[];
    let _arrayMemoriaCalculadora = [];
    let _arrayMemoria = [];
    const soma = (x,y) => x+y;
    const subtracao = (x,y) => x-y;
    const divisao = (x,y) => x/y;
    const multiplicacao = (x,y) => x*y;
    const calcHandler={
        '+': soma,
        '-': subtracao,
        '/': divisao,
        '*': multiplicacao
    }

    const operacao = (x,operat,y)=>{
        x = parseInt(x)
        y = parseInt(y)
        if((isNaN(x)) || (isNaN(y)) ){return 'Número Inválido'}
        if(calcHandler[operat]){
            return calcHandler[operat](x,y)
        }else{
            return 'Operador inválido'
        }
    }

    const enter = (val) => {
        _arrayCalculadora1.push(val)
        _arrayMemoriaCalculadora.push(val)
        if(_arrayCalculadora1.length > 3){
            let [elem1, elem2, elem3, elem4] = _arrayCalculadora1
            if(_arrayCalculadora2.length != 0){
                _arrayCalculadora2.push(val)
                let [el1, el2, el3] = _arrayCalculadora2;

                const operation = _operation(el1,el2,el3)
                _arrayCalculadora2 = []
                _arrayCalculadora1 = [elem1, elem2, operation]
            }else{
                
                if(elem4 == '*' || elem4 == '/'){
                    _arrayCalculadora2 = [elem3, elem4]
                    _arrayCalculadora1.pop()
                }else{
                    _arrayCalculadora1=[operacao(elem1,elem2,elem3), elem4]
                }
            }               
        }
        return {_calculatorArray,
                _calculatorMemoryArray,
                _calculatorArray2                
                }
        }

    const equals = () => {

        let [elem1, elem2, elem3] = _arrayCalculadora1
        
        if(typeof elem1 === 'undefined' || typeof elem2 === 'undefined' || typeof elem3 === 'undefined'){
            return 'Faltam dados para realizar a operação, utilize a função enter()';
        }
        const op = operacao(elem1, elem2, elem3)
        if(typeof op == 'number'){
            _arrayMemoriaCalculadora.push('= ', op.toString())
            _arrayMemoria.push(_arrayMemoriaCalculadora)
        }
        _arrayCalculadora1=[]
        _arrayMemoriaCalculadora=[]
        return op
    }

    const list = () => _arrayMemoria

    const reset = () => _arrayMemoria.length = 0
    
    return{
        enter,
        equals,
        list,
        reset
    }
})
