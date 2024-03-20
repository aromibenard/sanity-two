//schema for the books

export const  bookSchema = {
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'slug',
            type: 'slug',
            options: {source: 'name'},
        },

        {
            name: 'category',
            title: 'Category',
            type: 'string',

        },

        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: 'true'},//allows for cropping of images
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                },
                {
                    name: 'url',
                    title: 'URL',
                    type: 'array',
                    of: [{type: 'block'}],
                }
            ]


        }
    ]
}