import { fromJS, getIn } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array);
}
