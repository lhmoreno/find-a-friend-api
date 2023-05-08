import { CreatePet, Pet, PetsRepository } from '@/repositories/pets-repository'

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    name,
    description,
    age,
    size
  }: CreatePet): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name,
      description,
      age,
      size
    })

    return {
      pet
    }
  }
}
