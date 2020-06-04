
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
  path: '/Act',
  component: ComponentCreator('/Act'),
  exact: true,
  
},
{
  path: '/about/about',
  component: ComponentCreator('/about/about'),
  exact: true,
  
},
{
  path: '/about/compatibility',
  component: ComponentCreator('/about/compatibility'),
  exact: true,
  
},
{
  path: '/about/help_project',
  component: ComponentCreator('/about/help_project'),
  exact: true,
  
},
{
  path: '/about/how_work',
  component: ComponentCreator('/about/how_work'),
  exact: true,
  
},
{
  path: '/about/supported_games',
  component: ComponentCreator('/about/supported_games'),
  exact: true,
  
},
{
  path: '/about/supported_platforms',
  component: ComponentCreator('/about/supported_platforms'),
  exact: true,
  
},
{
  path: '/advanced/command_line',
  component: ComponentCreator('/advanced/command_line'),
  exact: true,
  
},
{
  path: '/advanced/configuration',
  component: ComponentCreator('/advanced/configuration'),
  exact: true,
  
},
{
  path: '/adventureland',
  component: ComponentCreator('/adventureland'),
  exact: true,
  
},
{
  path: '/adventuresoft',
  component: ComponentCreator('/adventuresoft'),
  exact: true,
  
},
{
  path: '/animation',
  component: ComponentCreator('/animation'),
  exact: true,
  
},
{
  path: '/coktel',
  component: ComponentCreator('/coktel'),
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
  path: '/games/lucasarts',
  component: ComponentCreator('/games/lucasarts'),
  exact: true,
  
},
{
  path: '/get_games',
  component: ComponentCreator('/get_games'),
  exact: true,
  
},
{
  path: '/humongous',
  component: ComponentCreator('/humongous'),
  exact: true,
  
},
{
  path: '/installation/raspberrypi',
  component: ComponentCreator('/installation/raspberrypi'),
  exact: true,
  
},
{
  path: '/living_books',
  component: ComponentCreator('/living_books'),
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
  path: '/other_games',
  component: ComponentCreator('/other_games'),
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
  path: '/revolution',
  component: ComponentCreator('/revolution'),
  exact: true,
  
},
{
  path: '/sierraAGI',
  component: ComponentCreator('/sierraAGI'),
  exact: true,
  
},
{
  path: '/sierraSCI',
  component: ComponentCreator('/sierraSCI'),
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
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
