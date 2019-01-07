import Type from "./Type/index.js";
import of from "./lib/of";
import Utils from "./Utils/index.js";
import Exp from "./Exp/index.js";
import { binaryStringWrapper } from './BinaryString/index.js';

function Tools() {}

Tools.prototype = Object.assign({}, Type, Exp, Utils, { of: of });
Tools.prototype.BinaryString = binaryStringWrapper;
Tools.prototype.constructor = Tools;

export default Tools;
