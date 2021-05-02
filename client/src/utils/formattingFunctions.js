export const addThousandsPoint = number => number.toLocaleString('ger');

export const formatDecimal = decimal => decimal || '00';

export const formatCurrency = currency => currency === 'ARS' ? '$' : currency;

export const formatCondition = condition => condition === 'used' ? 'Usado' : 'Nuevo';

export const formattedSoldQuantity = soldQuantity => soldQuantity ? `- ${soldQuantity} vendidos` : '';
