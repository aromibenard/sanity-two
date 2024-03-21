//specific book page - a dynamic route for each book
import { BOOK_QUERY } from "@/app/page";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { SanityDocument } from "sanity";


//declaring types for typescript
 type Props = {
     params: {book: string}
 }

 type Book = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    author: string;
 }



export default async function Book({params}: Props) {
    const slug = params.book;
    const book: any = await client.fetch<SanityDocument[]>(BOOK_QUERY, {slug});
   

    if (!book) {
        // Handling the case where no book is found
        return <div className="grid items-center"><h1 className="font-extrabold text-5xl">Book Not found</h1></div>;
    }

    return (
        <div className="w-dvw h-dvh">
            {/* book name */}
            <div className="my-7 flex space-x-1">
                <h2 className="mx-auto text-5xl font-extrabold bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">{book.name}</h2>
            </div>

            {/* book image */}
            <div className="border-2 border-gray-400 shadow-xl rounded-lg p-2 w-2/3 h-2/3 mx-auto hover:border-blue-500 hover:scale-105 transition hover:shadow-blue-100">
                {book.image && (
                    <Image 
                    src={book.image}
                    alt={book.name}
                    width={200}
                    height={300}
                    className="object-cover rounded-lg border border-gray-100 mx-auto w-10/12 h-5/6 pt-2"
                    />
                )}

                {/* book author & read link */}
                <div className="flex justify-around md:m-3">
                     <h3 className="font-semibold text-2xl">A Book by {book.author}</h3>
                    <button className="text-gray-800 bg-slate-400  p-1 md:p-3 w-[6rem] rounded-md shadow-lg hover:scale-105 hover:text-white hover:bg-blue-400 transition">Read</button>
                </div>
            </div>
        </div>

    )
}