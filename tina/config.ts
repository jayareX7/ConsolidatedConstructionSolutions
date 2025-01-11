import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Site Settings',
        name: 'settings',
        path: 'content/settings',
        format: 'json',
        fields: [
          {
            type: 'object',
            label: 'Site Name',
            name: 'siteSettings',
          fields:[{ type: 'string', label: 'Name of Site', name: 'siteName' },],
          
          },
          {
            label: 'Preloader Image ',
            name: 'preloader',
            type: 'object',
            fields: [
              { type: 'image', label: 'Preloader Image URL', name: 'image' },
              { type: 'string', label: 'Alt', name: 'alt' },
            ],
          },
        

          {
            label: 'Company Logo',
            name: 'companyLogo',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Logo',
                name: 'logo',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },

          {
            label: 'Company Info',
            name: 'companyInfo',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Contact Information',
                name: 'info',
                fields: [
                  { type: 'string', label: 'Address', name: 'address' },
                  { type: 'string', label: 'Tel', name: 'tel' },
                  { type: 'string', label: 'Email', name: 'email' },
                ],
              },
              { type: 'string', label: 'Copy', name: 'copy' },
            ],
          },

         
          {
            type: 'object',
            label: 'Navigation Links',
            name: 'header',
            fields: [
              {
                type: 'object',
                label: 'Menu',
                name: 'menu',
                list: true,            ui: {
                  itemProps: (item) => ({
                    label: item?.label || "New Item",
                  }),
                },
                fields: [
                  { type: 'string', label: 'Label', name: 'label' },
                  { type: 'string', label: 'Link', name: 'link' },
                  { type: 'number', label: 'Children', name: 'children' },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Company Social Media Accounts",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Item",
              }),
            },
            fields: [
              {
                type: "string",
                label: "Title",
                name: "title",
              },
              { type: "string", label: "URL ", name: "link" },
            ],
          },
          {
            label: 'Formspree URL',
            name: 'formspreeURL',
            type: 'object',
            fields: [
              { type: 'string', label: 'Formspree URL', name: 'formspreeURL' },
            ],
          },
          {
            label: 'Mailchimp',
            name: 'mailchimp',
            type: 'object',
            fields: [
              { type: 'string', label: 'URL', name: 'url' },
              { type: 'string', label: 'Key', name: 'key' },
            ],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },


    
 
      {
        label: "Homepage",
        name: "homepage",
        path: "content/homepage",
        format: "json",
        fields: [
          {
            label: 'Hero Images',
            name: 'heroImages',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Hero Images',
                name: 'heroImages',
                list: true,
                fields: [
                  { type: 'string', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                  {
                    type: 'object',
                    label: 'Button',
                    name: 'button',
                    fields: [
                      { type: 'string', label: 'Label', name: 'label' },
                      { type: 'string', label: 'Link', name: 'link' },
                    ],
                  },
                ],
              },
            ],
          },

          {
            type: "object",
            label: "About Section One",
            name: "aboutSection1",
            fields: [
              {
                type: "object",
                label: "Image One",
                name: "image1",
                fields: [{ type: "image", label: "Image URL", name: "url" }],
              },

              {
                type: "object",
                label: "Image Two",
                name: "image2",
                fields: [{ type: "image", label: "Image URL", name: "url" }],
              },

              {
                type: "string",
                label: "Section Title",
                name: "title",
              },
              {
                type: "string",
                label: "Subtitle",
                name: "subtitle",
              },
              {
                type: "string",
                label: "Text",
                name: "text",
              },

              {
                type: "object",
                label: "Signature",
                name: "signature",
                fields: [
                  { type: "image", label: "Light Mode Image", name: "light" },
                  { type: "image", label: "Dark Mode Image", name: "dark" },
                ],
              },
            ],
          },


          {
            label: 'Process',
            name: 'process',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  {
                    type: 'object',
                    label: 'Icon',
                    name: 'icon',
                    fields: [
                      { type: 'string', label: 'Light', name: 'light' },
                      { type: 'string', label: 'Dark', name: 'dark' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                  { type: 'string', label: 'Link', name: 'link' },
                ],
              },
            ],
          },

          {
            type: "object",
            label: "About Section Two",
            name: "aboutSection2",
            
            fields: [
              {
                type: "string",
                label: "Section Title",
                name: "title",
              },
              {
                type: "string",
                label: "Subtitle",
                name: "subtitle",
              },

              {
                type: "object",
                label: "Image",
                name: "image",
                fields: [{ type: "image", label: "Image URL", name: "url" }],
              },

              {
                type: "object",
                label: "Rotating Image",
                name: "image_text_rotate",
                fields: [{ type: "image", label: "Image URL", name: "url" }],
              },

              {
                type: "object",
                label: "Descriptions",
                name: "items",
                list: true,
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  {
                    type: "string",
                    label: "Text",
                    name: "text",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },

          {
            label: 'Counters',
            name: 'counters',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Value', name: 'value' },
                  { type: 'string', label: 'Label', name: 'label' },
                  { type: 'boolean', label: 'Plus', name: 'plus' },
                  { type: 'string', label: 'Title', name: 'title' },
                ],
              },
            ],
          },

          {
            label: 'Project List',
            name: 'projectList',
            type: 'object',
            fields: [
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'number', label: 'Number of Items', name: 'numOfItems' },
            ],
          },
          {
            label: 'Features',
            name: 'features',
            type: 'object',
            fields: [
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'YouTube Video ID', name: 'yt_video_id' },
              {
                type: 'object',
                label: 'Image',
                name: 'image',
                fields: [
                  { type: 'string', label: 'URL', name: 'url' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Number', name: 'num' },
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Partners',
            name: 'partners',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          {
            label: 'Renovation',
            name: 'renovation',
            type: 'object',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Description', name: 'description' },
              { type: 'string', label: 'Link', name: 'link' },
              { type: 'string', label: 'Background Image', name: 'bg_image' },
              {
                type: 'object',
                label: 'Image Circle Text',
                name: 'image_circle_text',
                fields: [
                  { type: 'string', label: 'URL', name: 'url' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          {
            label: 'Estimate Price',
            name: 'estimatePrice',
            type: 'object',
            fields: [
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Description', name: 'description' },
              {
                type: 'object',
                label: 'Image',
                name: 'image',
                fields: [
                  { type: 'string', label: 'URL', name: 'url' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },

        ],
      },     


      {
        label: "About Us",
        name: "about",
        path: "content/about",
        format: "json",
        fields: [
          

                {
                  label: 'Team',
                  name: 'team',
                  type: 'object',
                  fields: [
                    { type: 'string', label: 'Subtitle', name: 'subtitle' },
                    { type: 'string', label: 'Title', name: 'title' },
                    {
                      type: 'object',
                      label: 'Team Member',
                      name: 'items',
                      list: true,
                      ui: {
                        itemProps: (item) => ({
                          label: item?.name || "New Item",
                        }),
                      },
                      fields: [
                        { type: 'image', label: 'Image', name: 'image' },
                        { type: 'string', label: 'Name', name: 'name' },
                        { type: 'string', label: 'Role', name: 'role' },
                        {
                          type: 'object',
                          label: 'Social',
                          name: 'social',
                          list: true,
                          ui: {
                            itemProps: (item) => ({
                              label: item?.title || "New Item",
                            }),
                          },
                          fields: [
                            { type: 'string', label: 'Link', name: 'link' },
                            { type: 'string', label: 'Icon', name: 'icon' },
                            { type: 'string', label: 'Title', name: 'title' },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Testimonial',
                  name: 'testimonial',
                  type: "object",
                  ui: {
                    itemProps: (item) => ({
                      label: item?.label || "New Item",
                    }),
                  },
                  fields: [
                    { type: 'string', label: 'Subtitle', name: 'subtitle' },
                    { type: 'string', label: 'Title', name: 'title' },
                    {
                      type: 'object',
                      label: 'Image',
                      name: 'image',
                      fields: [
                        { type: 'image', label: 'Image URL', name: 'url' },
                        { type: 'string', label: 'Alt', name: 'alt' },
                      ],
                    },
                    {
                      type: 'object',
                      label: 'Client Name',
                      name: 'items',
                      ui: {
                        itemProps: (item) => ({
                          label: item?.name || "New Item",
                        }),
                      },
                      list: true,
                      fields: [
                        { type: 'string', label: 'Name', name: 'name' },
                        { type: 'string', label: 'Role', name: 'role' },
                        { type: 'string', label: 'Text', name: 'text' },
                      ],
                    },
                  ],
                },
         
                {
                  label: 'Partners',
                  name: 'partners',
                  type: 'object',
                  fields: [
                    {
                      type: 'object',
                      label: 'Partner Images',
                      name: 'items',
                      list: true,
                      ui: {
                        itemProps: (item) => ({
                          label: item?.image || "New Item",
                        }),
                      },
                      fields: [
                        { type: 'image', label: 'Image URL', name: 'image' },
                        { type: 'string', label: 'Alt', name: 'alt' },
                      ],
                    },
                  ],
                },


                 {
            type: "object",
            label: "Call To Action",
            name: "CTA",
                  fields: [
                    { type: 'string', label: 'Title', name: 'title' },
                    { type: 'string', label: 'Description', name: 'description' },
                    {
                      type: 'object',
                      label: 'Image',
                      name: 'image',
                      fields: [
                        { type: 'image', label: 'Image URL', name: 'url' },
                        { type: 'string', label: 'Alt', name: 'alt' },
                      ],
                    },
                    {
                      type: 'object',
                      label: 'Button',
                      name: 'button',
                      fields: [
                        { type: 'string', label: 'Link', name: 'link' },
                        { type: 'string', label: 'Label', name: 'label' },
                      ],
                    },
                  ],
                },

        ],
      },


      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          { type: 'string', label: 'Title', name: 'title' },
          { type: 'string', label: 'Image', name: 'image' },
          { type: 'string', label: 'Short Description', name: 'short' },
          { type: 'string', label: 'Location', name: 'location' },
          { type: 'string', label: 'Dates', name: 'dates' },
          {
            type: 'object',
            label: 'Checklist',
            name: 'checklist',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              {
                type: 'string',
                label: 'Items',
                name: 'items',
                list: true,
              },
            ],
          },
          {
            type: 'object',
            label: 'Details',
            name: 'details',
            fields: [
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Label', name: 'label' },
                  { type: 'string', label: 'Value', name: 'value' },
                  { type: 'string', label: 'Icon', name: 'icon' },
                ],
              },
            ],
          },
          {
            type: 'object',
            label: 'Slider',
            name: 'slider',
            fields: [
              {
                type: 'object',
                label: 'Items',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          { type: 'rich-text', label: 'Body', name: 'body', isBody: true },
        ],
      },



      {
        name: "services",
        label: "Services",
        path: "content/services",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "short",
            label: "Short Description",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Service Icon Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },


      {
        label: "Contact",
        name: "contact",
        path: "content/contact",
        format: "json",
        fields: [

          {
            label: 'FAQ',
            name: 'faq',
            type: 'object',
            fields: [
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Title', name: 'title' },
              {
                type: 'object',
                label: 'Question',
                name: 'items',
                list: true,
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
            ],
          },          
        ],
      },
       

      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },    

    



    ],
  },
});
