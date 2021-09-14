import { IPeople } from "../model/entity/IPeople"
import { generateNumber } from "../util/randomNumberInt"
import { average } from "../util/average"

const makeListPoints = (limit: number = 1): number[] => {
    let list = [];
    for (let i=0; i<limit; i++){
        list.push(generateNumber(1, 10));
    }
    return list;
};

const mountPeople = (name: string, itens: number): IPeople => {
    let points = makeListPoints(itens)
    let people = {"name":name, "point":average(points), "points":points}
    return people;
};
export const peopleRepository: IPeople[] = [
    mountPeople("Daniel", 10),
    mountPeople("Pedro", 13),
    mountPeople("Silvio", 15),
    mountPeople("Maria", 20),
    mountPeople("Joana", 30),
    mountPeople("Camila", 50)
];