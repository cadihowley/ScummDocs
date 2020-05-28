
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/:route',
  component: ComponentCreator('/:route'),
  
  routes: [
{
  path: '/about_scumm',
  component: ComponentCreator('/about_scumm'),
  exact: true,
  
},
{
  path: '/doc1',
  component: ComponentCreator('/doc1'),
  exact: true,
  
},
{
  path: '/doc2',
  component: ComponentCreator('/doc2'),
  exact: true,
  
},
{
  path: '/doc3',
  component: ComponentCreator('/doc3'),
  exact: true,
  
},
{
  path: '/general_guide',
  component: ComponentCreator('/general_guide'),
  exact: true,
  
},
{
  path: '/get_games',
  component: ComponentCreator('/get_games'),
  exact: true,
  
},
{
  path: '/maniac',
  component: ComponentCreator('/maniac'),
  exact: true,
  
},
{
  path: '/mdx',
  component: ComponentCreator('/mdx'),
  exact: true,
  
},
{
  path: '/monkey',
  component: ComponentCreator('/monkey'),
  exact: true,
  
},
{
  path: '/monkey2',
  component: ComponentCreator('/monkey2'),
  exact: true,
  
},
{
  path: '/psp',
  component: ComponentCreator('/psp'),
  exact: true,
  
},
{
  path: '/queen',
  component: ComponentCreator('/queen'),
  exact: true,
  
},
{
  path: '/raspberrypi',
  component: ComponentCreator('/raspberrypi'),
  exact: true,
  
},
{
  path: '/sound',
  component: ComponentCreator('/sound'),
  exact: true,
  
},
{
  path: '/tentacle',
  component: ComponentCreator('/tentacle'),
  exact: true,
  
},
{
  path: '/what_is',
  component: ComponentCreator('/what_is'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
