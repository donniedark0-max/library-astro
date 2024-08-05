import { type Author } from "@/types/Author"

const addGetters = (authors: Author[]): Author[] => {
	return authors.map((author) => ({
		...author,
		get age() {
			return new Date(new Date().getTime() - this.birthDate.getTime()).getFullYear() - 1970
		},
		get notableWorksTitles() {
			return this.notableWorks?.map((work) => work.title) || []
		},
	}))
}

export const AUTHORS: Author[] = addGetters([
	{
		id: "mario-benedetti",
		name: "Mario Benedetti",
		birthDate: new Date(1920, 8, 14),
		age: 89,
		realName: "Mario Orlando Hardy Hamlet Brenno Benedetti Farrugia",
		nationality: "uruguayo",
		biography: "Mario Benedetti fue un escritor, poeta y dramaturgo uruguayo...",
		gender: "masculino",
		socials: {
			website: "https://www.fundacionmariobenedetti.org",
		},
		notableWorks: [
			{
				title: "La Tregua",
				year: 1960,
				description: "Una novela sobre la vida monótona de un oficinista y su inesperado romance...",
			},
			{
				title: "Gracias por el Fuego",
				year: 1965,
				description: "Una novela que trata sobre la opresión política y la lucha personal...",
			},
		],
		awards: [
			{
				title: "Premio Reina Sofía de Poesía Iberoamericana",
				year: 1999,
			},
			{
				title: "Premio Internacional Menéndez Pelayo",
				year: 2005,
			},
		],
		portraitURL: "/authors/portraits/mario-benedetti.jpg",
		website: "https://www.fundacionmariobenedetti.org",
	},
	{
		id: "gabriel-garcia-marquez",
		name: "Gabriel García Márquez",
		birthDate: new Date(1927, 2, 6),
		age: 87,
		realName: "Gabriel José de la Concordia García Márquez",
		nationality: "colombiano",
		biography: "Gabriel García Márquez fue un escritor, guionista y periodista colombiano...",
		gender: "masculino",
		socials: {
			website: "https://www.gabrielgarciamarquez.org",
		},
		notableWorks: [
			{
				title: "Cien Años de Soledad",
				year: 1967,
				description: "Una novela que sigue la historia de la familia Buendía en el ficticio pueblo de Macondo...",
			},
			{
				title: "El Amor en los Tiempos del Cólera",
				year: 1985,
				description: "Una novela que explora el amor de toda una vida entre Fermina Daza y Florentino Ariza...",
			},
		],
		awards: [
			{
				title: "Premio Nobel de Literatura",
				year: 1982,
			},
			{
				title: "Premio Rómulo Gallegos",
				year: 1972,
			},
		],
		portraitURL: "/authors/portraits/gabriel-garcia-marquez.jpg",
		website: "https://www.gabrielgarciamarquez.org",
	},
	{
		id: "jorge-luis-borges",
		name: "Jorge Luis Borges",
		birthDate: new Date(1899, 7, 24),
		age: 86,
		realName: "Jorge Francisco Isidoro Luis Borges",
		nationality: "argentino",
		biography: "Jorge Luis Borges fue un escritor, ensayista y bibliotecario argentino...",
		gender: "masculino",
		socials: {
			website: "https://www.borges.es",
		},
		notableWorks: [
			{
				title: "Ficciones",
				year: 1944,
				description: "Una colección de cuentos que exploran temas de realidad, identidad y el infinito...",
			},
			{
				title: "El Aleph",
				year: 1949,
				description: "Una colección de cuentos que tocan temas como la eternidad, el infinito y la existencia...",
			},
		],
		awards: [
			{
				title: "Premio Internacional de Literatura",
				year: 1961,
			},
			{
				title: "Premio Miguel de Cervantes",
				year: 1979,
			},
		],
		portraitURL: "/authors/portraits/jorge-luis-borges.jpg",
		website: "https://www.borges.es",
	},
])