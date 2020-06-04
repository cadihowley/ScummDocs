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
            },
				{
				to: 'installation/raspberrypi',
				activeBasePath: 'intallation',          
				label: 'Installation',
				position: 'left',
            },

			   {
				to: 'games/lucasarts',
				activeBasePath: 'games',          
				label: 'Games',
				position: 'left',
            },

				{
				to: 'advanced/command_line',
				activeBasePath: 'advanced',          
				label: 'Advanced',
				position: 'left',
            
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
