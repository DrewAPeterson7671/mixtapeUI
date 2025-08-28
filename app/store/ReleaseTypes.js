Ext.define('Mixtape.store.ReleaseTypes', {
    extend: 'Ext.data.Store',
    alias: 'store.releaseTypes',

    model: 'Mixtape.model.ReleaseType',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/release_types',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});