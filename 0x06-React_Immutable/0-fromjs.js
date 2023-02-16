import Immutable from "./node_modules/immutable/dist/immutable";

export function getImmutableObject(object) {
    return Immutable.fromJS(object);
}