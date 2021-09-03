export const  ConvertCookedTime = (num) => {
    const h = (Math.floor(num) / 60).toFixed(0).toString();
    const m = (num % 60).toString();
    if(h === '0'){
        return `${m}min`;
    }else if(m === '0'){
        return `${h}hr`;
        
    }else {
	    return `${h}hr ${m}min`;
    }
}

export const 