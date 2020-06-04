module.exports = {
  title: 'ScummVM',
  tagline: 'Script Creation Utility for Maniac Mansion Virtual Machine',
  url: 'https://ScummDocs.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cadihowley', // Usually your GitHub org/user name.
  projectName: 'ScummDocs', // Usually your repo name.
  
themeConfig: {
    
	sidebarCollapsible: false,
		navbar: {
			hideOnScroll: true,
			title: 'GSOD Proposal 2020',
					logo: {
						alt: 'ScummVM Logo',
          			src: 'img/logo.svg',
      						},
			links: [
				{
				to: 'about/about',
				activeBasePath: 'about',          
				label: 'About',
				position: 'left',
				items: [{
					label: 'What is ScummVM?',
					href: 'about/about',
							},
					{
					label: 'How does it work?',
					href: 'about/how_work',
					},
					{
					label: 'Supported Games',
					href: 'about/supported_games',
					},
					{
					label: 'Supported Platforms',
					href: 'about/supported_platforms',
					},
					{
					label: 'Compatibility',
					href: 'about/compatibility',
					},
					{
					label: 'Help the Project',
					href: 'about/help_project',
					},
						]
            },

				{    
				to: 'installation/raspberrypi',
				activeBasePath: 'installation',          
				label: 'Installation',
				position: 'left',
				items: [{
					label: 'Raspberry Pi',
					href: 'installation/raspberrypi',
							},
						]
            },

			   {
				to: 'games/lucasarts',
				activeBasePath: 'games',          
				label: 'Games',
				position: 'left',
				items: [{
					label: 'LucasArts Games',
					href: 'games/lucasarts',
							},
							]
            },

				{
				to: 'advanced/command_line',
				activeBasePath: 'advanced',          
				label: 'Advanced',
				position: 'left',
				items:[
					{
					label: 'Command Line Options',
					href: 'advanced/command_line',
							},
					{
					label: 'Configuration File',
					href: 'advanced/configuration',
							},					
						]            
					},
          ],
    },
    



footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'installation/raspberrypi',
            },
            {
              label: 'Supported Games',
              to: 'about/supported_games',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/scummvm/scummvm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ScummDocs Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
 
	  routeBasePath: '/',
	  homePageId: '_index',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ScummDocs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
