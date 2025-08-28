Ext.define('Mixtape.store.Priorities', {
    extend: 'Ext.data.Store',
    alias: 'store.priorities',

    model: 'Mixtape.model.Priority',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/priorities',
        reader: {
            type: 'json',
            rootProperty: 'data'           
        }
    },

    autoLoad: true
});