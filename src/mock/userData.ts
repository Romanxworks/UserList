import { getRandomDate, getRandomItem, getRandomNumber } from "../utils/utils"

export const firstNames = ["Иван", "Василий", "Николай", "Петр", "Илья", "Дмитрий"]
export const lastNames = ["Иванов", "Петров", "Сидоров", "Иванчук", "Пертичук", "Сидорчук"]
export const middleNames = ["Иванович", "Димитриевич", "Борисович", "Васильевич", "Игоревич", "Степанович"]
export const departments = ["Бухгалтерия", "Отдел кадров", "Менеджмент"]
export const posts = ["Бухгалтер", "Кадровик", "Менеджер"]

const createUser = () => {
  return { 
    id: getRandomNumber(1, 150000).toString(),
    firstName: getRandomItem(firstNames),
    lastName: getRandomItem(lastNames),
    middleName: getRandomItem(middleNames),
    birthDate: getRandomDate(),
    department: getRandomItem(departments),
    post: getRandomItem(posts),
    salary: getRandomNumber(20000, 150000),
    photo: `https://avatar.iran.liara.run/public/${getRandomNumber(0,40)}`,
  }
}

export const getUsers = () => Array.from({length: 20}, createUser)
