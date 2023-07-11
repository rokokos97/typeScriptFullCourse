export function createMap<T>(list:Array<T>){
    return function<U>(cb:(ele:T)=> U):U[] {
      const result = [];
   
      for (let el of list) {
        result.push(cb(el)) 
      }

      return result;
    }
  }
  
const newArray = createMap([1,2,3])
const mapArr = newArray((element) => element*2)