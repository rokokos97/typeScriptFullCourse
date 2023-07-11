function append<T>(el:T, list:T[]):T[] {
    return list.concat(el)
}
// таким чином тепер ми будемо отримувати помилку при спробі передавати різні типи данних 

// append('str', [1,2])