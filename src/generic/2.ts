/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
// Я додав універсали <T extends AllType, U extends AllType>,
//  щоб вказати, що top та bottom мають бути об’єкти з полями з AllType.
// далі утворюємо нові обєкти де ключі з AllType будуть належать новім обєктам. 
function compare <T extends AllType, U extends AllType> (top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};


//  варіант 2

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare<T extends Pick<AllType, "name" | "color">,U extends Pick<AllType, "position" | "weight">>(top: T, bottom: U): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// export {};