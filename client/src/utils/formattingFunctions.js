export const addThousandsPoint = number => number.toLocaleString('ger');

export const formatDecimal = decimal => decimal || '00';

export const formatCurrency = currency => currency === 'ARS' ? '$' : currency;
