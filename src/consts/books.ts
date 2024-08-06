import { type Book } from "@/types/Books";

export const BOOKS: Book[] = [
	{
		id: "1",
		name: "Cien Años de Soledad",
		publicationDate: new Date(1967, 5, 30),
		pageCount: 417,
		genre: "Novela",
		authorId: "gabriel-garcia-marquez",
		synopsis: "La historia de la familia Buendía en el pueblo ficticio de Macondo.",
		language: "Español",
		publisher: "Editorial Sudamericana",
		isbn: "978-0307474728",
		coverImageUrl: "https://example.com/cover/cien-anos-de-soledad.jpg",
		awards: [
			{
				title: "Premio Nobel de Literatura",
				year: 1982,
			},
		],
		reviews: [
			{
				reviewer: "John Doe",
				rating: 5,
				comment: "Un clásico de la literatura latinoamericana.",
			},
		],
	},
	{
		id: "2",
		name: "Don Quijote de la Mancha",
		publicationDate: new Date(1605, 1, 16),
		pageCount: 863,
		genre: "Novela",
		authorId: "miguel-de-cervantes",
		synopsis: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
		language: "Español",
		publisher: "Francisco de Robles",
		isbn: "978-0060934347",
		coverImageUrl: "https://example.com/cover/don-quijote-de-la-mancha.jpg",
		awards: [],
		reviews: [
			{
				reviewer: "Jane Smith",
				rating: 5,
				comment: "Una obra maestra de la literatura universal.",
			},
		],
	},
	{
		id: "3",
		name: "1984",
		publicationDate: new Date(1949, 6, 8),
		pageCount: 328,
		genre: "Distopía",
		authorId: "george-orwell",
		synopsis: "Una visión sombría del futuro en un estado totalitario.",
		language: "Inglés",
		publisher: "Secker & Warburg",
		isbn: "978-0451524935",
		coverImageUrl: "https://example.com/cover/1984.jpg",
		awards: [],
		reviews: [
			{
				reviewer: "Alice Johnson",
				rating: 4.5,
				comment: "Profundamente inquietante y relevante.",
			},
		],
	},
	{
		id: "4",
		name: "El Gran Gatsby",
		publicationDate: new Date(1925, 4, 10),
		pageCount: 180,
		genre: "Novela",
		authorId: "f-scott-fitzgerald",
		synopsis: "La historia de Jay Gatsby y su búsqueda del sueño americano.",
		language: "Inglés",
		publisher: "Charles Scribner's Sons",
		isbn: "978-0743273565",
		coverImageUrl: "https://example.com/cover/el-gran-gatsby.jpg",
		awards: [],
		reviews: [
			{
				reviewer: "Bob Brown",
				rating: 5,
				comment: "Una obra trágica y fascinante sobre la ambición y el amor.",
			},
		],
	},
	{
		id: "5",
		name: "Matar a un ruiseñor",
		publicationDate: new Date(1960, 7, 11),
		pageCount: 281,
		genre: "Novela",
		authorId: "harper-lee",
		synopsis: "La lucha contra la injusticia racial en el sur de los Estados Unidos.",
		language: "Inglés",
		publisher: "J.B. Lippincott & Co.",
		isbn: "978-0061120084",
		coverImageUrl: "https://example.com/cover/matar-a-un-ruisenor.jpg",
		awards: [
			{
				title: "Premio Pulitzer de Ficción",
				year: 1961,
			},
		],
		reviews: [
			{
				reviewer: "Cathy Green",
				rating: 5,
				comment: "Una novela poderosa sobre la moralidad y la empatía.",
			},
		],
	},
];