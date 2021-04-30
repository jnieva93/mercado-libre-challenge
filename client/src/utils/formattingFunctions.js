export const addThousandsPoint = number => number.toLocaleString('es');

export const formatCurrency = currency => currency === 'ARS' ? '$' : currency;
