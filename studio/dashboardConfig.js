export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621635d613478a40429f471d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wt3q9z3k',
                  apiId: 'e50e0363-cde6-4bfc-8423-7e717cb0ebdf'
                },
                {
                  buildHookId: '621635d52c163e3f810177ae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-svk62eix',
                  apiId: '6e679394-a6f5-42c5-a09b-4b47e3753f7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/congnguyendinh0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-svk62eix.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
