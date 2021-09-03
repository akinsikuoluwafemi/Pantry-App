import moment from 'moment'

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

export const getExpiryTimeDifference = (expiryDate, createdDate) => {
    const years = expiryDate.diff(createdDate, 'year');
    const months = expiryDate.diff(createdDate, 'months');
    const days = expiryDate.diff(createdDate, 'days');

    return `Expires in ${years} years ${months} months ${days} days`

}