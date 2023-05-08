import { CreatePet, Pet, PetsRepository } from '@/repositories/pets-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async create(data: CreatePet) {
    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      description: data.description,
      age: data.age,
      size: data.size
    }

    this.items.push(pet)

    return pet
  }

  async findById(id: string) {
    const pet = this.items.find(pet => pet.id === id)

    if (!pet) {
      throw Error('bla bla bla')
    }

    return pet
  }
}
