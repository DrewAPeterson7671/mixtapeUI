Ext.define('Mixtape.store.Media', {
    extend: 'Ext.data.Store',
    alias: 'store.media',

    model: 'Mixtape.model.Media',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/media',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});