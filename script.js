/*Artificial Limitation
if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
*/

/*
TODO: 
- Make Load Factor
- Dynamic growth based on load factor
- Check hash at different array sizes for collisions
*/

  function createHashMap(){
    let size = 16;
    let length = 0;
    const arr = {};

    const getLength = () => {
        return length;
    }

    const incLength = () => {
        length++;
    }

    const decLength = () => {
        length--;
    }

    const set = (key, value) => {
        let index = hash(key) % size;
        
        if (index < 0 || index >= size) {
            throw new Error("Trying to access index out of bound");
          }
        else{
            if(arr[index]){
                arr[index] = {key, value};
            }
            else {
                incLength();
                arr[index] = {key, value};
            }
        }
    }

    const get = (key) => {
        let index = hash(key) % size;

        try{
            return arr[index].value;
        }
        catch(e){
            return null;
        }
    }

    const has = (key) => {
        let index = hash(key) % size;
        if(arr[index]){
            return true;
        }
        else{
            return false;
        }
    }

    const remove = (key) => {
        let index = hash(key) % size;

        delete arr[index]
        decLength();
    }

    const clear = () => {
        for (var key in arr){
            if (arr.hasOwnProperty(key)){
                delete arr[key];
            }
        }

        size = 16;
        length = 0;
    }

    const keys = () => {
        let keyArr = [];

        for(var key in arr){
            keyArr.push(arr[key].key);
        }

        return keyArr;
    }

    const values = () => {
        let valArr = [];

        for(var key in arr){
            valArr.push(arr[key].value);
        }

        return valArr;
    }

    const entries = () => {
        let entries = [];

        for(var key in arr){
            entries.push(arr[key]);
        }

        return entries;
    }

    const hash = (key) => {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
     

    return {
        set,
        get,
        has,
        remove,
        clear,
        keys,
        values,
        entries,
        getLength
    }
  }

const hm = createHashMap();
hm.set("test", 1);
hm.set("tesv334",2);

console.log(hm.get("test"));
console.log(hm.get("tesv334"));

console.log(hm.keys())
console.log(hm.values());
console.log(hm.entries())