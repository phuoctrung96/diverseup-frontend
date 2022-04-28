export const removeEmptyValues = (obj: any) => {
  for (const propName in obj) {
    if (!obj[propName] || obj[propName].length === 0) {
      delete obj[propName];
    } else if (typeof obj[propName] === 'object') {
      removeEmptyValues(obj[propName]);
    }
  }
  return obj;
};
