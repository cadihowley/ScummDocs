
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
  path: '/games/lucasarts',
  component: ComponentCreator('/games/lucasarts'),
  exact: true,
  
},
{
  path: '/installation/deleted_rpi_steps',
  component: ComponentCreator('/installation/deleted_rpi_steps'),
  exact: true,
  
},
{
  path: '/installation/raspberrypi',
  component: ComponentCreator('/installation/raspberrypi'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
