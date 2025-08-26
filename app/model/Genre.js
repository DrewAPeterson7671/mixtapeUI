Ext.define('Mixtape.model.Genre', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/genres',
        reader: {
            type: 'json',
            rootProperty: 'genres'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'genres'
        }
    },
});