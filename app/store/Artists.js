Ext.define('Mixtape.store.Artists', {
    extend: 'Ext.data.Store',
    alias: 'store.artists',

    model: 'Mixtape.model.Artist',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/artists',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});

