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
          section: "News",},{
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
