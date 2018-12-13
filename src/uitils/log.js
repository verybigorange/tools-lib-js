import { NAME } from "./config";

export function log_error(msg = "") {
  console.error(`${NAME}：${msg}`);
}

export function log(msg = "") {
  console.log(`${NAME}：${msg}`);
}

export function log_warning(msg = "") {
  console.warning(`${NAME}：${msg}`);
}