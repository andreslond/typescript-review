//Classes
//In JavaScript the classes needs to be defined using a function and modifing
// the prototype definition.
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomato = false;
        this.chesse = "";
        this.bacon = false;
        this.otherIngredients = [""];
    }
    Pizza.prototype.setChesse = function (cheese) {
        this.chesse = cheese;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoniPizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setChesse('Queso X')
    .setOtherIngredients(['Tomate'])
    .build();
console.log(pepperoniPizza);
