import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreatePetUseCase } from './create-pet'

let petsRepository: InMemoryPetsRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository)
  })

  it('should to create pet', async () => {
    const { pet } = await sut.execute({
      name: 'Yoda',
      description: 'Beautiful',
      age: 'adulto',
      size: 'pequeno'
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
