$(document).ready(function(){


var mockData = [];
            mockData.push({
                item:{
                    id: 'id1',
                    label: 'Parent',
                    checked: false
                },
                children: [{
                   item:{
                        id: 'id11',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id12',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id13',
                        label: 'Child',
                        checked: false
                    } 
                }]
            });
            mockData.push({
                item:{
                    id: 'id2',
                    label: 'Parent',
                    checked: false
                },
                children: [{
                   item:{
                        id: 'id21',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id22',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id23',
                        label: 'Child',
                        checked: false
                    } 
                }]
            });
            mockData.push({
                item:{
                    id: 'id3',
                    label: 'Parent',
                    checked: false
                },
                children: [{
                   item:{
                        id: 'id31',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id32',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id33',
                        label: 'Child',
                        checked: false
                    } 
                }]
            });
             mockData.push({
                item:{
                    id: 'id4',
                    label: 'Parent',
                    checked: false
                },
                children: [{
                   item:{
                        id: 'id41',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id42',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id43',
                        label: 'Child',
                        checked: false
                    } 
                }]
            });
             mockData.push({
                item:{
                    id: 'id5',
                    label: 'Parent',
                    checked: false
                },
                children: [{
                   item:{
                        id: 'id51',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id52',
                        label: 'Child',
                        checked: false
                    } 
                },{
                   item:{
                        id: 'id53',
                        label: 'Child',
                        checked: false
                    } 
                }]
            });

            $('#tree-container1').highCheckTree({
                data: mockData
            });

            });