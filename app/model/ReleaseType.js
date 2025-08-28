Ext.define('Mixtape.model.ReleaseType', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/release_types',
        reader: {
            type: 'json',
            rootProperty: 'release_types'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'release_types'
        }
    },
});