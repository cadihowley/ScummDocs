export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "sidebarCollapsible": false,
    "navbar": {
      "hideOnScroll": true,
      "title": "GSOD 2020",
      "logo": {
        "alt": "ScummVM Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "installation/raspberrypi",
          "activeBasePath": "intallation",
          "label": "Installing ScummVM",
          "position": "left"
        },
        {
          "to": "using/launcher",
          "activeBasePath": "using",
          "label": "Using ScummVM",
          "position": "left"
        },
        {
          "to": "advanced/command_line",
          "activeBasePath": "advanced",
          "label": "Advanced options",
          "position": "left"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Installation",
              "to": "installation/raspberrypi"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/scummvm/scummvm"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 ScummDocs Built with Docusaurus."
    }
  },
  "title": "ScummVM",
  "tagline": "Script Creation Utility for Maniac Mansion Virtual Machine",
  "url": "https://cadihowley.github.io/",
  "baseUrl": "/ScummDocs/",
  "favicon": "img/favicon.ico",
  "organizationName": "cadihowley",
  "projectName": "ScummDocs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "homePageId": "proposal",
          "sidebarPath": "/home/pi/ScummDocs/sidebars.js",
          "editUrl": "https://github.com/ScummDocs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/pi/ScummDocs/src/css/custom.css"
        }
      }
    ]
  ]
};