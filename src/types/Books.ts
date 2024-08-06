export type Book = {
	id: string;
	name: string;
	publicationDate: Date;
	pageCount: number;
	genre: string;
	authorId: string;
	synopsis?: string; // Optional property for a brief summary of the book
	language: string;
	publisher?: string; // Optional property for the publisher's name
	isbn?: string; // Optional property for the International Standard Book Number
	coverImageUrl?: string; // Optional property for the URL of the book's cover image
	awards?: Array<{
		title: string;
		year: number;
	}>; // Optional property for a list of awards the book has won
	reviews?: Array<{
		reviewer: string;
		rating: number;
		comment: string;
	}>; // Optional property for a list of reviews with ratings and comments
}