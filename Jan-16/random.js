const getRandomNumber = () => {
    return Math.floor(Math.random() * 5);
}

const increaseNumber = (num) => {
    return ++num;
}

const API_KEY = "VERY VERY SECRET";

export default getRandomNumber;
export { increaseNumber, getRandomNumber, API_KEY };