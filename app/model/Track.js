Ext.define('Mixtape.model.Track', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'listened', type: 'boolean' },
        { name: 'media_id', type: 'int' },
        { name: 'number', type: 'integer' },
        { name: 'disc_number', type: 'int' },
        { name: 'rating', type: 'int' },
        { name: 'artist_id', type: 'int' },
        { name: 'album_id', type: 'int' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/tracks',
        reader: {
            type: 'json',
            rootProperty: 'tracks'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'tracks'
        }
    },
});