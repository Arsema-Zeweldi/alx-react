import { List } from "./node_modules/immutable/dist/immutable";

export function getListObject(array) {
    return List(array);
}

export function addElementToList(list, element) {
    let newList;
    newList = list.concat(element);
    return newList;
}