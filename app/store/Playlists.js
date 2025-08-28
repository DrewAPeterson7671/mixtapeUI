Ext.define('Mixtape.store.Playlists', {
    extend: 'Ext.data.Store',
    alias: 'store.playlists',

    model: 'Mixtape.model.Playlist',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/playlists',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});