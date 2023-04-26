export interface Marca {
    id: number,
    name: string
}

export interface Modelo {
    marcaId: number,
    name: string
}

export interface Carro {
    marca: string,
    modelo: string
}


export interface pokemonInterface {
    name: string,
    url?: string
}