export type AuthorGender = "masculino" | "femenino"
export interface Author {
    id: string
    name: string
    birthDate: Date
    deathDate: Date
    nationality: string
    biography: string
    gender?: AuthorGender
    portraitURL?: string
}