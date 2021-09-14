export const round = (num: number, places: number) => {
	return +(parseFloat(num.toString()).toFixed(places));
}