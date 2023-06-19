import { Thinker } from "./thinker.model";

export class Mouvement {

    constructor(
        public name: string,
        public description: string,
        public thinker: Thinker,
        public id?: number
    
    ){}
}
