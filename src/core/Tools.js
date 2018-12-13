import Type from "./Type/index.js";
import ArrayTool from "./ArrayTool/index.js";

function Tools() {}

Tools.prototype = Object.assign({}, Type, ArrayTool);
Tools.prototype.constructor = Tools;

export default Tools;
