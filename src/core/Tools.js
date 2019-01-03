import Type from "./Type/index.js";
import of from "./lib/of";
import Utils from "./Utils/index.js";
import Exp from "./Exp/index.js";
import BinaryString from './BinaryString/index.js';

function Tools() {}

Tools.prototype = Object.assign({}, Type, Exp, Utils, BinaryString, { of: of });
Tools.prototype.constructor = Tools;

export default Tools;
