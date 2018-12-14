import Type from "./Type/index.js";
import ArrayTool from "./ArrayTool/index.js";
import Utils from './Utils/index.js';

function Tools() {}

Tools.prototype = Object.assign({}, Type, ArrayTool,Utils);
Tools.prototype.constructor = Tools;

export default Tools;
