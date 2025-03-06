const getRandomTsCode = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomString = 'abcdefghijklmnopqrstuvwxyz'.charAt(randomNumber - 1);
  return `${randomNumber}${randomString}`;
}
