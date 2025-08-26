Ext.define('Mixtape.model.Media', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'created_at', type: 'date', dateFormat: 'c' },
        { name: 'updated_at', type: 'date', dateFormat: 'c' }
    ],

    proxy: {
        type: 'rest',
        url: '/api/media',
        reader: {
            type: 'json',
            rootProperty: 'media'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'media'
        }
    },
});