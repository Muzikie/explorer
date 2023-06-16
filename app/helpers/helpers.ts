import type { KeyValue } from './types';

export const removeNullValues = (obj: KeyValue): KeyValue => {
  const newObj: KeyValue = {};
  for (const key in obj) {
    if (obj[key] != null) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
