import { Pick } from './pick';

export class Image {
    name: string = "";
    imagePath: string = "";

    constructor(name : string, imagePath : string){
        this.name = name;
        this.imagePath = imagePath;
    }
}