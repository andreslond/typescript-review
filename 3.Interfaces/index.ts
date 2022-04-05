//Interface
//An Interface define features and properties.
//Who implement an interface will have the same features and properties of that interface. 

interface IAnimal {
    name: string,
    color: string
}

const dog: IAnimal = {
    name: 'Snoopy',
    color: 'White'
}

interface OnInit {
    ngOnInit(): void;
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}


