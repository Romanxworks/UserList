export const getRandomNumber = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomItem = (data: any) => {
  const index: number = getRandomNumber(0, data.length - 1) 
  return data[index];
}

export const getRandomDate = () => new Date(getRandomNumber(1970, 2005), getRandomNumber(1, 12),  getRandomNumber(1, 12)).toISOString()