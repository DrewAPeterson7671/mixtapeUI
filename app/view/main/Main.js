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
                    title: 'Playlist',
                    columns: [
                        { text: 'Title', dataIndex: 'title', flex: 1 },
                        { text: 'Rating', dataIndex: 'rating', flex: 1 },
                        { text: 'Listened', dataIndex: 'listened', flex: 1 }
                    ],
                    store: {
                        type: 'tracks'
                    }
                }
            ]
        }
    ]
})