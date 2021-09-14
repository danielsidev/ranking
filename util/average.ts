import { round } from "../util/round"
export const average =  (list: number[]) => {
    let sum = list.reduce((a, b) => a + b);
    let avg = (sum / list.length);
    return round(avg,2);
};