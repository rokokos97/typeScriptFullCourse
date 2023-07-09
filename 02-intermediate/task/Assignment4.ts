interface IProduct {
    price: number
    isNew: boolean
    isSale: boolean
    title: string
}

interface IVehical {
    wheels: number | string
    year: number
    brand: string
}

interface ICar extends IProduct, IVehical {
    type: string
    model: string
}

type Product = {
    price: number
    isNew: boolean
    isSale: boolean
    title: string
}

type Vehical = {
    wheels: number
    year: number
    brand: string
}

type Car1 = {
    type: string
    model: string
} & Product & Vehical
