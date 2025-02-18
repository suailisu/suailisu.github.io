// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-粟爱力酥",
    title: "粟爱力酥",
    section: "导航",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-乐府周刊",
          title: "乐府周刊",
          description: "",
          section: "导航",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-人在楼上",
          title: "人在楼上",
          description: "",
          section: "导航",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-字字锦",
              title: "字字锦",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-苏幕遮",
              title: "苏幕遮",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-我的赛博编年史",
      
        title: "我的赛博编年史",
      
      description: "",
      section: "文章",
      handler: () => {
        
          window.location.href = "/blog/%E5%8F%A8%E5%8F%A8%E4%BB%A4/2025/the-internet/";
        
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
            },},{id: "books-人间值得",
          title: '人间值得',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BA%BA%E9%97%B4%E5%80%BC%E5%BE%97/";
            },},{id: "movies-罗马假日",
          title: '罗马假日',
          description: "初中音乐课上播的，对我来说像古董一样……",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BD%97%E9%A9%AC%E5%81%87%E6%97%A5/";
            },},{id: "movies-天空之城",
          title: '天空之城',
          description: "一点儿印象也没有了的宫崎骏古董代表作之一，曲子出名。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E/";
            },},{id: "movies-霸王别姬",
          title: '霸王别姬',
          description: "应该是我看过的第一部同性片，还是高中一次历史课上老师放给我们看的，当时看完的感受就是精彩、震撼。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9C%B8%E7%8E%8B%E5%88%AB%E5%A7%AC/";
            },},{id: "movies-辛德勒的名单",
          title: '辛德勒的名单',
          description: "初中音乐课上播的，记得全片黑白只有一个小女孩的衣服是红色的。意义大于内容吧，反对战争，珍爱和平。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BE%9B%E5%BE%B7%E5%8B%92%E7%9A%84%E5%90%8D%E5%8D%95/";
            },},{id: "movies-狮子王",
          title: '狮子王',
          description: "经典古董。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%8B%AE%E5%AD%90%E7%8E%8B/";
            },},{id: "movies-活着",
          title: '活着',
          description: "有时候，活着是一种特权。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B4%BB%E7%9D%80/";
            },},{id: "movies-阿甘正传",
          title: '阿甘正传',
          description: "好美好甜的美国梦，一个似乎仅凭借天赋和运气就可以顺遂的人生。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%98%BF%E7%94%98%E6%AD%A3%E4%BC%A0/";
            },},{id: "movies-大话西游之月光宝盒",
          title: '大话西游之月光宝盒',
          description: "对周星驰的电影的印象就是屎尿屁、浮夸杂乱、令我头疼。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8%E4%B9%8B%E6%9C%88%E5%85%89%E5%AE%9D%E7%9B%92/";
            },},{id: "movies-大话西游之大圣娶亲",
          title: '大话西游之大圣娶亲',
          description: "印象中似乎一些台词和剧照广为流传，当时被朱茵的剧照吸引去看的。没看明白什么，不懂被吹捧的原因，只记得朱茵美翻了。现在想来大概是因为受众是“压抑啊”“苦啊”“愤怒啊”的“男人”们吧（笑）。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8%E4%B9%8B%E5%A4%A7%E5%9C%A3%E5%A8%B6%E4%BA%B2/";
            },},{id: "movies-美丽人生",
          title: '美丽人生',
          description: "名垂千古。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BE%8E%E4%B8%BD%E4%BA%BA%E7%94%9F/";
            },},{id: "movies-楚门的世界",
          title: '楚门的世界',
          description: "神作，颠覆认知、突破想象，而这竟是1998年的电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%A5%9A%E9%97%A8%E7%9A%84%E4%B8%96%E7%95%8C/";
            },},{id: "movies-菊次郎的夏天",
          title: '菊次郎的夏天',
          description: "剧情一般，喜欢摄影和主题曲，好有夏天的感觉啊！",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%8F%8A%E6%AC%A1%E9%83%8E%E7%9A%84%E5%A4%8F%E5%A4%A9/";
            },},{id: "movies-西西里的美丽传说",
          title: '西西里的美丽传说',
          description: "原来一个未成年男的的意淫都可以拍成100多分钟的电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%A5%BF%E8%A5%BF%E9%87%8C%E7%9A%84%E7%BE%8E%E4%B8%BD%E4%BC%A0%E8%AF%B4/";
            },},{id: "movies-千与千寻",
          title: '千与千寻',
          description: "一部我不是很理解为什么如此高分的电影（也许是因为比较奇幻吧），不过画风不错。小时候看的时候真的有被汤婆婆吓到。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB/";
            },},{id: "movies-美丽心灵",
          title: '美丽心灵',
          description: "记不得内容了...致敬天才。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BE%8E%E4%B8%BD%E5%BF%83%E7%81%B5/";
            },},{id: "movies-放牛班的春天",
          title: '放牛班的春天',
          description: "说实话不记得什么了，大概还不错吧...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%94%BE%E7%89%9B%E7%8F%AD%E7%9A%84%E6%98%A5%E5%A4%A9/";
            },},{id: "movies-指匠情挑",
          title: '指匠情挑',
          description: "难以超越的顶级剧集。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%8C%87%E5%8C%A0%E6%83%85%E6%8C%91/";
            },},{id: "movies-查理和巧克力工厂",
          title: '查理和巧克力工厂',
          description: "初中时候看的，儿童电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9F%A5%E7%90%86%E5%92%8C%E5%B7%A7%E5%85%8B%E5%8A%9B%E5%B7%A5%E5%8E%82/";
            },},{id: "movies-武林外传",
          title: '武林外传',
          description: "童年时期为之着迷，至今仍未确定自己是否看完了全集。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%AD%A6%E6%9E%97%E5%A4%96%E4%BC%A0/";
            },},{id: "movies-假如爱有天意",
          title: '假如爱有天意',
          description: "小时候看的时候挺感动的，喜欢主题曲。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%81%87%E5%A6%82%E7%88%B1%E6%9C%89%E5%A4%A9%E6%84%8F/";
            },},{id: "movies-被嫌弃的松子的一生",
          title: '被嫌弃的松子的一生',
          description: "不理解。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%A2%AB%E5%AB%8C%E5%BC%83%E7%9A%84%E6%9D%BE%E5%AD%90%E7%9A%84%E4%B8%80%E7%94%9F/";
            },},{id: "movies-穿越时空的少女",
          title: '穿越时空的少女',
          description: "初中时候看的，那个时候这种题材对我来说有点儿新颖。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%A9%BF%E8%B6%8A%E6%97%B6%E7%A9%BA%E7%9A%84%E5%B0%91%E5%A5%B3/";
            },},{id: "movies-红辣椒",
          title: '红辣椒',
          description: "没怎么看懂，但是脑洞很大、很精彩。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BA%A2%E8%BE%A3%E6%A4%92/";
            },},{id: "movies-当幸福来敲门",
          title: '当幸福来敲门',
          description: "挺励志的，听说老家的县中很爱放这个。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BD%93%E5%B9%B8%E7%A6%8F%E6%9D%A5%E6%95%B2%E9%97%A8/";
            },},{id: "movies-追风筝的人",
          title: '追风筝的人',
          description: "关于阶级、战争、人性的电影，给年幼的我带来的冲击还是挺大的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BF%BD%E9%A3%8E%E7%AD%9D%E7%9A%84%E4%BA%BA/";
            },},{id: "movies-机器人总动员",
          title: '机器人总动员',
          description: "又一部被“总动员”式命名残害的佳作，听起来像是什么中二的大动作战争片，实则是搞笑且温情的科幻动画片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%80%BB%E5%8A%A8%E5%91%98/";
            },},{id: "movies-三傻大闹宝莱坞",
          title: '三傻大闹宝莱坞',
          description: "一部被译名耽误了的印度电影，结局十分反转且励志，年轻时喜欢。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%89%E5%82%BB%E5%A4%A7%E9%97%B9%E5%AE%9D%E8%8E%B1%E5%9D%9E/";
            },},{id: "movies-神偷奶爸",
          title: '神偷奶爸',
          description: "想看看小黄人的出处来看的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%A5%9E%E5%81%B7%E5%A5%B6%E7%88%B8/";
            },},{id: "movies-怦然心动",
          title: '怦然心动',
          description: "我上初高中时广为流传的神作，一个高中秋游的日子在大巴车上看完的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8/";
            },},{id: "movies-让子弹飞",
          title: '让子弹飞',
          description: "初中历史课上老师放的，没看明白一点儿。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%AE%A9%E5%AD%90%E5%BC%B9%E9%A3%9E/";
            },},{id: "movies-哈利-波特-1-8部",
          title: '哈利·波特（1-8部）',
          description: "魔法世界的大门从此打开。 哈利·波特与魔法石 哈利·波特与密室 哈利·波特与阿兹卡班的囚徒 哈利·波特与火焰杯 哈利·波特与凤凰社 哈利·波特与混血王子 哈利·波特与死亡圣器(上) 哈利·波特与死亡圣器(下)",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9/";
            },},{id: "movies-那些年-我们一起追的女孩",
          title: '那些年，我们一起追的女孩',
          description: "也许是当时狠狠收割初中生的电影。时至今日，我依然不懂标题里的“一起追”是什么意思。建议以后这种打着“青春”旗号的厌女+男凝电影注明“青春（男）”。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%82%A3%E4%BA%9B%E5%B9%B4-%E6%88%91%E4%BB%AC%E4%B8%80%E8%B5%B7%E8%BF%BD%E7%9A%84%E5%A5%B3%E5%AD%A9/";
            },},{id: "movies-初恋这件小事",
          title: '初恋这件小事',
          description: "收割初中生的泰国“青春”片，我也是初中时看的...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%88%9D%E6%81%8B%E8%BF%99%E4%BB%B6%E5%B0%8F%E4%BA%8B/";
            },},{id: "movies-了不起的盖茨比",
          title: '了不起的盖茨比',
          description: "美版《小时代》。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E7%9B%96%E8%8C%A8%E6%AF%94/";
            },},{id: "movies-起风了",
          title: '起风了',
          description: "“起风了，唯有努力生存。”这句话曾经鼓励过我很长一段时间。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%B5%B7%E9%A3%8E%E4%BA%86/";
            },},{id: "movies-素媛",
          title: '素媛',
          description: "小时候看的，到现在还记得“最孤独的人最亲切，受过伤的人笑得最灿烂。”",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%B4%A0%E5%AA%9B/";
            },},{id: "movies-冰雪奇缘",
          title: '冰雪奇缘',
          description: "看之前：这也有人嗑？ 看之后：我嗑。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%86%B0%E9%9B%AA%E5%A5%87%E7%BC%98/";
            },},{id: "movies-星际穿越",
          title: '星际穿越',
          description: "神作，成为我后来评判科幻片的基准。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%98%9F%E9%99%85%E7%A9%BF%E8%B6%8A/";
            },},{id: "movies-火星救援",
          title: '火星救援',
          description: "高中时候在学校看的，挺无聊的一个灾难片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%81%AB%E6%98%9F%E6%95%91%E6%8F%B4/";
            },},{id: "movies-头脑特工队",
          title: '头脑特工队',
          description: "喜欢一些有创意和想象力、幽默且有意义的作品。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%B4%E8%84%91%E7%89%B9%E5%B7%A5%E9%98%9F/";
            },},{id: "movies-疯狂动物城",
          title: '疯狂动物城',
          description: "神作，幽默可爱。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E/";
            },},{id: "movies-最好的我们",
          title: '最好的我们',
          description: "时常怀疑拍“青春片”的人到底上没上过高中。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%80%E5%A5%BD%E7%9A%84%E6%88%91%E4%BB%AC/";
            },},{id: "movies-大鱼海棠",
          title: '大鱼海棠',
          description: "当时很火，歌也很火。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0/";
            },},{id: "movies-你的名字",
          title: '你的名字。',
          description: "新海诚式除了画风和穿越以外乏善可陈的青春男女爱情动画片系列作品之一。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97/";
            },},{id: "movies-摔跤吧-爸爸",
          title: '摔跤吧！爸爸',
          description: "印度家挺励志片，热血、感动。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%91%94%E8%B7%A4%E5%90%A7-%E7%88%B8%E7%88%B8/";
            },},{id: "movies-侧耳倾听",
          title: '侧耳倾听',
          description: "一点儿印象也没有了的宫崎骏古董代表作之一。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BE%A7%E8%80%B3%E5%80%BE%E5%90%AC/";
            },},{id: "movies-神探夏洛克-1-4季",
          title: '神探夏洛克（1-4季）',
          description: "还是很有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%A5%9E%E6%8E%A2%E5%A4%8F%E6%B4%9B%E5%85%8B/";
            },},{id: "movies-二十二",
          title: '二十二',
          description: "关于“慰安妇”的纪录片，意义大于内容。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BA%8C%E5%8D%81%E4%BA%8C/";
            },},{id: "movies-天才枪手",
          title: '天才枪手',
          description: "本科的时候和室友去看的，挺赤激的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A9%E6%89%8D%E6%9E%AA%E6%89%8B/";
            },},{id: "movies-寻梦环游记",
          title: '寻梦环游记',
          description: "神作，愿意 N 刷的电影。想象力一流，画面配乐绝佳。“死亡不是生命的终点，遗忘才是”，温情、幽默又有转折的剧情，别具一格的想象和令人耳目一新的设定，堪称教科书级别的动画电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%AF%BB%E6%A2%A6%E7%8E%AF%E6%B8%B8%E8%AE%B0/";
            },},{id: "movies-神秘巨星",
          title: '神秘巨星',
          description: "类似但不如《摔跤吧爸爸》。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%A5%9E%E7%A7%98%E5%B7%A8%E6%98%9F/";
            },},{id: "movies-牵牛花与加濑同学",
          title: '牵牛花与加濑同学。',
          description: "还不错的真百合。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%89%B5%E7%89%9B%E8%8A%B1%E4%B8%8E%E5%8A%A0%E6%BF%91%E5%90%8C%E5%AD%A6/";
            },},{id: "movies-生活大爆炸-1-12季",
          title: '生活大爆炸（1-12季）',
          description: "从初中看到大学，泪目。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%94%9F%E6%B4%BB%E5%A4%A7%E7%88%86%E7%82%B8/";
            },},{id: "movies-无敌破坏王2-大闹互联网",
          title: '无敌破坏王2：大闹互联网',
          description: "有意思的搞笑动画片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E6%95%8C%E7%A0%B4%E5%9D%8F%E7%8E%8B2/";
            },},{id: "movies-蜘蛛侠-平行宇宙",
          title: '蜘蛛侠：平行宇宙',
          description: "原本对“超英”电影不是很感兴趣，有些惊喜。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%9C%98%E8%9B%9B%E4%BE%A0-%E5%B9%B3%E8%A1%8C%E5%AE%87%E5%AE%99/";
            },},{id: "movies-流浪地球",
          title: '流浪地球',
          description: "大概是很反感某些价值观吧。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%83/";
            },},{id: "movies-朝花夕誓",
          title: '朝花夕誓',
          description: "全名《朝花夕誓：于离别之朝束起约定之花》",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%9D%E8%8A%B1%E5%A4%95%E8%AA%93/";
            },},{id: "movies-何以为家",
          title: '何以为家',
          description: "佳作。香港译名《星仔打官司》笑薯我了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BD%95%E4%BB%A5%E4%B8%BA%E5%AE%B6/";
            },},{id: "movies-哪吒之魔童降世",
          title: '哪吒之魔童降世',
          description: "挺不错的中国动画片，当时在电影院感觉耳目一新。“自来水”一词源自于此。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%93%AA%E5%90%92%E4%B9%8B%E9%AD%94%E7%AB%A5%E9%99%8D%E4%B8%96/";
            },},{id: "movies-摩登家庭-1-11季",
          title: '摩登家庭（1-11季）',
          description: "最好看的美式家庭剧。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%91%A9%E7%99%BB%E5%AE%B6%E5%BA%AD/";
            },},{id: "movies-沉睡魔咒2",
          title: '沉睡魔咒2',
          description: "挺有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B2%89%E7%9D%A1%E9%AD%94%E5%92%922/";
            },},{id: "movies-了不起的麦瑟尔夫人-1-3季",
          title: '了不起的麦瑟尔夫人（1-3季）',
          description: "还可以，只看了前3季。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E9%BA%A6%E7%91%9F%E5%B0%94%E5%A4%AB%E4%BA%BA/";
            },},{id: "movies-小时代-1-4",
          title: '小时代 1-4',
          description: "狠狠收割初中生的电影，从此郭敬明在导演界自成一派，电影里的人活在郭敬明架空宇宙。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E6%97%B6%E4%BB%A3/";
            },},{id: "movies-面子",
          title: '面子',
          description: "不知道这种“正常”的女同性恋电影有多难得，伍思薇是神。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9D%A2%E5%AD%90/";
            },},{id: "movies-信条",
          title: '信条',
          description: "在电影院看的，挺有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BF%A1%E6%9D%A1/";
            },},{id: "movies-熟女强人",
          title: '熟女强人',
          description: "为了剧中一对女同性恋去看的，还可以。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%86%9F%E5%A5%B3%E5%BC%BA%E4%BA%BA/";
            },},{id: "movies-我和我的祖国",
          title: '我和我的祖国',
          description: "样板戏串烧，“我和”宇宙开山之作。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD/";
            },},{id: "movies-无敌破坏王",
          title: '无敌破坏王',
          description: "经典动画片，卖点就是脑洞、搞笑和成长教育。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E6%95%8C%E7%A0%B4%E5%9D%8F%E7%8E%8B/";
            },},{id: "movies-我不是药神",
          title: '我不是药神',
          description: "难得一见的上映的现实主义题材国产片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E/";
            },},{id: "movies-盗梦空间",
          title: '盗梦空间',
          description: "科幻片代表作，设计上有新鲜感，剧情较为薄弱。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%9B%97%E6%A2%A6%E7%A9%BA%E9%97%B4/";
            },},{id: "movies-真心半解",
          title: '真心半解',
          description: "难评，伍思薇在我心中跌落神坛。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%9C%9F%E5%BF%83%E5%8D%8A%E8%A7%A3/";
            },},{id: "movies-夏洛特烦恼",
          title: '夏洛特烦恼',
          description: "有病。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%8F%E6%B4%9B%E7%89%B9%E7%83%A6%E6%81%BC/";
            },},{id: "movies-李米的猜想",
          title: '李米的猜想',
          description: "不是我喜欢的类型。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9D%8E%E7%B1%B3%E7%9A%84%E7%8C%9C%E6%83%B3/";
            },},{id: "movies-菊石",
          title: '菊石',
          description: "催眠流派的女同电影，谁来救救我…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%8F%8A%E7%9F%B3/";
            },},{id: "movies-悲惨世界",
          title: '悲惨世界',
          description: "好看，喜欢歌。Do you hear the people sing? Singing the songs of angry men? It is the music of the people who will not be slaves again! When the beating of your heart echoes the beating of the drums, there is a life about to start when tomorrow comes!",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%82%B2%E6%83%A8%E4%B8%96%E7%95%8C/";
            },},{id: "movies-后翼弃兵",
          title: '后翼弃兵',
          description: "算是爽剧吧。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%90%8E%E7%BF%BC%E5%BC%83%E5%85%B5/";
            },},{id: "movies-小谢尔顿-1-5季",
          title: '小谢尔顿（1 - 5季）',
          description: "《生活大爆炸》的衍生剧，很有趣的美式家庭喜剧。相对原剧，更喜欢这个剧。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E8%B0%A2%E5%B0%94%E9%A1%BF/";
            },},{id: "movies-我们这一天-1-5季",
          title: '我们这一天（1 - 5季）',
          description: "经典美剧，看到后面有些无聊了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E4%BB%AC%E8%BF%99%E4%B8%80%E5%A4%A9/";
            },},{id: "movies-心灵奇旅",
          title: '心灵奇旅',
          description: "典型“迪皮”动画片，类似但不如《寻梦环游记》。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BF%83%E7%81%B5%E5%A5%87%E6%97%85/";
            },},{id: "movies-温暖的抱抱",
          title: '温暖的抱抱',
          description: "我一定是太无聊了才来电影院看这个。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B8%A9%E6%9A%96%E7%9A%84%E6%8A%B1%E6%8A%B1/";
            },},{id: "movies-送你一朵小红花",
          title: '送你一朵小红花',
          description: "一个区别于《小时代》的另一平行宇宙，绝症派导演韩延力作。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%80%81%E4%BD%A0%E4%B8%80%E6%9C%B5%E5%B0%8F%E7%BA%A2%E8%8A%B1/";
            },},{id: "movies-万圣街",
          title: '万圣街',
          description: "因为我老婆当时的头像来看的...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%87%E5%9C%A3%E8%A1%97/";
            },},{id: "movies-无名之辈",
          title: '无名之辈',
          description: "黑色幽默喜剧，喜欢任素汐唱的《胡广生》。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E5%90%8D%E4%B9%8B%E8%BE%88/";
            },},{id: "movies-重庆森林",
          title: '重庆森林',
          description: "因为当时我老婆说这是她最喜欢的电影而去看的...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%87%8D%E5%BA%86%E6%A3%AE%E6%9E%97/";
            },},{id: "movies-色-戒",
          title: '色，戒',
          description: "还行。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%89%B2-%E6%88%92/";
            },},{id: "movies-叫我第一名",
          title: '叫我第一名',
          description: "过了爱看美式励志片的年纪。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8F%AB%E6%88%91%E7%AC%AC%E4%B8%80%E5%90%8D/";
            },},{id: "movies-小姐",
          title: '小姐',
          description: "难得不催眠的韩国女同性恋电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E5%A7%90/";
            },},{id: "movies-无问西东",
          title: '无问西东',
          description: "正是爱看中式励志片的年纪。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E9%97%AE%E8%A5%BF%E4%B8%9C/";
            },},{id: "movies-波西米亚狂想曲",
          title: '波西米亚狂想曲',
          description: "挺好看的，喜欢歌。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B3%A2%E8%A5%BF%E7%B1%B3%E4%BA%9A%E7%8B%82%E6%83%B3%E6%9B%B2/";
            },},{id: "movies-狗十三",
          title: '狗十三',
          description: "慕名而来，失望而归。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%8B%97%E5%8D%81%E4%B8%89/";
            },},{id: "movies-小伟",
          title: '小伟',
          description: "一部挺冷门的院线电影，手法很质朴...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E4%BC%9F/";
            },},{id: "movies-你好-李焕英",
          title: '你好，李焕英',
          description: "好有新意、好有心意的电影，有泪有笑的剧情，直到结尾那段跑车镜头看得我眼泪狂飞。“我这一辈子过得挺幸福的，怎么不相信呢。”想重温了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BD%A0%E5%A5%BD-%E6%9D%8E%E7%84%95%E8%8B%B1/";
            },},{id: "movies-唐人街探案-1-3部",
          title: '唐人街探案（1-3部）',
          description: "别再拍了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%94%90%E4%BA%BA%E8%A1%97%E6%8E%A2%E6%A1%88/";
            },},{id: "movies-利刃出鞘",
          title: '利刃出鞘',
          description: "挺有意思的悬疑片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%88%A9%E5%88%83%E5%87%BA%E9%9E%98/";
            },},{id: "movies-娜娜",
          title: '娜娜',
          description: "因为当时我老婆说这是她最喜欢的动画来看的...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A8%9C%E5%A8%9C/";
            },},{id: "movies-我和我的家乡",
          title: '我和我的家乡',
          description: "还是有点儿搞笑的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E5%AE%B6%E4%B9%A1/";
            },},{id: "movies-我的姐姐",
          title: '我的姐姐',
          description: "令人无语。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E7%9A%84%E5%A7%90%E5%A7%90/";
            },},{id: "movies-第十一回",
          title: '第十一回',
          description: "看得一头雾水但是有点儿意思。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%9B%9E/";
            },},{id: "movies-悬崖之上",
          title: '悬崖之上',
          description: "剧情没有什么出彩的地方，总体的感觉是冗长的无聊中透露着些许好笑。也许是因为我本身对谍战片难以信服，从头至尾都无法代入其中，也很难有情绪上的强烈波动。观影过程缺乏紧张感和意料之外的反转，仓促的结尾加上通过人物对话的强行煽情和升华简直是败笔。 倪大红看起来呆呆的，不适合角色。刘浩存挺漂亮的，但是气质与角色不合，演技相形见绌，虽美但尬。其他几位演员没啥挑剔的，但是几个男性角色外形和人设过于相似，以至于我看了几十分钟之后依然脸盲。 唯一欣赏的是画面的美感，喜欢复古的建筑、车辆、服饰，看得想穿越到三四十年代飘着雪的哈尔滨（虽然是在影视城拍的）。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%82%AC%E5%B4%96%E4%B9%8B%E4%B8%8A/";
            },},{id: "movies-夺冠",
          title: '夺冠',
          description: "还可以。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%BA%E5%86%A0/";
            },},{id: "movies-归来",
          title: '归来',
          description: "挺好看的，令人唏嘘。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BD%92%E6%9D%A5/";
            },},{id: "movies-少年的你",
          title: '少年的你',
          description: "易烊千玺真的很喜欢演这种仿佛架空平行宇宙的电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%91%E5%B9%B4%E7%9A%84%E4%BD%A0/";
            },},{id: "movies-情书",
          title: '情书',
          description: "很催眠...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%83%85%E4%B9%A6/";
            },},{id: "movies-泰坦尼克号",
          title: '泰坦尼克号',
          description: "很美。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B3%B0%E5%9D%A6%E5%B0%BC%E5%85%8B%E5%8F%B7/";
            },},{id: "movies-你好世界",
          title: '你好世界',
          description: "日本的动画 x 穿越 x 爱情系列作品之一。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C/";
            },},{id: "movies-黑白魔女库伊拉",
          title: '黑白魔女库伊拉',
          description: "挺有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%BB%91%E7%99%BD%E9%AD%94%E5%A5%B3%E5%BA%93%E4%BC%8A%E6%8B%89/";
            },},{id: "movies-肖申克的救赎",
          title: '肖申克的救赎',
          description: "以前看过，只记得了海报后面藏着个男主挖的地道。今天第二次看了，发现了很多之前遗忘掉的情节。真的很励志，看完了感觉热血沸腾恨不得立马再做300题。道阻且长，行则将至。很多台词美得像散文诗，值得品味。最后一个镜头太美了，太平洋的海水真蓝呀！",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E/";
            },},{id: "movies-燃野少年的天空",
          title: '燃野少年的天空',
          description: "追星的时候看的...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%87%83%E9%87%8E%E5%B0%91%E5%B9%B4%E7%9A%84%E5%A4%A9%E7%A9%BA/";
            },},{id: "movies-双镜",
          title: '双镜',
          description: "“双女主”，懂自懂。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8F%8C%E9%95%9C/";
            },},{id: "movies-了不起的女孩",
          title: '了不起的女孩',
          description: "当时饿得什么都吃...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E5%A5%B3%E5%AD%A9/";
            },},{id: "movies-失控玩家",
          title: '失控玩家',
          description: "挺有趣的搞笑科幻片。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%B1%E6%8E%A7%E7%8E%A9%E5%AE%B6/";
            },},{id: "movies-第一次遇见花香的那刻",
          title: '第一次遇见花香的那刻',
          description: "不催眠的女同性恋剧集，支技。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%AC%AC%E4%B8%80%E6%AC%A1%E9%81%87%E8%A7%81%E8%8A%B1%E9%A6%99%E7%9A%84%E9%82%A3%E5%88%BB/";
            },},{id: "movies-第一炉香",
          title: '第一炉香',
          description: "因为当时我老婆说她在看而去看的，不知道是什么一坨。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%AC%AC%E4%B8%80%E7%82%89%E9%A6%99/";
            },},{id: "movies-爱情神话",
          title: '爱情神话',
          description: "邵艺辉不错。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%88%B1%E6%83%85%E7%A5%9E%E8%AF%9D/";
            },},{id: "movies-盛夏未来",
          title: '盛夏未来',
          description: "倍速看完的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%9B%9B%E5%A4%8F%E6%9C%AA%E6%9D%A5/";
            },},{id: "movies-想见你",
          title: '想见你',
          description: "神作。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%83%B3%E8%A7%81%E4%BD%A0/";
            },},{id: "movies-江照黎明",
          title: '江照黎明',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B1%9F%E7%85%A7%E9%BB%8E%E6%98%8E/";
            },},{id: "movies-一一",
          title: '一一',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%80%E4%B8%80/";
            },},{id: "movies-喜剧之王",
          title: '喜剧之王',
          description: "意外地觉得还不错。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%96%9C%E5%89%A7%E4%B9%8B%E7%8E%8B/";
            },},{id: "movies-阳光灿烂的日子",
          title: '阳光灿烂的日子',
          description: "比《西西里岛的美丽传说》还恶心的北京版。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%98%B3%E5%85%89%E7%81%BF%E7%83%82%E7%9A%84%E6%97%A5%E5%AD%90/";
            },},{id: "movies-海蒂和爷爷",
          title: '海蒂和爷爷',
          description: "剧情没什么意思，画面还不错吧...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B5%B7%E8%92%82%E5%92%8C%E7%88%B7%E7%88%B7/";
            },},{id: "movies-心灵捕手",
          title: '心灵捕手',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BF%83%E7%81%B5%E6%8D%95%E6%89%8B/";
            },},{id: "movies-超脱",
          title: '超脱',
          description: "头痛类瞌睡电影...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%B6%85%E8%84%B1/";
            },},{id: "movies-喜宴",
          title: '喜宴',
          description: "结局恶心得像吃了屎。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%96%9C%E5%AE%B4/";
            },},{id: "movies-天堂电影院",
          title: '天堂电影院',
          description: "有点儿催眠。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A9%E5%A0%82%E7%94%B5%E5%BD%B1%E9%99%A2/";
            },},{id: "movies-布达佩斯大饭店",
          title: '布达佩斯大饭店',
          description: "属于让我不是很摸得着头脑的有意思类型。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B8%83%E8%BE%BE%E4%BD%A9%E6%96%AF%E5%A4%A7%E9%A5%AD%E5%BA%97/";
            },},{id: "movies-白日梦想家",
          title: '白日梦想家',
          description: "有点儿意思。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%99%BD%E6%97%A5%E6%A2%A6%E6%83%B3%E5%AE%B6/";
            },},{id: "movies-神探",
          title: '神探',
          description: "挺反转的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%A5%9E%E6%8E%A2/";
            },},{id: "movies-爱乐之城",
          title: '爱乐之城',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%88%B1%E4%B9%90%E4%B9%8B%E5%9F%8E/";
            },},{id: "movies-万神殿-第一季",
          title: '万神殿 第一季',
          description: "我心中的科幻动画剧集封神之作。上载智能——人死了以后竟然以0/1信号的形式活在无限的代码世界中，新奇且令人振奋。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%87%E7%A5%9E%E6%AE%BF1/";
            },},{id: "movies-想见你",
          title: '想见你',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%83%B3%E8%A7%81%E4%BD%A0-%E7%94%B5%E5%BD%B1%E7%89%88/";
            },},{id: "movies-白莲花度假村-第一季",
          title: '白莲花度假村 第一季',
          description: "一种很独特的搞笑风格。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%99%BD%E8%8E%B2%E8%8A%B1%E5%BA%A6%E5%81%87%E6%9D%911/";
            },},{id: "movies-白莲花度假村-第二季",
          title: '白莲花度假村 第二季',
          description: "很搞笑很悬疑。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%99%BD%E8%8E%B2%E8%8A%B1%E5%BA%A6%E5%81%87%E6%9D%912/";
            },},{id: "movies-流浪地球2",
          title: '流浪地球2',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%832/";
            },},{id: "movies-瞬息全宇宙",
          title: '瞬息全宇宙',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%9E%AC%E6%81%AF%E5%85%A8%E5%AE%87%E5%AE%99/";
            },},{id: "movies-三体",
          title: '三体',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%89%E4%BD%93/";
            },},{id: "movies-印式英语",
          title: '印式英语',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8D%B0%E5%BC%8F%E8%8B%B1%E8%AF%AD/";
            },},{id: "movies-铃芽之旅",
          title: '铃芽之旅',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%93%83%E8%8A%BD%E4%B9%8B%E6%97%85/";
            },},{id: "movies-宇宙探索编辑部",
          title: '宇宙探索编辑部',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%AE%87%E5%AE%99%E6%8E%A2%E7%B4%A2%E7%BC%96%E8%BE%91%E9%83%A8/";
            },},{id: "movies-深海",
          title: '深海',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B7%B1%E6%B5%B7/";
            },},{id: "movies-谁先爱上他的",
          title: '谁先爱上他的',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%B0%81%E5%85%88%E7%88%B1%E4%B8%8A%E4%BB%96%E7%9A%84/";
            },},{id: "movies-漫长的季节",
          title: '漫长的季节',
          description: "辛爽不错。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%BC%AB%E9%95%BF%E7%9A%84%E5%AD%A3%E8%8A%82/";
            },},{id: "movies-北京遇上西雅图",
          title: '北京遇上西雅图',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8C%97%E4%BA%AC%E9%81%87%E4%B8%8A%E8%A5%BF%E9%9B%85%E5%9B%BE/";
            },},{id: "movies-优等生社团",
          title: '优等生社团',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BC%98%E7%AD%89%E7%94%9F%E7%A4%BE%E5%9B%A2/";
            },},{id: "movies-忠犬八公",
          title: '忠犬八公',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BF%A0%E7%8A%AC%E5%85%AB%E5%85%AC-%E4%B8%AD%E5%9B%BD%E7%89%88/";
            },},{id: "movies-渔港的肉子酱",
          title: '渔港的肉子酱',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B8%94%E6%B8%AF%E7%9A%84%E8%82%89%E5%AD%90%E9%85%B1/";
            },},{id: "movies-忠犬八公的故事",
          title: '忠犬八公的故事',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BF%A0%E7%8A%AC%E5%85%AB%E5%85%AC%E7%9A%84%E6%95%85%E4%BA%8B/";
            },},{id: "movies-打开心世界",
          title: '打开心世界',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%89%93%E5%BC%80%E5%BF%83%E4%B8%96%E7%95%8C/";
            },},{id: "movies-毒舌律师",
          title: '毒舌律师',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%AF%92%E8%88%8C%E5%BE%8B%E5%B8%88/";
            },},{id: "movies-人生大事",
          title: '人生大事',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BA%BA%E7%94%9F%E5%A4%A7%E4%BA%8B/";
            },},{id: "movies-青春变形记",
          title: '青春变形记',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9D%92%E6%98%A5%E5%8F%98%E5%BD%A2%E8%AE%B0/";
            },},{id: "movies-驴得水",
          title: '驴得水',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%A9%B4%E5%BE%97%E6%B0%B4/";
            },},{id: "movies-爱很美味",
          title: '爱很美味',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%88%B1%E5%BE%88%E7%BE%8E%E5%91%B3/";
            },},{id: "movies-如果不让上司注意到这个时间循环就无法结束",
          title: '如果不让上司注意到这个时间循环就无法结束',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A6%82%E6%9E%9C%E4%B8%8D%E8%AE%A9%E4%B8%8A%E5%8F%B8%E6%B3%A8%E6%84%8F%E5%88%B0%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E5%BE%AA%E7%8E%AF%E5%B0%B1%E6%97%A0%E6%B3%95%E7%BB%93%E6%9D%9F/";
            },},{id: "movies-寄生虫",
          title: '寄生虫',
          description: "提起“牛逼的电影”，我会想到它。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%AF%84%E7%94%9F%E8%99%AB/";
            },},{id: "movies-孤味",
          title: '孤味',
          description: "特别特别难看，特别特别无聊。感觉导演/编剧脑子被裹脚布夹了。这电影有8.0分，使我相当震撼。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%AD%A4%E5%91%B3/";
            },},{id: "movies-辩护人",
          title: '辩护人',
          description: "这是一部与历史事实紧密联系的电影。影片背景设定在20世纪80年代的韩国，当时正处于军事独裁统治下。电影以一群被诬告政治罪的少年为线索，展现了当时司法系统中的腐败和不公。在批判历史上的不公正同时，也给人们带来了对人权和法治的思考。这样的题材，仅是允许被创作和上映就值得五星。更不用说扣人心弦的情节、振聋发聩的台词以及演员精湛的演技。在了解了故事原型以及社会影响之后，我对这部电影充满敬意。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BE%A9%E6%8A%A4%E4%BA%BA/";
            },},{id: "movies-饮食男女",
          title: '饮食男女',
          description: "欣赏不来。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%A5%AE%E9%A3%9F%E7%94%B7%E5%A5%B3/";
            },},{id: "movies-7号房的礼物",
          title: '7号房的礼物',
          description: "这部电影充满了温情和幽默，它让我们在一群罪犯身上看到了纯粹的人情，在一个智障男子身上看到了人性的崇高之光。正如女主角所说，她的父亲就像天使般充满善意，他在危急时刻无私地拯救他人，甚至可以不顾生死。然而，这样一位善良的人却成为了权力和司法不公的牺牲品，这令人感到无比悲伤。小女孩聪明可爱，使她遭受的不幸更加令人心碎。总体而言，这是一部引人入胜的电影，虽然情感表达稍显过度，逻辑上有所欠缺，一些情节过于超现实以至于缺乏可信度。父亲每次在1、2、3之后做出的滑稽动作让我想起了《美丽人生》中的男主角，成为了一个难忘的记忆点。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/7%E5%8F%B7%E6%88%BF%E7%9A%84%E7%A4%BC%E7%89%A9/";
            },},{id: "movies-阳光姐妹淘",
          title: '阳光姐妹淘',
          description: "这是一部描述女性友谊的电影，虽然是日本的翻拍而非原版韩国影片，但总体来说，它成功地避免了典型的男性臆想情节，让人感到舒适。影片营造了轻松的氛围，带有一些充满中二感的日本幽默元素。其中的情节让我回忆起了自己的初中生活，那段六个朋友组成的小团体，整天嬉笑打闹的时光。然而，随着时间的流逝，大家的生活和价值观渐渐改变，自然而然地失去联系也是正常的事情。特别触动我内心的是芹香的离世。她在去世后通过物质上的支持，帮助了她生前的好友们过上更好的生活。然而，如此年轻的生命提前凋零，让人感到心痛和惋惜，让人体会到生命的脆弱和珍贵。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%98%B3%E5%85%89%E5%A7%90%E5%A6%B9%E6%B7%98-%E6%97%A5/";
            },},{id: "movies-小鞋子",
          title: '小鞋子',
          description: "这是一部非常非常简单的电影，为何苦难总是流向能吃苦的人？",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E9%9E%8B%E5%AD%90/";
            },},{id: "movies-误杀瞒天记",
          title: '误杀瞒天记',
          description: "这部电影充满了出人意料的转折和扣人心弦的剧情。导演将错综复杂的故事线索巧妙地交织在一起，揭示出人性的复杂性和道德的边界。影片通过精心设计的情节推进和人物关系，将观众带入了一个充满谜团和推理的世界。视觉呈现方面，影片的摄影和美术设计令人赞叹。精心布置的场景和充满细节的画面营造出了紧张和压抑的氛围，使得观众更能够深入融入故事中。配乐的运用也恰到好处，为影片增添了悬疑和紧张感。无论是剧情、演技还是制作水准，都值得一看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%AF%AF%E6%9D%80%E7%9E%92%E5%A4%A9%E8%AE%B0/";
            },},{id: "movies-阳光姐妹淘",
          title: '阳光姐妹淘',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%98%B3%E5%85%89%E5%A7%90%E5%A6%B9%E6%B7%98-%E9%9F%A9/";
            },},{id: "movies-卢旺达饭店",
          title: '卢旺达饭店',
          description: "I think if people see this footage, they&#39;ll say, “Oh, my God, that&#39;s horrible”, and then go on eating their dinners.",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8D%A2%E6%97%BA%E8%BE%BE%E9%A5%AD%E5%BA%97/";
            },},{id: "movies-沉默的真相",
          title: '沉默的真相',
          description: "叙事、台词沉闷乏味，角色、逻辑经不起推敲，一口气看完的结果是有些失望。永远在不经意间流露出的厌女、爹味一如既往令人不适。优点是剪辑不错，故事本身是有些内容的。最后一集的伟光正青天大老爷轻松结案使我对这部剧的厌恶程度达到顶峰，属实是“你法我笑“的讽刺程度。没有对真相为何只能沉默的深入拷问，只有一些听到耳朵起茧的辩白和口号。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B2%89%E9%BB%98%E7%9A%84%E7%9C%9F%E7%9B%B8/";
            },},{id: "movies-隐秘的角落",
          title: '隐秘的角落',
          description: "同样是一口气看完，不得不拉踩《沉默的真相》。本剧集制作精良，情节引人入胜，人物立体丰富，主题明确，实为佳作。如果只用两个字评价，就是“精彩”。看了原著梗概之后，更是感叹剧集的精彩程度不到原著的十分之一，有些遗憾未能在屏幕上看到如此精彩的复刻。我认为作为悬疑剧，吊足观众胃口和总体逻辑经得起推敲是最重要的，本剧无疑做到了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9A%90%E7%A7%98%E7%9A%84%E8%A7%92%E8%90%BD/";
            },},{id: "movies-雄狮少年",
          title: '雄狮少年',
          description: "中规中矩之作，剧情平庸、人物扁平的低幼向鸡汤。画面不错，关于舞狮部分的讲解和描绘不错。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9B%84%E7%8B%AE%E5%B0%91%E5%B9%B4/";
            },},{id: "movies-玩具总动员",
          title: '玩具总动员',
          description: "2023年，这部27岁的电影给25岁的我打开了一扇窗。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%8E%A9%E5%85%B7%E6%80%BB%E5%8A%A8%E5%91%98/";
            },},{id: "movies-超能陆战队",
          title: '超能陆战队',
          description: "开头还是挺新颖的，吸引人。后面逐渐套路化。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%B6%85%E8%83%BD%E9%99%86%E6%88%98%E9%98%9F/";
            },},{id: "movies-蜘蛛侠-纵横宇宙",
          title: '蜘蛛侠：纵横宇宙',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%9C%98%E8%9B%9B%E4%BE%A0-%E7%BA%B5%E6%A8%AA%E5%AE%87%E5%AE%99/";
            },},{id: "movies-中国乒乓之绝地反击",
          title: '中国乒乓之绝地反击',
          description: "有些无聊，男的太多看着烦。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%AD%E5%9B%BD%E4%B9%92%E4%B9%93%E4%B9%8B%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB/";
            },},{id: "movies-消失的痕迹",
          title: '消失的痕迹',
          description: "案件足够悬疑，令人欲罢不能。最大的优点是全剧没有什么水分，紧紧围绕案情。任何发现、线索立马和观众分享，可以让观众参与其中，进行猜测，很有乐趣。唯一不耐烦跳过的地方是结尾的兄妹情深，不想看。全剧演技最佳是蒋向楠，唯一看哭了的案情。不足之处在于全剧透露出一股贫穷的气息，部分桥段很尬，令人发笑。不过无所谓，我会爱护双女主剧。很难不怀疑女同性恋是这世界上最好糊弄的观众群体，只要主角是两个女的就满足了。所以恳请世界上再多一些双女主剧吧please！！",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B6%88%E5%A4%B1%E7%9A%84%E7%97%95%E8%BF%B9/";
            },},{id: "movies-误杀瞒天记2",
          title: '误杀瞒天记2',
          description: "编剧很牛。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%AF%AF%E6%9D%80%E7%9E%92%E5%A4%A9%E8%AE%B02/";
            },},{id: "movies-小偷家族",
          title: '小偷家族',
          description: "感觉太平淡了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E5%81%B7%E5%AE%B6%E6%97%8F/";
            },},{id: "movies-消失的她",
          title: '消失的她',
          description: "这男的可真该死啊🤮 电影前半部分尬得抠脚，要不是听说是根据真实事件改编，很难相信亿万富豪家的女儿能这么容易被骗。后面闺蜜情嗑死我了，她好爱。原片两星，剩下一星给倪妮、文咏珊。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B6%88%E5%A4%B1%E7%9A%84%E5%A5%B9/";
            },},{id: "movies-窃听风暴",
          title: '窃听风暴',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%AA%83%E5%90%AC%E9%A3%8E%E6%9A%B4/";
            },},{id: "movies-消失的爱人",
          title: '消失的爱人',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B6%88%E5%A4%B1%E7%9A%84%E7%88%B1%E4%BA%BA/";
            },},{id: "movies-上帝之城",
          title: '上帝之城',
          description: "非常的震撼。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%8A%E5%B8%9D%E4%B9%8B%E5%9F%8E/";
            },},{id: "movies-装腔启示录",
          title: '装腔启示录',
          description: "算是挺典的国产剧：小资生活，精英人设，男欢女爱，有事没事儿再来两句鸡汤。食之无味，弃之不惜。在最尬的地方最好笑，用最浮夸的表演说最雷人的台词。一些桥段，令人看不明白创作者是想反讽还是喜欢，似乎是国产剧的通病。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%A3%85%E8%85%94%E5%90%AF%E7%A4%BA%E5%BD%95/";
            },},{id: "movies-血观音",
          title: '血观音',
          description: "故弄玄虚。结果到头来都是为了男人。😅",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%A1%80%E8%A7%82%E9%9F%B3/";
            },},{id: "movies-芝加哥七君子审判",
          title: '芝加哥七君子审判',
          description: "题材的价值大于内容的价值。电影本身比起《辩护人》差了太多。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%8A%9D%E5%8A%A0%E5%93%A5%E4%B8%83%E5%90%9B%E5%AD%90%E5%AE%A1%E5%88%A4/";
            },},{id: "movies-飞屋环游记",
          title: '飞屋环游记',
          description: "依然是很典的“迪皮”电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%A3%9E%E5%B1%8B%E7%8E%AF%E6%B8%B8%E8%AE%B0/";
            },},{id: "movies-黑客帝国",
          title: '黑客帝国',
          description: "不得不说拍摄手法确实有时代的局限性。美式个人英雄主义十分强烈，仿佛坐实这个身份就可以为所欲为，罔顾事实和逻辑，拥有超能力和不死之身。东方武打桥段太差太差了，看得人如坐针毡，感觉随便去武术学校找两个小孩比划两下都不至于此。还有一点儿令人无语的是“爱创造奇迹”这个设定。女主亲吻一下男主，说几句我爱你，男主就能起死回生，简直比我小时候看见的真诚的眼泪落在伤口上就能使伤口治愈还离谱。最后说说它的世界观，也许我们生活的世界是由程序编造而成的，一切都并非“真实”的，如果不能“醒”来，或者就算我们可以“醒”来，又如何得知什么是现实，什么是虚幻？即使放在1999年，这种设定也毫不新颖；和庄周梦蝶差不多，而庄子所处的时代是公元前两三百年。类似题材的《盗梦空间》、《楚门的世界》都把《黑客帝国》吊着打。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD/";
            },},{id: "movies-三块广告牌",
          title: '三块广告牌',
          description: "像《驴得水》一样令人震撼且“不适”的电影，如今我知道了它们的共有标签—“黑色幽默”。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%89%E5%9D%97%E5%B9%BF%E5%91%8A%E7%89%8C/";
            },},{id: "movies-怪兽电力公司",
          title: '怪兽电力公司',
          description: "经典迪士尼皮克斯合家欢电影，充满想象力、搞笑、温情，但看完之后总觉得少了些什么。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%80%AA%E5%85%BD%E7%94%B5%E5%8A%9B%E5%85%AC%E5%8F%B8/";
            },},{id: "movies-未麻的部屋",
          title: '未麻的部屋',
          description: "看得晕乎乎的，直到最后才有一点点🤏明白。是一部容易让人感到牛逼的电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%AA%E9%BA%BB%E7%9A%84%E9%83%A8%E5%B1%8B/";
            },},{id: "movies-模仿游戏",
          title: '模仿游戏',
          description: "影片非常普通，致敬计算机祖师爷—图灵。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%A8%A1%E4%BB%BF%E6%B8%B8%E6%88%8F/";
            },},{id: "movies-芭比",
          title: '芭比',
          description: "太温和太温和的“女性主义”电影，没什么出彩的地方，剧情也稀碎，印象较深的地方是“妈妈”嘴里一长串的输出。五星以示鼓励。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%8A%AD%E6%AF%94/";
            },},{id: "movies-重启人生",
          title: '重启人生',
          description: "无比地想看下一季。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%87%8D%E5%90%AF%E4%BA%BA%E7%94%9F/";
            },},{id: "movies-东京教父",
          title: '东京教父',
          description: "有些戏剧性，画风不错，感觉是一部完整的程式化电影，不过没有很惊艳。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%9C%E4%BA%AC%E6%95%99%E7%88%B6/";
            },},{id: "movies-再次出发之纽约遇见你",
          title: '再次出发之纽约遇见你',
          description: "很典的含有“音乐”标签的电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%86%8D%E6%AC%A1%E5%87%BA%E5%8F%91%E4%B9%8B%E7%BA%BD%E7%BA%A6%E9%81%87%E8%A7%81%E4%BD%A0/";
            },},{id: "movies-无人知晓",
          title: '无人知晓',
          description: "不知道是不是改编的原因，有些剧情令人匪夷所思。原本真实的事件只能说令人窒息和震惊，但逻辑不通的改编让前故事的可信度下降，也很难引起我情绪上的共鸣。叙事节奏太慢、人物扁平。画面不错，小孩子很可爱很可怜，其他乏善可陈。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E4%BA%BA%E7%9F%A5%E6%99%93/";
            },},{id: "movies-十二公民",
          title: '十二公民',
          description: "应该是个可以拍得精彩的脚本，不知道为什么台词特别的尬、不合逻辑，看得难受。感觉就像是围观了一群低智且暴戾的男的说屁话、重复说屁话。感觉有一阵子没看过这么难看的“电影”了。整部电影从头到尾都充满了“假”的感觉，令人难以信服的背景设定、做作且不合逻辑的语言、声嘶力竭的表演、刻意多余且猝不及防的煽情、还有最后伟光正的收尾，非常符合春晚小品的特征，只不过是超长版。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8D%81%E4%BA%8C%E5%85%AC%E6%B0%91/";
            },},{id: "movies-一个叫欧维的男人决定去死",
          title: '一个叫欧维的男人决定去死',
          description: "这部电影的优点包括但不限于（1）人物性格很鲜明，又通过一些穿插的叙事让我们看见了主角，即欧维，人物形象上的反差。这个看起来不近人情、固执古板、说话横冲直撞的老头儿，对亡妻却无微不至、一往情深，很难不令人动容。（2）故事具有戏剧性，无论是当下时空的邻里生活，还是欧维记忆中的人生大事，都描绘得比较有意思。（3）对于没去过北欧的人，比如我，有些异域风情。比如，名贵品种布偶猫在他们社区里竟然在流浪；比如，作为普通火车工人的欧维在上个世纪就能频繁地换新车、住大house，每周四下午一点还和妻子一起在面包店品尝甜品。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%80%E4%B8%AA%E5%8F%AB%E6%AC%A7%E7%BB%B4%E7%9A%84%E7%94%B7%E4%BA%BA%E5%86%B3%E5%AE%9A%E5%8E%BB%E6%AD%BB/";
            },},{id: "movies-隐藏人物",
          title: '隐藏人物',
          description: "希望能看到更多女性主角的非爱情电影。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%9A%90%E8%97%8F%E4%BA%BA%E7%89%A9/";
            },},{id: "movies-常春藤",
          title: '常春藤',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B8%B8%E6%98%A5%E8%97%A4/";
            },},{id: "movies-杀人回忆",
          title: '杀人回忆',
          description: "看完了以后感觉脑子里嗡嗡的，太震撼、太惊悚了。悬案只是电影的一部分，穿插其中的时代背景也非常具有现实意义。大部分的案子最后是悬案，大部分的凶手看起来就是普通人。导演不愧是现实主义题材的高手，和《寄生虫》一样，后劲太大了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9D%80%E4%BA%BA%E5%9B%9E%E5%BF%86/";
            },},{id: "movies-烈日灼心",
          title: '烈日灼心',
          description: "唯一一个女性角色像是个弱智，真不明白是不是男编剧男导演对女性有什么误解。三个罪犯因为收养一个弃婴就突然良心觉醒了？智商163的嫌犯不知道自己没犯罪，选择装傻蒙混过关不被错误处决？抓台湾杀人犯时拿着斧头跟在后面的炮灰更是莫名其妙，实在是令人发笑。打着“人性的善恶复杂”的名头，实则更像是充满男性意淫的洗白，感觉像是在戏耍观众。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%83%88%E6%97%A5%E7%81%BC%E5%BF%83/";
            },},{id: "movies-真爱至上",
          title: '真爱至上',
          description: "聒噪、浅薄、荒诞、无趣，俗不可耐、不知所云。真是受够了这种充满意淫和自我感动的顺直男霸权烂片。不得不说这部电影成功使我对所谓的豆瓣Top250祛魅。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%9C%9F%E7%88%B1%E8%87%B3%E4%B8%8A/";
            },},{id: "movies-健听女孩",
          title: '健听女孩',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%81%A5%E5%90%AC%E5%A5%B3%E5%AD%A9/";
            },},{id: "movies-蒙古草原-天气晴",
          title: '蒙古草原，天气晴',
          description: "难忘最后一幕，普洁和妈妈骑着马远去。两位马背上的蒙古女子，今生太苦了；如果真的有来世，愿你们投个好胎。外婆好可爱，喜欢。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%92%99%E5%8F%A4%E8%8D%89%E5%8E%9F-%E5%A4%A9%E6%B0%94%E6%99%B4/";
            },},{id: "movies-克劳斯-圣诞节的秘密",
          title: '克劳斯：圣诞节的秘密',
          description: "剧情其实有些套路，但关于圣诞老人的起源还是挺有想象力的，同时也很幽默：为什么担心自己被标记为坏孩子，为什么礼物是放在袜子里的，为什么圣坛老人用麋鹿拉车，为什么他们在天上飞，为什么他穿着红白色的棉服……目前最喜欢的关于圣诞节的电影，很可爱的小故事，喜欢。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%85%8B%E5%8A%B3%E6%96%AF-%E5%9C%A3%E8%AF%9E%E8%8A%82%E7%9A%84%E7%A7%98%E5%AF%86/";
            },},{id: "movies-过春天",
          title: '过春天',
          description: "本质是一部青春疼痛电影，跨境学童、单非生子、走水等港深边境独有的话题使电影更有意思了。起初我觉得，香港的iPhone售价也没比大陆便宜多少，不明白有什么好走私的；把一排一排的手机缠在身上，是把海关的人当傻子吗？后来查了一下，原来当年真的有很多人以此谋生，长见识了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BF%87%E6%98%A5%E5%A4%A9/";
            },},{id: "movies-恐怖直播",
          title: '恐怖直播',
          description: "生如蝼蚁，死如炮灰，命如草芥。悬疑、讽刺拉满的电影，致敬韩国的创作环境。可惜故事可信度欠佳，结尾的镜头加一星。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%81%90%E6%80%96%E7%9B%B4%E6%92%AD/";
            },},{id: "movies-燃冬",
          title: '燃冬',
          description: "除了当旅游宣传片看没什么可说的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%87%83%E5%86%AC/";
            },},{id: "movies-无证之罪",
          title: '无证之罪',
          description: "作为一部悬疑剧，剧情拖沓、逻辑硬伤太多。本剧最大的疑点是：我们仍未知道为什么朱大福从始至终拼死阻止朱慧如和郭羽谈恋爱。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E8%AF%81%E4%B9%8B%E7%BD%AA/";
            },},{id: "movies-开心家族",
          title: '开心家族',
          description: "在影片结尾部分揭晓真相前，我觉得影片剧情拖沓、令人一头雾水，是三星的平庸之作；揭晓时眼泪不自觉往下掉，心中五味杂陈。一瞬间对男主产生了深深的共情，觉得他实在是太可怜太可怜了。再次证明了“喜剧的内核是悲剧”。不过即便深受感动，依然觉得瑜不掩瑕，前半部分的故事还是可以讲得更好些的。设定和走向跟《你好，李焕英》还挺像的，不过李焕英的前半段叙事比这部影片有意思多了。此外，美女护士猝不及防爱上男主的桥段也让我接受不能，有些男性意淫。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BC%80%E5%BF%83%E5%AE%B6%E6%97%8F/";
            },},{id: "movies-海底总动员",
          title: '海底总动员',
          description: "搞笑、有趣、可爱，皮克斯的动画片如果剔除说教和煽情的俗套剧情就是五星之作。mine mine mine也太贴切且洗脑了。此外，XXX总动员这样的译名能不能爬？",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B5%B7%E5%BA%95%E6%80%BB%E5%8A%A8%E5%91%98/";
            },},{id: "movies-瀑布",
          title: '瀑布',
          description: "原本对湾湾的电影没抱有很高期待，结果意外的还挺好看的。剧情有些意想不到的反转，贾静雯演技在线，个人认为更难能可贵的是对防控疫情大背景下个人生活细节的真实记录。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%80%91%E5%B8%83/";
            },},{id: "movies-白夜追凶",
          title: '白夜追凶',
          description: "值得一看的国产悬疑剧。前半部分挺精彩的，从卧底案开始走下坡路了，主角智商直线下滑，剧集很水。前面一直没开倍速，后面不得不开到1.5。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%99%BD%E5%A4%9C%E8%BF%BD%E5%87%B6/";
            },},{id: "movies-气球",
          title: '气球',
          description: "有些生硬，不咋好看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B0%94%E7%90%83/";
            },},{id: "movies-搏击俱乐部",
          title: '搏击俱乐部',
          description: "故作高深的献给男人的精神伟哥，愚蠢可笑、令人厌恶。两个多小时的时间看这种“三如”电影还不如抠脚，实在是难看得要死，I’m fucking Kenough.",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%90%8F%E5%87%BB%E4%BF%B1%E4%B9%90%E9%83%A8/";
            },},{id: "movies-毛骗-第一季",
          title: '毛骗 第一季',
          description: "仅从可看性来说，吊打很多近年国产影视作品。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%AF%9B%E9%AA%97/";
            },},{id: "movies-毛骗-第二季",
          title: '毛骗 第二季',
          description: "相较于第一季，骗术高明了很多。逻辑自洽，剧情出人意料。一旦接受了这个画风简直是欲罢不能。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%AF%9B%E9%AA%972/";
            },},{id: "movies-毛骗-终结篇",
          title: '毛骗 终结篇',
          description: "牛逼！！！一部容易被画风和剧名埋没的上古优秀作品，恨不得让每个我认识的人都来看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%AF%9B%E9%AA%97%E7%BB%88%E7%BB%93%E7%AF%87/";
            },},{id: "movies-她和她的她",
          title: '她和她的她',
          description: "原本以为是穿越题材的悬疑剧，看到后面才明白这是解离症患者的精神世界。台湾也不愧为东亚文化集大成者，男尊女卑的现实刻画实在令人感到匪夷所思又无比真实。总体而言是一部有想法、有新意、制作精良的佳作。最厌恶的角色莫过于Danny，好想让贾静雯把他的头按到浴缸里。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A5%B9%E5%92%8C%E5%A5%B9%E7%9A%84%E5%A5%B9/";
            },},{id: "movies-万神殿-第二季",
          title: '万神殿 第二季',
          description: "抱着满满期待来看，看完很想大喊一声：什么垃圾玩意儿？我呸。披上科幻/哲学这些华丽外衣前，能不能先把故事讲清楚了？真就遇事不决，量子力学；解释不通，穿越时空。究极缝合怪，打斗直接动感光波biubiubiu。姐姐妹妹爱上我，就连女主妈和她叔也要来一段莫须有的黄昏恋，离开感情戏这剧没法演了还是怎么样？某些男编剧ego不要太大了我说。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%87%E7%A5%9E%E6%AE%BF2/";
            },},{id: "movies-蜡笔小新-谜团-花之天下春日部学院",
          title: '蜡笔小新：谜团！花之天下春日部学院',
          description: "可以说是超级爆笑了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0-%E8%B0%9C%E5%9B%A2-%E8%8A%B1%E4%B9%8B%E5%A4%A9%E4%B8%8B%E6%98%A5%E6%97%A5%E9%83%A8%E5%AD%A6%E9%99%A2/";
            },},{id: "movies-奇巧计程车",
          title: '奇巧计程车',
          description: "带有一些日式幽默的心理+悬疑动画片，挺有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A5%87%E5%B7%A7%E8%AE%A1%E7%A8%8B%E8%BD%A6/";
            },},{id: "movies-精神病房也会迎来清晨",
          title: '精神病房也会迎来清晨',
          description: "很治愈的韩式温情剧，充满了对精神病患的共情和关怀，且不乏令人大笑的幽默。两段爱情戏看起来是很典的韩剧套路，过于理想化的人设（无论是男主还女主，感觉非常符合异性恋彼此对恋爱对象的期待）有些令人出戏。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%B2%BE%E7%A5%9E%E7%97%85%E6%88%BF%E4%B9%9F%E4%BC%9A%E8%BF%8E%E6%9D%A5%E6%B8%85%E6%99%A8/";
            },},{id: "movies-我们与恶的距离",
          title: '我们与恶的距离',
          description: "还不错。我明白这部剧想要讨论的是什么，可是剧情实在不怎么有意思，演技也没有很打动我。以及，所有男性角色无一例外地令人生厌，不明白直女为什么喜欢。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E4%BB%AC%E4%B8%8E%E6%81%B6%E7%9A%84%E8%B7%9D%E7%A6%BB/";
            },},{id: "movies-绿夜",
          title: '绿夜',
          description: "女同性恋有自己的燃冬。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BB%BF%E5%A4%9C/";
            },},{id: "movies-俗女养成记",
          title: '俗女养成记',
          description: "打五星是因为满分只有五星。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BF%97%E5%A5%B3%E5%85%BB%E6%88%90%E8%AE%B0/";
            },},{id: "movies-俗女养成记2",
          title: '俗女养成记2',
          description: "观感是3.5星，犹豫了一下还是打4星吧。第二季人设有些崩，还有一些i男桥段实在是令人不爽。最喜欢的是阿英、阿琴、阿玲三代女性之间的感情，也是最令人动容的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%BF%97%E5%A5%B3%E5%85%BB%E6%88%90%E8%AE%B02/";
            },},{id: "movies-新闻女王",
          title: '新闻女王',
          description: "矮子里拔将军。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%96%B0%E9%97%BB%E5%A5%B3%E7%8E%8B/";
            },},{id: "movies-一把青",
          title: '一把青',
          description: "很难评的一部剧。一方面节奏拖沓让人不得不开倍速，另一方面转场太跳跃令人猝不及防。一方面山河破碎身世浮沉令人咋舌，另一方面很难共情到里面男人女人的感情。但凡有一点女性自我意识觉醒，很难不被台词剧情人设膈应到，虽然这也是很多剧的通病了。想到了秦芊仪一辈子都没去成美国散心，没想到朱青最终归来仍是女大。主题曲好听。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%80%E6%8A%8A%E9%9D%92/";
            },},{id: "movies-无人生还",
          title: '无人生还',
          description: "挺悬疑的剧，不过关于这些人过去的犯罪经历也太平铺直叙了。篇幅也有些长了，再精炼紧凑一点儿更好。还以为所有人在之后都会一起守着那一盘小人儿，没想到大家还是要回屋睡觉…总的来说缺乏一些“神剧”给我的震撼和赞叹。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E4%BA%BA%E7%94%9F%E8%BF%98/";
            },},{id: "movies-繁城之下",
          title: '繁城之下',
          description: "出乎意料的好看，在我看过的悬疑国产剧里面算是数一数二了。故事完整流畅，逻辑通顺且反转很多，很有悬念，制作精良。台词旁白也算是讲究了，在悬疑之外还有一些哲学思考。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%B9%81%E5%9F%8E%E4%B9%8B%E4%B8%8B/";
            },},{id: "movies-傲骨之战-1-6季",
          title: '傲骨之战 1-6季',
          description: "一口气看完六季，根本停不下来。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%82%B2%E9%AA%A8%E4%B9%8B%E6%88%98/";
            },},{id: "movies-年会不能停",
          title: '年会不能停！',
          description: "超出预期地好看，打工人爽剧。只不过最后董事长的“英明”形象仍然脱离不了“上面是好的，是执行坏了”那味儿。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C/";
            },},{id: "movies-涉过愤怒的海",
          title: '涉过愤怒的海',
          description: "呼吁关注青少年心理健康的宣传片。动机是好的，但是呈现出来的剧情太抓马了，有些架空。更希望可以通过更贴合普通人生活实际的情节出发，也许更能打动我。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B6%89%E8%BF%87%E6%84%A4%E6%80%92%E7%9A%84%E6%B5%B7/";
            },},{id: "movies-照明商店",
          title: '照明商店',
          description: "难得一见的在老中上映的老中女同，不容易。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%85%A7%E6%98%8E%E5%95%86%E5%BA%97/";
            },},{id: "movies-繁花",
          title: '繁花',
          description: "包装精美的龙傲天男频剧，胡歌的装逼演技令人呕吐，另外所有海报竟然都是他单人的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%B9%81%E8%8A%B1/";
            },},{id: "movies-龙猫",
          title: '龙猫',
          description: "长大后，会担心小梅走丢后受到伤害、妈妈没能从医院回家、小月的脸上再难有笑容。会害怕整部影片其实是个悲剧，前面笑得多轻松开心、后面就有多沉重悲痛。如果在雨夜看见等车的龙猫，也会吓得直接逃跑吧。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%BE%99%E7%8C%AB/";
            },},{id: "movies-大闹天宫",
          title: '大闹天宫',
          description: "看得几欲睡着，另外这个画风真的很不好看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%A7%E9%97%B9%E5%A4%A9%E5%AE%AB/";
            },},{id: "movies-千年女优",
          title: '千年女优',
          description: "“今敏”是一种风格。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%8D%83%E5%B9%B4%E5%A5%B3%E4%BC%98/";
            },},{id: "movies-喜欢你是你",
          title: '喜欢你是你',
          description: "看在女同性恋题材的份上加一星。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%96%9C%E6%AC%A2%E4%BD%A0%E6%98%AF%E4%BD%A0/";
            },},{id: "movies-想做饭的女人和想吃饭的女人-第二季",
          title: '想做饭的女人和想吃饭的女人 第二季',
          description: "厨姐家好可爱，东西看起来好吃，CP好甜蜜，女性角色好立体，看到“最终回”好心痛。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%83%B3%E5%81%9A%E9%A5%AD%E7%9A%84%E5%A5%B3%E4%BA%BA%E5%92%8C%E6%83%B3%E5%90%83%E9%A5%AD%E7%9A%84%E5%A5%B3%E4%BA%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3/";
            },},{id: "movies-岁月神偷",
          title: '岁月神偷',
          description: "普通人的一生，一场飓风便支离破碎，一次绝症便走到终点。无灾无难的每一天，便是至好至上的福。苦海无边，唯有安慰自己难一步、佳一步。摄影、立意、服化道佳，剧情俗套了一些但是依然动人。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B2%81%E6%9C%88%E7%A5%9E%E5%81%B7/";
            },},{id: "movies-怪兽上班-第一季",
          title: '怪兽上班 第一季',
          description: "特别搞笑。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%80%AA%E5%85%BD%E4%B8%8A%E7%8F%AD1/";
            },},{id: "movies-怪兽大学",
          title: '怪兽大学',
          description: "以前看皮克斯动画的时候，总觉得在搞笑、可爱、充满想象力以外缺少一些什么，看这部电影的时候我觉得不缺少了。积极乐观、努力聪明的大眼仔，祝你实现梦想。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%80%AA%E5%85%BD%E5%A4%A7%E5%AD%A6/";
            },},{id: "movies-那个夏天-剧场版",
          title: '那个夏天：剧场版',
          description: "实在是很震惊在2023年还能有这种《等一分钟》动画MV般PPT效果的动画电影…（flash）感觉像高中生的兴趣班作业。白底黑字的伤痛文学更是把我的无语推到了顶峰，仿佛在看百合吐槽菌首尔分菌，满脑子只有四个字：我不理解。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E9%82%A3%E4%B8%AA%E5%A4%8F%E5%A4%A9%E5%89%A7%E5%9C%BA%E7%89%88/";
            },},{id: "movies-周处除三害",
          title: '周处除三害',
          description: "“心灵导师”那段有些惊喜，男主“强”得有些不合理，程小美感情线莫名其妙，医生“主谋”这一点可以拍得更高明一点。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%91%A8%E5%A4%84%E9%99%A4%E4%B8%89%E5%AE%B3/";
            },},{id: "movies-超人总动员2",
          title: '超人总动员2',
          description: "中规中矩。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%B6%85%E4%BA%BA%E6%80%BB%E5%8A%A8%E5%91%982/";
            },},{id: "movies-梦之歌",
          title: '梦之歌',
          description: "隐喻拍得太晦涩的结果就是催眠。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%A2%A6%E4%B9%8B%E6%AD%8C/";
            },},{id: "movies-我爱你",
          title: '我爱你！',
          description: "3.5星。主线是三对老人的爱情，副线是不孝子孙。总的来说，所有剧情太在意料之中，人物有些脸谱化。对我来说欠缺一些真实感，很像硬凹的空中楼阁。夫妻自杀前那段有些感人，孝宴挥鞭挺爽。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E7%88%B1%E4%BD%A0/";
            },},{id: "movies-猜谜女士",
          title: '猜谜女士',
          description: "剧情俗套，但依然有趣且动人，加一星给两位女主+女导演。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%8C%9C%E8%B0%9C%E5%A5%B3%E5%A3%AB/";
            },},{id: "movies-美国小说",
          title: '美国小说',
          description: "虽然对美国的种族议题缺乏了解，但作为东亚女同性恋relate了一下，在系统仍然处于非公正状态的情况下，反“政治正确”却在悄然成为“政治正确”，本身就是一种讽刺了。这是一部很讨巧的电影，从不同的角度都可以解读出不同的群体秉持的价值观念，因此主题暧昧，隔靴搔痒。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%BE%8E%E5%9B%BD%E5%B0%8F%E8%AF%B4/";
            },},{id: "movies-轻音少女-剧场版",
          title: '轻音少女 剧场版',
          description: "疯疯癫癫的无忧女高中生们，还是挺搞笑的。唯一受不了的就是低幼的萌妹人设，多少有些降智。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BD%BB%E9%9F%B3%E5%B0%91%E5%A5%B3%E5%89%A7%E5%9C%BA%E7%89%88/";
            },},{id: "movies-这个杀手不太冷",
          title: '这个杀手不太冷',
          description: "不太能接受隐晦的恋童情节，枪战挺让人紧张的。总体来说，觉得排在这个位子过誉了，大概是因为是30年前的电影了…还有不得不吐槽一下这个什么鬼译名。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BF%99%E4%B8%AA%E6%9D%80%E6%89%8B%E4%B8%8D%E5%A4%AA%E5%86%B7/";
            },},{id: "movies-疯狂的石头",
          title: '疯狂的石头',
          description: "有些无聊，而且画风土到我无语。道哥在房间里大喊“我要翡翠”时隔壁真的听不到吗…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%96%AF%E7%8B%82%E7%9A%84%E7%9F%B3%E5%A4%B4/";
            },},{id: "movies-坠落的审判",
          title: '坠落的审判',
          description: "较为温和的女性主义电影，加一星支持。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%9D%A0%E8%90%BD%E7%9A%84%E5%AE%A1%E5%88%A4/";
            },},{id: "movies-椒麻堂会",
          title: '椒麻堂会',
          description: "感觉在看一种很新的电影。前半段看得几欲睡着，后面入戏了之后又戛然而止。人物塑造、剧情推进、拍摄手法可以说是有些抽象在的…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%A4%92%E9%BA%BB%E5%A0%82%E4%BC%9A/";
            },},{id: "movies-热辣滚烫",
          title: '热辣滚烫',
          description: "乐莹（玲）太励志了，支持她。只是电影本身稍微无趣了一些（或许是因为原版百元之恋就是这么无趣），相对来说更出彩的反而是片头和片尾…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%83%AD%E8%BE%A3%E6%BB%9A%E7%83%AB/";
            },},{id: "movies-请回答1988",
          title: '请回答1988',
          description: "终于看完了这部豆瓣高分电视剧榜no.1，一些搞笑而琐碎的日常夹杂着一些煽情的鸡汤。“人无法同时拥有青春和对青春的感受”，最后一集看见双门洞最终人去楼空还是挺唏嘘的。里面几对cp有些一言难尽，金正峰和张曼玉稍微正常一点儿，相对来说更喜欢邻里关系的刻画。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%AF%B7%E5%9B%9E%E7%AD%941988/";
            },},{id: "movies-不够善良的我们",
          title: '不够善良的我们',
          description: "太性缘脑了，整个剧就围绕着一个男的在那儿这这那那。最无敌的是一句“我很爱我老婆”就直接让简庆芬突然醒悟何谓“甜蜜”，让张怡静“妒忌”，仿佛之前那些被忽略轻视的痛苦都不复存在。实在不知道想要表达什么，一会儿佛学一会儿物理学，其实内核还是爱男那一套。🫠",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%8D%E5%A4%9F%E5%96%84%E8%89%AF%E7%9A%84%E6%88%91%E4%BB%AC/";
            },},{id: "movies-第二十条",
          title: '第二十条',
          description: "主旨有一定现实意义，但无用无趣的内容有些多。马丽和雷佳音的家庭生活像在演春晚小品，吕玲玲莫名其妙就从一个当仁不让的烈女变成了甘愿退居身后（甚至被停职？）的观众，女性角色再次被边缘化、客体化。我想了一下片中令我不适的地方，大概还是传达着导演的男本位审美。以及康村恶霸被郝跳楼之后就吓得纷纷认罪，我只能想到他们害怕她做鬼后也不放过他们这个理由…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%AC%AC%E4%BA%8C%E5%8D%81%E6%9D%A1/";
            },},{id: "movies-轻音少女",
          title: '轻音少女',
          description: "可爱搞笑。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BD%BB%E9%9F%B3%E5%B0%91%E5%A5%B3/";
            },},{id: "movies-新生",
          title: '新生',
          description: "雷点与笑点并存的下饭国产悬疑剧，能让我从头到尾难以入戏也是很不容易。看了前几集以为是套的无人生还的壳儿，再看看以为是精修版毛骗，看到最后是包装成巧克力的💩。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%96%B0%E7%94%9F/";
            },},{id: "movies-我的阿勒泰",
          title: '我的阿勒泰',
          description: "点开前以为是无聊的边疆异性恋爱情故事，没想到还挺惊喜的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%88%91%E7%9A%84%E9%98%BF%E5%8B%92%E6%B3%B0/";
            },},{id: "movies-八角笼中",
          title: '八角笼中',
          description: "一般。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%85%AB%E8%A7%92%E7%AC%BC%E4%B8%AD/";
            },},{id: "movies-达拉斯买家俱乐部",
          title: '达拉斯买家俱乐部',
          description: "我不是药神之达拉斯恐同艾滋病牛仔版。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E8%BE%BE%E6%8B%89%E6%96%AF%E4%B9%B0%E5%AE%B6%E4%BF%B1%E4%B9%90%E9%83%A8/";
            },},{id: "movies-世界倾斜23-5度",
          title: '世界倾斜23.5度',
          description: "女同性恋自己的甜宠剧，友情四星。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E4%B8%96%E7%95%8C%E5%80%BE%E6%96%9C23.5%E5%BA%A6/";
            },},{id: "movies-心迷宫",
          title: '心迷宫',
          description: "差点儿错过的一部佳作，什么烈日灼心给它提鞋都不配。充满了黑色幽默的有意思的电影，牛逼的剧情、牛逼的叙事手法，有些镜头晃得人头晕也可以原谅了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%BF%83%E8%BF%B7%E5%AE%AB/";
            },},{id: "movies-暴裂无声",
          title: '暴裂无声',
          description: "中国人自己的《寄生虫》。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9A%B4%E8%A3%82%E6%97%A0%E5%A3%B0/";
            },},{id: "movies-机器人之梦",
          title: '机器人之梦',
          description: "阿狗和阿机相爱了，它们一起度过了一段快乐而难忘的时光。然而天有不测风云，一场意外让它们就此生离。阿狗找到了阿机的替身—阿金，而阿机也因被阿坏救赎而重获新生… 兔子和鳄鱼好坏，啐。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B9%8B%E6%A2%A6/";
            },},{id: "movies-无双",
          title: '无双',
          description: "前面看起来真是装逼味儿十足，看到后面已经猜到了是什么反转。十分不接地气的电影，不过还挺令人发笑的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%97%A0%E5%8F%8C/";
            },},{id: "movies-头脑特工队2",
          title: '头脑特工队2',
          description: "很搞笑。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A4%B4%E8%84%91%E7%89%B9%E5%B7%A5%E9%98%9F2/";
            },},{id: "movies-姥姥的外孙",
          title: '姥姥的外孙',
          description: "很现实很讽刺，这里面的男的真是看得我想人人来一拳。我哭的是这个可爱可怜又可悲的“东亚女”的一生：被男权蚕食到死竟依然爱男，循环往复。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A7%A5%E5%A7%A5%E7%9A%84%E5%A4%96%E5%AD%99/";
            },},{id: "movies-山花烂漫时",
          title: '山花烂漫时',
          description: "鲜活、幽默、动人。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B1%B1%E8%8A%B1%E7%83%82%E6%BC%AB%E6%97%B6/";
            },},{id: "movies-机智医生生活-1-2季",
          title: '机智医生生活（1-2季）',
          description: "乐队表演的部分比较无聊… 以及，韩剧里面不谈恋爱是拍不下去的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%BA%E6%99%BA%E5%8C%BB%E7%94%9F%E7%94%9F%E6%B4%BB/";
            },},{id: "movies-好团圆",
          title: '好团圆',
          description: "这种东西拍出来就是为了气观众的吗？",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A5%BD%E5%9B%A2%E5%9C%86/";
            },},{id: "movies-抓娃娃",
          title: '抓娃娃',
          description: "无甚感想，这种欲言又止，止言又欲的表达方式让人不知道这种电影拍出来究竟有什么意义，《马继业的世界》。最不喜欢的地方是旨在反映/讽刺现实，但夸张的剧情/人设却严重脱离现实。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%8A%93%E5%A8%83%E5%A8%83/";
            },},{id: "movies-朱同在三年级丢失了超能力",
          title: '朱同在三年级丢失了超能力',
          description: "好久没看过这么弱智且无聊的电影了，看得想睡觉。心情跟老师在《美丽的小花》下打的大大的红问号一样。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%9C%B1%E5%90%8C%E5%9C%A8%E4%B8%89%E5%B9%B4%E7%BA%A7%E4%B8%A2%E5%A4%B1%E4%BA%86%E8%B6%85%E8%83%BD%E5%8A%9B/";
            },},{id: "movies-小巷人家",
          title: '小巷人家',
          description: "好看，除了范丞丞演得依托答辩。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6/";
            },},{id: "movies-出走的决心",
          title: '出走的决心',
          description: "好看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%87%BA%E8%B5%B0%E7%9A%84%E5%86%B3%E5%BF%83/";
            },},{id: "movies-狂飙",
          title: '狂飙',
          description: "现代老登剧集代表作，光看这海报登味儿就溢出来了。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%8B%82%E9%A3%99/";
            },},{id: "movies-白夜破晓",
          title: '白夜破晓',
          description: "很困惑，吴征的U盘到底是什么时候到警方手里的？黑社会头目不惜犯下滔天罪行栽赃原因竟然是“她怀了我今生唯一一个孩子”…",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%99%BD%E5%A4%9C%E7%A0%B4%E6%99%93/";
            },},{id: "movies-照明商店",
          title: '照明商店',
          description: "在设定的介绍上比电影版更完整，但感觉不如电影版好看啊...",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E7%85%A7%E6%98%8E%E5%95%86%E5%BA%97-%E5%89%A7%E9%9B%86/";
            },},{id: "movies-清明上河图密码",
          title: '清明上河图密码',
          description: "以宋朝为背景的古装悬疑剧。比较雷人的是时常出现的一眼假的虚拟背景，个别演员令人出戏的台词，以及时而令人沉默的剧情。连环案的设计还可以，但是其精巧程度一般，没有什么出人意料的出彩地方。作为下饭剧还可以，有点儿搞笑和意思，吃得下饭。看到后面只想着快点儿看完，比起这种26集，更喜欢8到12集的长度。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE%E5%AF%86%E7%A0%81/";
            },},{id: "movies-唐朝诡事录之西行",
          title: '唐朝诡事录之西行',
          description: "所谓的“双男主”剧果然臭气熏天。漫漫 40 集可算是看完了，作为悬疑剧用来下饭还是挺有意思的。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%94%90%E6%9C%9D%E8%AF%A1%E4%BA%8B%E5%BD%95%E4%B9%8B%E8%A5%BF%E8%A1%8C/";
            },},{id: "movies-梦境制片厂",
          title: '梦境制片厂',
          description: "“头脑特工队”的衍生剧集，有趣，只恨太短了不够看。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E6%A2%A6%E5%A2%83%E5%88%B6%E7%89%87%E5%8E%82/";
            },},{id: "movies-好东西",
          title: '好东西',
          description: "终于看上噜。我的评价是：舒适。从画面到配乐，从剧情到台词，爱死这种女性叙事了。有点儿“芭比”的影子，但立意更明确、情节更好看、感情更动人。邵艺辉这人行，能处。",
          section: "Movies",handler: () => {
              window.location.href = "/movies/%E5%A5%BD%E4%B8%9C%E8%A5%BF/";
            },},{id: "news-乐府周刊第-1-期",
          title: '乐府周刊第 1 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC1%E6%9C%9F/";
            },},{id: "news-乐府周刊第-2-期",
          title: '乐府周刊第 2 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC2%E6%9C%9F/";
            },},{id: "news-乐府周刊第-3-期",
          title: '乐府周刊第 3 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC3%E6%9C%9F/";
            },},{id: "news-乐府周刊第-4-期",
          title: '乐府周刊第 4 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC4%E6%9C%9F/";
            },},{id: "news-乐府周刊第-5-期",
          title: '乐府周刊第 5 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC5%E6%9C%9F/";
            },},{id: "news-乐府周刊第-6-期",
          title: '乐府周刊第 6 期',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/%E7%AC%AC6%E6%9C%9F/";
            },},{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
