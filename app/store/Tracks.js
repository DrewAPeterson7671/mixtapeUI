Ext.define('Mixtape.store.Tracks', {
    extend: 'Ext.data.Store',
    alias: 'store.tracks',

    model: 'Mixtape.model.Track',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/tracks',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});