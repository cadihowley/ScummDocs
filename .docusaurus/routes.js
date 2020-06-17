
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/ScummDocs/',
  component: ComponentCreator('/ScummDocs/'),
  exact: true,
  
},
{
  path: '/ScummDocs/',
  component: ComponentCreator('/ScummDocs/'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog',
  component: ComponentCreator('/ScummDocs/blog'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/hello-world',
  component: ComponentCreator('/ScummDocs/blog/hello-world'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/hola',
  component: ComponentCreator('/ScummDocs/blog/hola'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/tags',
  component: ComponentCreator('/ScummDocs/blog/tags'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/tags/docusaurus',
  component: ComponentCreator('/ScummDocs/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/tags/facebook',
  component: ComponentCreator('/ScummDocs/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/tags/hello',
  component: ComponentCreator('/ScummDocs/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/tags/hola',
  component: ComponentCreator('/ScummDocs/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/ScummDocs/blog/welcome',
  component: ComponentCreator('/ScummDocs/blog/welcome'),
  exact: true,
  
},
{
  path: '/ScummDocs/:route',
  component: ComponentCreator('/ScummDocs/:route'),
  
  routes: [
{
  path: '/ScummDocs/about/about',
  component: ComponentCreator('/ScummDocs/about/about'),
  exact: true,
  
},
{
  path: '/ScummDocs/about/compatibility',
  component: ComponentCreator('/ScummDocs/about/compatibility'),
  exact: true,
  
},
{
  path: '/ScummDocs/about/help_project',
  component: ComponentCreator('/ScummDocs/about/help_project'),
  exact: true,
  
},
{
  path: '/ScummDocs/about/how_work',
  component: ComponentCreator('/ScummDocs/about/how_work'),
  exact: true,
  
},
{
  path: '/ScummDocs/about/supported_games',
  component: ComponentCreator('/ScummDocs/about/supported_games'),
  exact: true,
  
},
{
  path: '/ScummDocs/about/supported_platforms',
  component: ComponentCreator('/ScummDocs/about/supported_platforms'),
  exact: true,
  
},
{
  path: '/ScummDocs/advanced/command_line',
  component: ComponentCreator('/ScummDocs/advanced/command_line'),
  exact: true,
  
},
{
  path: '/ScummDocs/advanced/configuration',
  component: ComponentCreator('/ScummDocs/advanced/configuration'),
  exact: true,
  
},
{
  path: '/ScummDocs/games/lucasarts',
  component: ComponentCreator('/ScummDocs/games/lucasarts'),
  exact: true,
  
},
{
  path: '/ScummDocs/installation/deleted_rpi_steps',
  component: ComponentCreator('/ScummDocs/installation/deleted_rpi_steps'),
  exact: true,
  
},
{
  path: '/ScummDocs/installation/raspberrypi',
  component: ComponentCreator('/ScummDocs/installation/raspberrypi'),
  exact: true,
  
},
{
  path: '/ScummDocs/proposal',
  component: ComponentCreator('/ScummDocs/proposal'),
  exact: true,
  
},
{
  path: '/ScummDocs/using/game_settings',
  component: ComponentCreator('/ScummDocs/using/game_settings'),
  exact: true,
  
},
{
  path: '/ScummDocs/using/global_settings',
  component: ComponentCreator('/ScummDocs/using/global_settings'),
  exact: true,
  
},
{
  path: '/ScummDocs/using/keyboard',
  component: ComponentCreator('/ScummDocs/using/keyboard'),
  exact: true,
  
},
{
  path: '/ScummDocs/using/launcher',
  component: ComponentCreator('/ScummDocs/using/launcher'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
