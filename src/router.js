import spb from './components/spb.vue';
import artic from './views/artic.vue';
import article from './components/article.vue';
const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        },
        {
            path: '/spb',
            name: 'spb',
            component: spb
        },
        {
            path: '/artic',
            name: 'artic',
            component: artic,
            children:[
                {
                    path: '/',
                    name: 'article',
                    component: article,
                }
            ]
        },
];
export default routers;