import Type from "./Type/index.js";
import of from "./lib/of";
import Utils from "./Utils/index.js";

function Tools() {}

Tools.prototype = Object.assign({}, Type, Utils, { of: of });
Tools.prototype.constructor = Tools;

export default Tools;
