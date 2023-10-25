/*
    Para as variáveis COMPLEXAS, tem só duas, e elas parecem bem simples de início mas não são em seu uso com o
    passar do tempo.

    Essas variáveis são Arrays (sequência) e Object (objeto). Ninguém chama array de sequência por ai, mas se um retardado
    chamar é bom tu saber.

    Array são variáveis que tem índices, em uma visualização simples dela, é como um colar de contas, e cada conta guarda um
    valor, o array seria o colar em si. Array são escrito entre conchetes [ ]. Seus índices são numéricos por PADRÃO, mas não
    é obrigatório ser. Em caso de incrementado, segue uma escala numérica iniciando em 0 e crescente. Futuramente veremos como
    mexer nos índices.
    const exemploArray = [1, 2, 3, 4, 5];

    Object são variáveis que tem uma leve semelhança com o array, mas invés de índices, falamos que tem propriedades mas é
    bem parecido com índices. o que complica mais em relação a Object é que sua construção usa CHAVES { } e essas chaves não
    são escopos em si, e as propriedades do object devem ter nome, não são igual as do array que por padrão são
    numéricas e autoincrementais. Não é possível chamar a propriedade de um objeto sem chamar o objeto em si.
    const exemploObjeto = {
        cor: "rosa",
        tamanho: "médio",
        temPonta: true
    }
*/

const arrayExemplo = ["xuxu", "morder", "cu"]; // índice 0 tem seu valor "xuxu", índice 1 tem "morder" e por assim em diante

const objectExemplo = { // É um object com 3 propriedades, cada um com seu nome e valor
    tu: "Xuxu", //Tem nome da propriedade tu e seu valor, "Xuxu", segue mesmo padrão pros demais
    eu: "morder",
    teu: "cu"
};

console.log(arrayExemplo);
console.log(objectExemplo);

/*
    Para utilizar um valor de um array ou de um object, segue também um padrão de escrita.
    Array é dando o nome da variável e entre conchetes o índice, ex: arrayExemplo[0]
    Object é chamando sua propriedade após a variável usando o PONTO ".", ex: objectExemplo.teu
*/

console.log(arrayExemplo[1]);
console.log(objectExemplo.tu);