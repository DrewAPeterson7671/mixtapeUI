Ext.define('Mixtape.store.Phases', {
    extend: 'Ext.data.Store',
    alias: 'store.phases',

    model: 'Mixtape.model.Phase',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/phases',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});