const d=new Function('v1','v2','v3','return v1+v2+v3') //Função Construtor Anonima

console.log(d(10,5,10))

/*
const f=new function(...valores) {
    let res=0
    for(v of valores) {
        res+=v
    }
    return res
}


console.log(f(10,5)) */8