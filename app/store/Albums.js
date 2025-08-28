Ext.define('Mixtape.store.Albums', {
    extend: 'Ext.data.Store',
    alias: 'store.albums',

    model: 'Mixtape.model.Album',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/albums',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});

