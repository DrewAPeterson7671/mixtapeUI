Ext.define('Mixtape.model.Tag', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'artist_id', type: 'int' },
        { name: 'album_id', type: 'int' },
        { name: 'track_id', type: 'int' },
        { name: 'playlist_id', type: 'integer' },
        { name: 'comment', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/tags',
        reader: {
            type: 'json',
            rootProperty: 'tags'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'tags'
        }
    },
});