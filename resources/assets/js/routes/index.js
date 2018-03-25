import VueRouter from 'vue-router';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Writer from '@/pages/Writer';
import Editor from '@/pages/Editor';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/writer',
        component: Writer
    },
    {
        path: '/editor',
        component: Editor
    }
];

export default new VueRouter({
    routes
});