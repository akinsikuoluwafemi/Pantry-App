export const  Convert = (num) => {
    c	h = (Math.floor(num) / 60).toFixed(0);
	m = num % 60;
	return `${h}hrs ${m}min`;
}
