export class User{
    constructor(
        public name:string,
        public email:string,
        public contact:number,
        public street:string,
        public city:string,
        public pin:number,
        public terms:boolean,
        public promo:boolean,
    ){}
}