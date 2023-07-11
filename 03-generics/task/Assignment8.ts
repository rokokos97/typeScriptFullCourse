export function keys<O extends object>(obj: O): Array<keyof O>{
    const currentKeys = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    
    return currentKeys;
  }
   
   
  export function values<T extends object>(obj: T): Array<T[keyof T]> {
    const currentValues = [];
   
    for (let key in obj) {
      currentValues.push(obj[key]);
    }
   
    return currentValues;
  }
   