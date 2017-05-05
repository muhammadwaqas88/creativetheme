$(function() {

    var defaultData = [{
            text: 'Parent 1',
            nodes: [{
                    text: 'Child 1'
                },
                {
                    text: 'Child 2'
                },
                {
                    text: 'Child 3'
                }
            ]
        },
        {
            text: 'Parent 2',
            nodes: [{
                    text: 'Child 1'
                },
                {
                    text: 'Child 2'
                },
                {
                    text: 'Child 3'
                }
            ]
        },
        {
            text: 'Parent 3',
            nodes: [{
                    text: 'Child 1'
                },
                {
                    text: 'Child 2'
                },
                {
                    text: 'Child 3'
                }
            ]
        },
        {
            text: 'Parent 4',
            nodes: [{
                    text: 'Child 1'
                },
                {
                    text: 'Child 2'
                },
                {
                    text: 'Child 3'
                }
            ]
        },
        {
            text: 'Parent 5',
            nodes: [{
                    text: 'Child 1'
                },
                {
                    text: 'Child 2'
                },
                {
                    text: 'Child 3'
                }
            ]
        }
    ];

    $('#treeview1').treeview({
        data: defaultData,
        levels: 1,
    });

    var $checkableTree = $('#treeview-checkable').treeview({
        data: defaultData,
        showIcon: false,
        showCheckbox: true,
        levels: 1,
        onNodeChecked: function(event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
        },
        onNodeUnchecked: function(event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
        }
    });


});