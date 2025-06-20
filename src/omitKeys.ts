function omitKeys(obj: any, keysToRemove: string[]) {
    const newObj = { ...obj };
    keysToRemove.forEach(key => delete newObj[key]);
    return newObj;
}
export default omitKeys