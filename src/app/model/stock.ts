export class Stock {
    favourite:boolean;
    constructor(public name:string,public code:string, public price:number,public previousPrice:number){
        this.favourite=false;
    }
    isPositiveChange():boolean{
        return this.previousPrice<this.price;
    }
}
