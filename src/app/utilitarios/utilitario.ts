export function findObjectAtr_number(array: Object[], atr:string,value:number): boolean {
  var find: boolean = false;
  for (let elemento of array) {
    if (Object(elemento)[atr] == value) {
        find = true;
    }
  }
  return find;
}
