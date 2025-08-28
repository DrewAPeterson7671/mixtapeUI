Ext.define('Mixtape.model.Album', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'release_type_id', type: 'int' },
        { name: 'media_id', type: 'int' },
        { name: 'edition_id', type: 'int' },
        { name: 'listened', type: 'boolean' },
        { name: 'year', type: 'integer' },
        { name: 'rating', type: 'int' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/albums',
        reader: {
            type: 'json',
            rootProperty: 'albums'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'albums'
        }
    },
});
