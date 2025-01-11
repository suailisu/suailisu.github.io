// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-alfo",
    title: "ALFO",
    section: "导航",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-人在楼上",
          title: "人在楼上",
          description: "",
          section: "导航",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-2025-新年好",
      
        title: "2025 新年好",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%AF%BF%E5%8D%97%E5%B1%B1/2025/happy-new-year/";
        
      },
    },{id: "post-简易税务计算器",
      
        title: "简易税务计算器",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E6%8E%B7%E9%87%91%E9%92%B1/2024/tax-calculator/";
        
      },
    },{id: "post-2024年投资回顾与展望",
      
        title: "2024年投资回顾与展望",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E6%8E%B7%E9%87%91%E9%92%B1/2024/investment-lookback-and-outlook/";
        
      },
    },{id: "post-美国-fica-税详解",
      
        title: "美国 FICA 税详解",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E6%8E%B7%E9%87%91%E9%92%B1/2024/what-is-fica/";
        
      },
    },{id: "post-美国税收优惠投资账户总结",
      
        title: "美国税收优惠投资账户总结",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E6%8E%B7%E9%87%91%E9%92%B1/2024/tax-advantaged-accounts-in-us/";
        
      },
    },{id: "post-买鞋记",
      
        title: "买鞋记",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%8F%A8%E5%8F%A8%E4%BB%A4/2024/shoes/";
        
      },
    },{id: "post-悠闲假日",
      
        title: "悠闲假日",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%A5%BD%E6%97%B6%E5%85%89/2024/holiday/";
        
      },
    },{id: "post-东京游记",
      
        title: "东京游记",
      
      description: "在东京铁塔（对面）第一次眺望",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%BF%86%E6%97%A7%E6%B8%B8/2024/Tokyo/";
        
      },
    },{id: "post-山城重庆-重游",
      
        title: "山城重庆 - 重游",
      
      description: "让人走到脚痛的8D城市",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%BF%86%E6%97%A7%E6%B8%B8/2023/Chongqing/";
        
      },
    },{id: "post-爽爽贵阳-真的爽",
      
        title: "爽爽贵阳 - 真的爽",
      
      description: "离开贵阳想贵阳",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%BF%86%E6%97%A7%E6%B8%B8/2023/Guiyang/";
        
      },
    },{id: "post-长沙",
      
        title: "长沙",
      
      description: "长沙的“长”也是长久的“长”",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%BF%86%E6%97%A7%E6%B8%B8/2023/Changsha/";
        
      },
    },{id: "books-从零开始的女性主义",
          title: '从零开始的女性主义',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
