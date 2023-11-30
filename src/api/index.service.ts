import type { ResponseData } from '../interfaces/response.interface'

export const getFoodData = (): Promise<ResponseData[]> => {
  return Promise.resolve([
    { title: 'Томаты', count: 30, price: 300, id: 0 },
    { title: 'Огурцы', count: 30, price: 150, id: 1 },
    { title: 'Бананы', count: 30, price: 70, id: 2 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 95, id: 3 },
    { title: 'Масло сливочное', count: 30, price: 135, id: 4 },
    { title: 'Томаты2', count: 30, price: 300, id: 5 },
    { title: 'Огурцы', count: 30, price: 300, id: 6 },
    { title: 'Бананы', count: 30, price: 300, id: 7 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 300, id: 8 },
    { title: 'Масло подсолнечное', count: 30, price: 300, id: 9 },
    { title: 'Томаты3', count: 30, price: 300, id: 10 },
    { title: 'Огурцы', count: 30, price: 300, id: 11 },
    { title: 'Бананы', count: 30, price: 300, id: 12 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 300, id: 13 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 300, id: 14 },
    { title: 'Томаты4', count: 30, price: 300, id: 15 },
    { title: 'Огурцы', count: 30, price: 300, id: 16 },
    { title: 'Бананы', count: 30, price: 300, id: 17 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 300, id: 18 },
    { title: 'Шоколадный батончик <name>', count: 30, price: 300, id: 19 },
  ])
}

export const getClothesData = (): Promise<ResponseData[]> => {
  return Promise.resolve([
    { title: 'Шапка', count: 30, price: 900, id: 0 },
    { title: 'Брюки', count: 30, price: 3000, id: 1 },
    { title: 'Кофта', count: 30, price: 2700, id: 2 },
    { title: 'Рубашка', count: 30, price: 4200, id: 3 },
    { title: 'Джинсы', count: 30, price: 3200, id: 4 },
    { title: 'Спортивные штаны', count: 30, price: 2700, id: 5 },
    { title: 'Зимняя куртка', count: 6300, price: 300, id: 6 },
    { title: 'Осенняя куртка', count: 4800, price: 300, id: 7 },
    { title: 'Майка', count: 30, price: 900, id: 8 },
    { title: 'Шапка чёрная', count: 30, price: 900, id: 9 },
    { title: 'Брюки XL', count: 30, price: 3000, id: 10 },
    { title: 'Кофта S', count: 30, price: 2700, id: 11 },
    { title: 'Рубашка XS', count: 30, price: 4200, id: 12 },
    { title: 'Джинсы чёрный', count: 30, price: 3200, id: 13 },
    { title: 'Штаны карго', count: 30, price: 2700, id: 14 },
    { title: 'Зимняя куртка с капюшоном', count: 6300, price: 300, id: 15 },
    { title: 'Осенняя куртка 2', count: 4800, price: 300, id: 16 },
    { title: 'Майка белай', count: 30, price: 900, id: 17 },
    { title: 'Шапка белая', count: 30, price: 900, id: 18 },
    { title: 'Брюки клеш', count: 30, price: 3000, id: 19 },
  ])
}

export const getElectronicData = (): Promise<ResponseData[]> => {
  return Promise.resolve([
    { title: 'Телефон', count: 30, price: 37000, id: 0 },
    { title: 'Ноутбук', count: 30, price: 90000, id: 1 },
    { title: 'Телевизор', count: 30, price: 25000, id: 2 },
    { title: 'Планшет', count: 30, price: 15000, id: 3 },
    { title: 'Микроволновка', count: 30, price: 6000, id: 4 },
  ])
}
