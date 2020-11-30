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
