export const  ConvertCookedTime = (num) => {
    const h = (Math.floor(num) / 60).toFixed(0);
    const m = num % 60;
    if(h === 0){
        return `${m}min`;
    }
	return `${h}hrs ${m}min`;
}
