Ext.define('Mixtape.model.Priority', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/priorities',
        reader: {
            type: 'json',
            rootProperty: 'priorities'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'priorities'
        }
    },
});