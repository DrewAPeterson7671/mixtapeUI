Ext.define('Mixtape.store.Tags', {
    extend: 'Ext.data.Store',
    alias: 'store.tags',

    model: 'Mixtape.model.Tag',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/tags',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});