Ext.define('mixtape.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            height: 50,
            items: [ 
                { xtype: 'tbtext', text: 'MixTape', style: 'font-size:18px; font-weight:bold;' },
                '->',
                { xtype: 'textfield', emptyText: 'Search'},
                { xtype: 'button', text: 'Add/Import' }
            ]
        },
        {
            region: 'west',
            xtype: 'panel',
            title: 'Navigation',
            width: 200,
            split: true,
            layout: 'fit',
            items: [
                {
                    xtype: 'treepanel',
                    rootVisible: false,
                    store: {
                        type: 'tree',
                        root: {
                            expanded: true,
                            children: [
                                { text: 'Artists', leaf: true },
                                { text: 'Albums', leaf: true },
                                { text: 'Tracks', leaf: true },
                                { text: 'Genres', leaf: true}
                            ]
                        }
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            items: [
                {
                    xtype: 'grid',
                    title: 'Artists',
                    columns: [
                        { text: 'Name', dataIndex: 'name', flex: 1 },
                        { text: 'Genre', dataIndex: 'genreId', flex: 1 },
                        { text: 'Priority', dataIndex: 'priorityId', flex: 1 },
                        { text: 'Phase', dataIndex: 'phaseId', flex: 1 },
                    ],
                    store: {
                        fields: ['name', 'genreId', 'priorityId', 'phaseId'],
                        data: [
                            { name: 'Artist 1', genreId: 2, priorityId: 5, phaseId: 1 },
                            { name: 'Artist 2', genreId: 3, priorityId: 3, phaseId: 2 },
                            { name: 'Artist 3', genreId: 5, priorityId: 4, phaseId: 3 },
                            { name: 'Artist 4', genreId: 4, priorityId: 2, phaseId: 4 }
                        ]
                    }
                }
            ]
        }
    ]
})