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
      mediaRoot: "img",
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
            label: 'Site Settings ',
            name: 'siteSettings',
            type: 'object',
            fields: [
          { type: 'string', label: 'Site Name', name: 'siteName' },
          { type: 'string', label: 'Site Owner', name: 'siteOwner' },
          { type: 'string', label: 'Site Title', name: 'siteTitle' },
          {
            type: 'object',
            label: 'Owner Image',
            name: 'ownerImage',
            fields: [
              { type: 'image', label: 'Image', name: 'image' },
              { type: 'string', label: 'Alt Text', name: 'alt' },
            ],
          },
        ],
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
            label: 'Footer Info',
            name: 'footerInfo',
            type: 'object',
            fields: [
              {
                type: 'object',
                label: 'Information',
                name: 'information',
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Contact Info',
                name: 'info',
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Address', name: 'address' },
                  { type: 'string', label: 'Tel', name: 'tel' },
                  { type: 'string', label: 'Email', name: 'email' },
                ],
              },
              {
                type: 'object',
                label: 'Newsletter',
                name: 'newsletter',
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
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
                label: 'Sidebar Menu',
                name: 'sidebarMenu',
                type: 'object',
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'CTA', name: 'cta' },
                ],
              },
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
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'object',
            label: 'Hero Images',
            name: 'heroImages',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Item",
              }),
            },
            fields: [
              { type: 'image', label: 'Image', name: 'image' },
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
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
                fields: [
                  {
                    type: 'object',
                    label: 'Icon',
                    name: 'icon',
                    fields: [
                      { type: 'image', label: 'Light', name: 'light' },
                      { type: 'image', label: 'Dark', name: 'dark' },
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
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
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
                label: 'Counters',
                name: 'items',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
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
                label: 'Features',
                name: 'items',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
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
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Item",
              }),
            },
            fields: [
              {
                type: 'object',
                label: 'Partner List',
                name: 'items',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
                fields: [
                  { type: 'string', label: 'Partner Name', name: 'title' },
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          {
            label: 'Renovations',
            name: 'renovation',
            type: 'object',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Description', name: 'description' },
              { type: 'string', label: 'Link', name: 'link' },
              { type: 'image', label: 'Background Image', name: 'bg_image' },
              {
                type: 'object',
                label: 'Image Circle Text',
                name: 'image_circle_text',
                fields: [
                  { type: 'image', label: 'URL', name: 'url' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          {
            label: 'Estimated Price',
            name: 'estimatedPrice',
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
                  { type: 'image', label: 'URL', name: 'url' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                ],
              },
              {
                type: 'object',
                label: 'Estimated Price Form',
                name: 'estimatedPriceForm',
                fields: [
                  {
                    type: 'object',
                    label: 'Area',
                    name: 'area',
                    fields: [
                      { type: 'string', label: 'Label', name: 'label' },
                      { type: 'string', label: 'Option 1', name: 'option1' },
                      { type: 'string', label: 'Option 2', name: 'option2' },
                      { type: 'string', label: 'Option 3', name: 'option3' },
                      { type: 'string', label: 'Option 4', name: 'option4' },
                    ],
                  },
                  {
                    type: 'object',
                    label: 'Rooms',
                    name: 'rooms',
                    fields: [
                      { type: 'string', label: 'Label', name: 'label' },
                      { type: 'string', label: 'Option 1', name: 'option1' },
                      { type: 'string', label: 'Option 2', name: 'option2' },
                      { type: 'string', label: 'Option 3', name: 'option3' },
                      { type: 'string', label: 'Option 4', name: 'option4' },
                      { type: 'string', label: 'Option 5', name: 'option5' },
                      { type: 'string', label: 'Option 6', name: 'option6' },
                    ],
                  },
                  {
                    type: 'object',
                    label: 'Bathrooms',
                    name: 'bathroom',
                    fields: [
                      { type: 'string', label: 'Label', name: 'label' },
                      { type: 'string', label: 'Option 1', name: 'option1' },
                      { type: 'string', label: 'Option 2', name: 'option2' },
                      { type: 'string', label: 'Option 3', name: 'option3' },
                    ],
                  },
                  {
                    type: 'object',
                    label: 'Materials',
                    name: 'materials',
                    fields: [
                      { type: 'string', label: 'Label', name: 'label' },
                      { type: 'string', label: 'Option 1', name: 'option1' },
                      { type: 'string', label: 'Option 2', name: 'option2' },
                    ],
                  },
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
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          
          {
            label: 'About Us',
            name: 'aboutUs',
            type: 'object',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Text', name: 'text' },
              { type: 'string', label: 'List Title', name: 'listTitle' },
              {
                type: 'object',
                label: 'List Items',
                name: 'items',
                ui: {
                  itemProps: (item) => ({
                    label: item?.name || "New Item",
                  }),
                },
                fields: [
                  { type: 'string', label: 'List Item 1', name: 'listText1' },
                  { type: 'string', label: 'List Item 2', name: 'listText2' },
                  { type: 'string', label: 'List Item 3', name: 'listText3' },
                  { type: 'string', label: 'List Item 4', name: 'listText4' },
                  { type: 'string', label: 'List Item 5', name: 'listText5' },
                ],
              },
            ],
          },

          {
            label: 'History',
            name: 'history',
            type: 'object',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              {
                type: 'object',
                label: 'Slide 1',
                name: 'slide1',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Slide 2',
                name: 'slide2',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Slide 3',
                name: 'slide3',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Slide 4',
                name: 'slide4',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Slide 5',
                name: 'slide5',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
              {
                type: 'object',
                label: 'Slide 6',
                name: 'slide6',
                fields: [
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt Text', name: 'alt' },
                  { type: 'string', label: 'Year', name: 'year' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
            ],
          },
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
          { type: 'string', label: 'Title', name: 'title', isTitle: true, required: true },
          { type: 'image', label: 'Image', name: 'image' },
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
                  { type: 'image', label: 'Image', name: 'image' },
                  { type: 'string', label: 'Alt', name: 'alt' },
                ],
              },
            ],
          },
          { type: 'rich-text', label: 'Body', name: 'body', isBody: true },
        ],
      },



      {
        label: 'Services',
        name: 'services',
        path: 'content/services',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'object',
            label: 'Our Services',
            name: 'ourServices',
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Item",
              }),
            },
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              {
                type: 'object',
                label: 'Service 1',
                name: 'item1',
                fields: [
                  { type: 'string', label: 'Service Name', name: 'serviceName' },
                  { type: 'string', label: 'Description', name: 'description' },
                  {
                    type: 'object',
                    label: 'Image',
                    name: 'img',
                    fields: [
                      { type: 'image', label: 'Image URL', name: 'url' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                ],
                
              },
              {
                type: 'object',
                label: 'Service 2',
                name: 'item2',
                fields: [
                  { type: 'string', label: 'Service Name', name: 'serviceName' },
                  { type: 'string', label: 'Description', name: 'description' },
                  {
                    type: 'object',
                    label: 'Image',
                    name: 'img',
                    fields: [
                      { type: 'image', label: 'Image URL', name: 'url' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                label: 'Service 3',
                name: 'item3',
                fields: [
                  { type: 'string', label: 'Service Name', name: 'serviceName' },
                  { type: 'string', label: 'Description', name: 'description' },
                  {
                    type: 'object',
                    label: 'Image',
                    name: 'img',
                    fields: [
                      { type: 'image', label: 'Image URL', name: 'url' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                label: 'Service 4',
                name: 'item4',
                fields: [
                  { type: 'string', label: 'Service Name', name: 'serviceName' },
                  { type: 'string', label: 'Description', name: 'description' },
                  {
                    type: 'object',
                    label: 'Image',
                    name: 'img',
                    fields: [
                      { type: 'image', label: 'Image URL', name: 'url' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                label: 'Service 5',
                name: 'item5',
                fields: [
                  { type: 'string', label: 'Service Name', name: 'serviceName' },
                  { type: 'string', label: 'Description', name: 'description' },
                  {
                    type: 'object',
                    label: 'Image',
                    name: 'img',
                    fields: [
                      { type: 'image', label: 'Image URL', name: 'url' },
                      { type: 'string', label: 'Alt', name: 'alt' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            label: 'Additional Services',
            name: 'additionalServices',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
            ],
          },
          {
            type: 'object',
            label: 'Contact Form',
            name: 'contactSubject',
            fields: [
              { type: 'image', label: 'Background Image', name: 'bg_image' },
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subject 1', name: 'subject1' },
              { type: 'string', label: 'Subject 2', name: 'subject2' },
              { type: 'string', label: 'Subject 3', name: 'subject3' },
              { type: 'string', label: 'Subject 4', name: 'subject4' },
            ],
          },
        ],
      },

      {
        label: "Contact",
        name: "contact",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          
          {
            label: 'Contact Form',
            name: 'contactForm',
            type: 'object',
            fields: [
              { type: 'string', label: 'Title', name: 'title' },
              { type: 'string', label: 'Subtitle', name: 'subtitle' },
              { type: 'string', label: 'Text', name: 'text' },
            ],
          },
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
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "New Item",
                  }),
                },
                fields: [
                  { type: 'string', label: 'Title', name: 'title' },
                  { type: 'string', label: 'Text', name: 'text' },
                ],
              },
            ],
          },   
          {
            label: 'Contact Map',
            name: 'contactMap',
            type: 'object',
            fields: [
              { type: 'string', label: 'Map URL', name: 'url' },
            ],
          },      
        ],
      },
       

      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
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
      },    

    



    ],
  },
});
