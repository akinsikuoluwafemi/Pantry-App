export const  ConvertCookedTime = (num) => {
    const h = (Math.floor(num) / 60).toFixed(0);
	const m = num % 60;
	return `${h} === 0 ${h}hrs ${m}min`;
}
