
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
  path: '/about',
  component: ComponentCreator('/about'),
  exact: true,
  
},
{
  path: '/activision',
  component: ComponentCreator('/activision'),
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
  path: '/command_line',
  component: ComponentCreator('/command_line'),
  exact: true,
  
},
{
  path: '/common_controls',
  component: ComponentCreator('/common_controls'),
  exact: true,
  
},
{
  path: '/compatibility',
  component: ComponentCreator('/compatibility'),
  exact: true,
  
},
{
  path: '/configuration',
  component: ComponentCreator('/configuration'),
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
  path: '/get_games',
  component: ComponentCreator('/get_games'),
  exact: true,
  
},
{
  path: '/help_project',
  component: ComponentCreator('/help_project'),
  exact: true,
  
},
{
  path: '/how_work',
  component: ComponentCreator('/how_work'),
  exact: true,
  
},
{
  path: '/humongous',
  component: ComponentCreator('/humongous'),
  exact: true,
  
},
{
  path: '/living_books',
  component: ComponentCreator('/living_books'),
  exact: true,
  
},
{
  path: '/lucasarts',
  component: ComponentCreator('/lucasarts'),
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
  path: '/raspberrypi',
  component: ComponentCreator('/raspberrypi'),
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
  path: '/supported_games',
  component: ComponentCreator('/supported_games'),
  exact: true,
  
},
{
  path: '/supported_platforms',
  component: ComponentCreator('/supported_platforms'),
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
