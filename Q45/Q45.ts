//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]): Record<string, any> {
  const car: Record<string, any> = {
      manufacturer,
      modelName,
  };

  for (const option of options) {
      Object.assign(car, option);
  }
  return car;
}
const carInfo = createCar("Audi", "e-tron GT", { color: "Grey", year: 2022, features: ["Navigation", "21-inch wheel design"] });
console.log(carInfo);