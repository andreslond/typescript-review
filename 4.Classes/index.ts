//Classes
//In JavaScript the classes are more complex to be defined. 
//To add features is necessary modify the prototype functions.
class Pizza {
    public tomato: boolean = false;
    public chesse: string = "";
    public bacon: boolean = false;
    public otherIngredients: Array<string> = [""];

    setChesse(cheese: string): Pizza {
        this.chesse = cheese;
        return this;
    }

    setBacon(): Pizza {
        this.bacon = true;
        return this;
    }

    setOtherIngredients(ingredients: string[]): Pizza {
        this.otherIngredients = ingredients;
        return this;
    }

    build() {
        return this;
    }
}

const pepperoniPizza: Pizza = new Pizza();

pepperoniPizza
    .setBacon()
    .setChesse('Queso X')
    .setOtherIngredients(['Tomate'])
    .build();
    
console.log(pepperoniPizza);






