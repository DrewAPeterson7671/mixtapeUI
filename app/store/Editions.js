Ext.define('Mixtape.store.Editions', {
    extend: 'Ext.data.Store',
    alias: 'store.editions',

    model: 'Mixtape.model.Edition',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/editions',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});