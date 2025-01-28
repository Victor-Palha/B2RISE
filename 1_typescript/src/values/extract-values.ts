/**
 * Extracts the values of a specified key from an array of objects.
 *
 * @template T_DATA - The type of the objects within the data source.
 * @param {T_DATA[]} datasource - An array of objects from which values will be extracted.
 * @param {keyof T_DATA} key - The key whose values will be extracted from each object in the array.
 * @returns {Array<T_DATA[keyof T_DATA]>} - An array of values corresponding to the specified key from each object in the data source.
 *
 * @example
 * const clients = [
 *   { id: 1, name: "John", age: 30 },
 *   { id: 2, name: "Jane", age: 25 },
 *   { id: 3, name: "Jim", age: 35 }
 * ];
 *
 * const ages = extractValues(clients, "age");
 * console.log(ages); // Output: [30, 25, 35]
 *
 * const names = extractValues(clients, "name");
 * console.log(names); // Output: ["John", "Jane", "Jim"]
 */
export function extractValues<T_DATA>(datasource: T_DATA[], key: keyof T_DATA): T_DATA[keyof T_DATA][] {
  return datasource.map((valueFromDatasource) => valueFromDatasource[key]);
}