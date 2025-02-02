import getSpecials from "../app";

test.each([
  [
    {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: "Двойной выстрел",
          icon: "http://...",
          description: "Двойной выстрел наносит двойной урон"
        }, 
        {
          id: 9,
          name: "Нокаутирующий удар",
          icon: "http://..."
        }]
    },
    [{
      description: "Двойной выстрел наносит двойной урон",
      icon: "http://...",
      id: 8,
      name: "Двойной выстрел"
    }, {
      description: "Описание недоступно",
      icon: "http://...",
      id: 9,
      name: "Нокаутирующий удар"
    }]
  ]
])("testing function getSpecials",(obj, result) => {
  expect(getSpecials(obj)).toEqual(result);
})