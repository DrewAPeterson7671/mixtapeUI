Ext.define('Mixtape.store.Genres', {
    extend: 'Ext.data.Store',
    alias: 'store.genres',

    model: 'Mixtape.model.Genre',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/genres',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});