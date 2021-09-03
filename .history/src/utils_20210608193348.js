
export const  ConvertCookedTime = (num) => {
   
    const h = (Math.floor(num) / 60).toFixed(0).toString();
    const m = (num % 60).toString();
    if(h === '0' || h === 0){
        return `${m}min`;
    }else if(m === '0' || m === 0){
        return `${h}hr`;
        
    }else {
	    return `${h}hr ${m}min`;
    }
}

export const getExpiryTimeDifference = (expiryDate, createdDate) => {
	//    expiryDate.diff(createdDate) count down to in milliseconds
	const years = expiryDate.diff(createdDate, 'year');
	const months = expiryDate.diff(createdDate, 'months');
    const days = expiryDate.diff(createdDate, 'days');
    if(years === )

	return `Expires in ${years} years ${months} months ${days} days`;
}

export const getToFixedValue = (num) => {
    return num.toFixed(2);
}