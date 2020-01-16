export const significant = (str: string) =>
  str.includes('.')
    ? str.replace(/^0+/, '').length - 1
    : str.replace(/^0+|0+$/g, '').length
