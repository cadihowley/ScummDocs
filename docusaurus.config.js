module.exports = {
  title: 'ScummVM',
  tagline: 'Script Creation Utility for Maniac Mansion Virtual Machine',
  url: 'https://cadihowley.github.io/',
  baseUrl: '/ScummDocs/',
  favicon: 'img/favicon.ico',
  organizationName: 'cadihowley', // Usually your GitHub org/user name.
  projectName: 'ScummDocs', // Usually your repo name.
  
themeConfig: {
    
	sidebarCollapsible: false,
		navbar: {
			hideOnScroll: true,
			title: 'GSOD 2020',
					logo: {
						alt: 'ScummVM Logo',
          			src: 'img/logo.svg',
      						},
			links: [
				
				{
				to: 'installation/raspberrypi',
				activeBasePath: 'intallation',          
				label: 'Installing ScummVM',
				position: 'left',
            },

{
				to: 'using/launcher',
				activeBasePath: 'using',          
				label: 'Using ScummVM',
				position: 'left',
            },

				{
				to: 'advanced/command_line',
				activeBasePath: 'advanced',          
				label: 'Advanced options',
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
	 homePageId: 'proposal',
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
