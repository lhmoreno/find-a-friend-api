export interface Pet {
  id: string
  name: string
  description: string
  age: 'filhote' | 'adulto'
  size: 'pequeno' | 'médio' | 'grande'
}

export interface CreatePet {
  id?: string
  name: string
  description: string
  age: 'filhote' | 'adulto'
  size: 'pequeno' | 'médio' | 'grande'
}

export interface PetsRepository {
  create(data: CreatePet): Promise<Pet>
  findById(id: string): Promise<Pet>
}
