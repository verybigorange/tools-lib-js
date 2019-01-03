import Type from "../Type/index.js";
import $$List from "../List/index.js";
import $$Map from "../Map/index.js";

export default function(wrap) {
  if (Type.isArray(wrap)) {
    return new $$List(wrap);
  }
  if (Type.isObject(wrap)) {
    return new $$Map(wrap);
  }
}
