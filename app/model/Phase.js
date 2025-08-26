Ext.define('Mixtape.model.Phase', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/phases',
        reader: {
            type: 'json',
            rootProperty: 'phases'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'phases'
        }
    },
});