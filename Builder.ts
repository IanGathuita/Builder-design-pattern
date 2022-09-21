class House{
    constructor(name:string){
        this.name = name;
    }
    name:string;
    floor?:string;
    walls?:number;
    roof?:string;
}

interface HouseBuilder{
    buildFloor(floor:string):HouseBuilder;
    buildWalls(walls:number):HouseBuilder;
    buildRoof(roof:string):HouseBuilder;
    build():House;
}

class ConcreteHouseBuilder implements HouseBuilder{

    private house : House;
    
    constructor(name: string){
        this.house = new House(name);
    }

    buildFloor(floor:string):HouseBuilder{
        this.house.floor = floor;
        return this;
    }
    buildWalls(walls:number):HouseBuilder {
        this.house.walls = walls;
        return this;
    }
    buildRoof(roof:string):HouseBuilder {
        this.house.roof = roof;
        return this;
    }

    build():House{
        return this.house;
    }
}

let myHouse:House = new ConcreteHouseBuilder('Roofless house').buildFloor('beige tiles').buildWalls(4).build();
console.log(myHouse);

let myHouse2:House = new ConcreteHouseBuilder('House with red roof house').buildFloor('beige tiles').buildWalls(4).buildRoof('red').build();
console.log(myHouse2);