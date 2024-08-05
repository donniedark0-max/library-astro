export type AuthorGender = "masculino" | "femenino"

export interface SocialMedia {
    website?: string
    twitter?: string
    instagram?: string
    facebook?: string
    linkedin?: string
}

export interface Author {
    id: string
    name: string
    birthDate: Date
    age: number
    realName?: string
    nationality: string
    biography: string
    gender?: AuthorGender
    socials?: SocialMedia
    notableWorks?: Array<{
        title: string
        year: number
        description: string
    }>
    awards?: Array<{
        title: string
        year: number
        description?: string
    }>
    portraitURL?: string
    website?: string
}