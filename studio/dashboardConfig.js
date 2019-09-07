export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d7439cc55efc0848ba77299',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7qxtcuk2',
                  apiId: '12146b4c-a347-431a-8ce8-ba2bcaca74c9'
                },
                {
                  buildHookId: '5d7439ccc5bdeb4096162089',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-47fkt3v5',
                  apiId: '535aaee9-cbc6-48a1-9027-051d952d0f40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gyfchong/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-47fkt3v5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
