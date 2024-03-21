//home page
import Therapy from "@/components/therapy";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

//queries all books from sanity database using groq query language
export const BOOKS_QUERY = `*[_type == "book"]{
  _id,
  _createdAt,
  name,
  author,
  "slug": slug.current,
  "image": image.asset->url, 
  url,
}`;

//query a specific book
export const BOOK_QUERY = `*[_type == "book" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  author,
  "slug": slug.current,
  "image": image.asset->url, 
  url,
}`

export default async function Home() {

  const books = await client.fetch<SanityDocument[]>(BOOKS_QUERY);
  
  return (
    <div className="h-screen mx-10">

      {/* therapy section */}
      <Therapy/>

       <div className="flex my-4">
          <h1 className="mx-auto font-bold text-4xl bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">Explore Our Book Catalogue</h1>
       </div>
       <div className="mt-5 p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((_book) => (

          // book section

          <Link
            href={`/books/${_book.slug}`}
            key={_book._id}
            className="border-2 border-slate-500 rounded-lg p-2 hover:scale-105 hover:border-blue-400 transition w-2/3 mx-auto shadow-xl hover:shadow-blue-200">
              {_book.image && (
                <Image
                  src={_book.image}
                  alt={_book.name}
                  width={200}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500 mx-auto"

                />
              )}

              <div className="mt-2 font-bold ">
                {_book.name}
                <div className="italic text-gray-500">
                  {_book.author}
                </div>
              </div>
            </Link>
        ))}
       </div>
    </div>
  );
}
