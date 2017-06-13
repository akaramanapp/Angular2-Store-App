export class Product {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public price: number;
    public category: string;

    constructor(id: number, name: string, description: string, imageUrl: string, price:number, category: string){
        this.id = id,
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.price = price
        this.category = category;
    }
}