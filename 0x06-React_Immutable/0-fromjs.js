import { fromJS } from "./node_modules/immutable/dist/immutable";

export function getImmutableObject(object) {
    return fromJS(object);
}