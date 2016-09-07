
// this is the logical construction of the heads up display
// however, I didn't spend enough time getting the reader for it to work.
var hud_def = {
    type: 'div',
    attributes: [
        { id:'myIcon_hud'},
        {'class':'myIcon_invisible'}
    ],
    title:{
        type:'div',
        attributes:[
            {'class':'myIcon_title'}
        ],
        'innerText':'Ad Title'
    },
    skip:{
        type:'div',
        attributes:[
            {'class':'myIcon_skip'}
        ],
        'innerText':'Skip {macro}'
    },
    close:{
        type:'div',
        attributes:[
            {'class':'myIcon_close'}
        ],
        'svg':{
            attributes:[
                {'class':'myIcon_active_control'}
            ],
            polygon:{
                attributes:[{ points:'3,0 0,3 12.5,15.5 0,28 3,31 15.5,18.5 28,31 31,28 18.5,15.5 31,3 28,0 15.5,12.5'}]
            }

        }
    }
    /*
     ,
     controls:{
     type:'table',
     attributes:[ {'class':'myIcon myIcon_controls'} ],
     play:{
     type: 'td',
     attributes:[ {'class': 'myIcon myIcon_play'}],
     'svg':{}
     },
     pause:{
     type: 'td',
     attributes:[],
     'class:':'',
     'svg':''},
     clock:{
     type: 'td',
     attributes:[],
     'class:':'',
     'svg':''},
     progress:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''},
     mute:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''},
     muted:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''},
     volume:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''},
     fullscreen_active:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''},
     fullscreen_inactive:{
     type: 'td',
     'class:':'',
     attributes:[],
     'svg':''}
     }
     */
};