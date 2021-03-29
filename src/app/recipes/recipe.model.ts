import { Ingredient } from "../shared/ingredient.model";
import { Steps } from "../shared/steps.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public steps: Steps[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], steps: Steps[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}