import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetPetUseCase } from './get-pet'

let petsRepository: InMemoryPetsRepository
let sut: GetPetUseCase

describe('Get Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetUseCase(petsRepository)
  })

  it('should to get pet', async () => {
    await petsRepository.create({
      id: 'pet-id',
      name: 'Yoda',
      description: 'Beautiful',
      age: 'adulto',
      size: 'pequeno'
    })

    const { pet } = await sut.execute('pet-id')

    expect(pet.id).toEqual('pet-id')
  })
})
