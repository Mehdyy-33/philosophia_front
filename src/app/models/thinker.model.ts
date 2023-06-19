import { Mouvement } from "./mouvement.model";

export class Thinker {
    constructor(
        public name: string,
        public biography: string,
        public mouvementList: Mouvement[],
        public id?: number
    ) {}
}
