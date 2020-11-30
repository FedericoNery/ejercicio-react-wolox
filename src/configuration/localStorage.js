export default class LocalStorageHelper {
    constructor(){

    }
    
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            return null;
        }
    }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

/*TODO o pongo la clase o dejo los métodos estos libres*/
export const getLocalStorageItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (e) {
        return null;
    }
}
export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
