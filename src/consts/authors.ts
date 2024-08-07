import { type Author } from "@/types/Author";

export const AUTHORS: Author[] = [
	{
		id: "gabriel-garcia-marquez",
		name: "Gabriel García Márquez",
		birthDate: new Date(1927, 2, 6),
		deathDate: new Date(2014, 3, 17),
		nationality: "Colombiano",
		biography: 'El escritor Gabriel García Márquez nació en Arataca, Colombia, el 6 de marzo de 1927. Entre sus mayores logros está el Nobel de Literatura en 1982. Publicó su obra más exitosa, "Cien años de soledad" en 1967 y se convirtió en una de las novelas más importantes de la literatura del siglo XX.',
		portraitURL: "https://www.anahuac.mx/generacion-anahuac/sites/default/files/articles/gabriel-garcia-marquez.jpg",
	},
	{
		id: "miguel-de-cervantes",
		name: "Miguel de Cervantes",
		birthDate: new Date(1547, 8, 29),
		deathDate: new Date(1616, 3, 23),
		nationality: "Español",
		biography: "Novelista, poeta y dramaturgo español. Se cree que nació el 29 de septiembre de 1547 en Alcalá de Henares y murió el 22 de abril de 1616 en Madrid, pero fue enterrado el 23 de abril y popularmente se conoce esta fecha como la de su muerte. Es considerado la máxima figura de la literatura española.",
		portraitURL: "https://th.bing.com/th/id/OIP.Ax77hUZLlceaOHT5GFjZwwHaGL?rs=1&pid=ImgDetMain",
	},
	{
		id: "george-orwell",
		name: "George Orwell",
		birthDate: new Date(1903, 5, 25),
		deathDate: new Date(1950, 0, 21),
		nationality: "Británico",
		biography: "George Orwell fue un escritor y periodista británico, fue el autor de “Rebelión en la granja” y “1984”, esta última una profunda novela anti-utópica que describe un mundo empobrecido y dividido por la guerra permanente y sin tregua entre tres grandes superpotencias",
		portraitURL: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa764be20-7c19-4057-bad6-868af1300454_1200x767.jpeg",
	},
	{
		id: "f-scott-fitzgerald",
		name: "F. Scott Fitzgerald",
		birthDate: new Date(1896, 8, 24),
		deathDate: new Date(1940, 11, 21),
		nationality: "Estadounidense",
		biography: "Fitzgerald es considerado miembro de la Generación Perdida de los años veinte. Escribió cinco novelas: El gran Gatsby, Suave es la noche, A este lado del paraíso, Hermosos y malditos y , que aunque sin terminar, fue publicada tras su muerte.",
		portraitURL:"https://media.newyorker.com/photos/59097f142179605b11ad963c/master/pass/F-Scott-Fitzgerald-Imperfect-Romance-with-The-New-Yorker.jpg"
	},
	{
		id: "harper-lee",
		name: "Harper Lee",
		birthDate: new Date(1926, 3, 28),
		deathDate: new Date(2016, 1, 19),
		nationality: "Estadounidense",
		biography: "Nelle Harper Lee fu conocida por haber ganado el premio Pulitzer con su novela Matar a un ruiseñor. En 1999 fue elegida como la mejor novela del siglo a través de una votación de Library Journal.",
		portraitURL: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-50358657.jpg",
	},
];