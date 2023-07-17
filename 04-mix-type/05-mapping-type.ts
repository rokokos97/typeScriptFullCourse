type PcBrand = {
    name: string
    country: string
    createdAt: Date 
}

// Подібна форма запису не можлива але для таких випадків є альтернатива
// type myPcRecord = {
//     [key: 'a' | 'b']: string
// }

type WellKnownBrands = 'apple'|'dell'|'samsung'|'IBM'

// використовуємо подібний запис
type myPcRecord = {
    [BrandKey in WellKnownBrands]?: PcBrand
 }
