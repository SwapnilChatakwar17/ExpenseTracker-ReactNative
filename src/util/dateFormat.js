export const dateFormat = (date) => {
    return date.toISOString().slice(0,10);
}

export const lastDays = (date, noOfDays) => {
    return date.getFullYear() + '-' + (("0" + (date.getMonth() + 1)).slice(-2)) + '-' + (("0" + (date.getDate()-noOfDays)).slice(-2));
}