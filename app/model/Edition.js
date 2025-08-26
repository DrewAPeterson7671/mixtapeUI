Ext.define('Mixtape.model.Edition', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/editions',
        reader: {
            type: 'json',
            rootProperty: 'editions'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'editions'
        }
    },
});