module.exports = class Calculation{
    #result = "";
    constructor(a, b, operation, c =  null){
        this.a = a;
        this.b = b;
        this.c = c;
        this.operation = operation;
        this.#result = this.operation(this.a, this.b, this.c);
    }
    GetResults(){
        return this.#result;
    }
}