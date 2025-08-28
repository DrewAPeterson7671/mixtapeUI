Ext.define('Mixtape.model.Playlist', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'sequence', type: 'int' },
        { name: 'platform', type: 'string' },
        { name: 'comment', type: 'string' },
        { name: 'genre_id', type: 'int' },
        { name: 'year', type: 'integer' },
        { name: 'source', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/playlists',
        reader: {
            type: 'json',
            rootProperty: 'playlists'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'playlists'
        }
    },
});