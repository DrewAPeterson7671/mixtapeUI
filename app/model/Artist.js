Ext.define('Mixtape.model.Artist', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'priority_id', type: 'int' },
        { name: 'phase_id', type: 'int' },
        { name: 'genre_id', type: 'int' },
        { name: 'complete', type: 'boolean' },
        { name: 'wikipedia', type: 'string' },
        { name: 'discogs', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/artists',
        reader: {
            type: 'json',
            rootProperty: 'artists'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'artists'
        }
    },
});
