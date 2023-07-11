// Параметри в generic прийнято записувати з великої літери
type typeFactory<T> = T
type XType = typeFactory<string>
type YType = typeFactory<number>

