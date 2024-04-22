//queries all books from sanity database using groq query language
export const BOOKS_QUERY = `*[_type == "book"]{
    _id,
    _createdAt,
    name,
    author,
    "slug": slug.current,
    "image": image.asset->url, 
    url,
    content
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
    content
  }`