import { Loading } from "quasar";

export function checkSame(data, dataCopy) {
  return JSON.stringify(data) === JSON.stringify(dataCopy);
}

export function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function hideLoading() {
  setTimeout(() => {
    Loading.hide();
  }, 1000);
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function isInvalidValue(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "null" ||
    value === "undefined" ||
    value === "None" ||
    value === "none" ||
    value === "NONE" ||
    value === "NULL" ||
    value === "UNDEFINED" ||
    value === "Null" ||
    value === "Undefined" ||
    isEmptyObject(value)
  );
}

