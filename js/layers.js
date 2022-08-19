addLayer("s", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "寻觅", // 这是节点上显示的字母
    position: 0, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
        cishu: new ExpantaNum(0),
        luoli: new ExpantaNum(0),
        shaonv: new ExpantaNum(0),
        yujie: new ExpantaNum(0),
        xionggui: new ExpantaNum(0),
    }},
    color: "",
    resource: "寻觅次数", // 重置获得的资源名称
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){return true},
    tooltip:'',
    clickables: {
        11: {
            title:"<h1>寻找</h1>",
            display(){return '用<h1>三</h1>分钟寻找<br><h2>你喜欢的人</h2>'},
            canClick(){if (player.points.gte(180)) return true
                else return false
            },
            onClick(){
                player.points = player.points.sub(180)
                player.s.cishu = player.s.cishu.add(1)
                var x = zero
                x = x.add(Math.random())
                if(x.gte(0.18))
                {
                    player.s.xionggui = player.s.xionggui.add(1)
                }
                else if(x.gte(0.12))
                {
                    player.s.luoli = player.s.luoli.add(1)
                }
                else if(x.gte(0.06))
                {
                    player.s.shaonv = player.s.shaonv.add(1)
                }
                else
                {
                    player.s.yujie = player.s.yujie.add(1)
                }
                return
            },
        },
    },
    tabFormat: {
        寻觅: {
            content:[
                "blank",
                ["display-text",
                function() { return '你寻找了' + format(player.s.cishu) + "次"},
                { "color": "white", "font-size": "24px",}],
                "blank",
                ["row", [ ["clickable", 11],]],
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.luoli) + "个萝莉"},
                { "color": "white", "font-size": "24px",}],
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.shaonv) + "个少女"},
                { "color": "white", "font-size": "24px",}],
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.yujie) + "个御姐"},
                { "color": "white", "font-size": "24px",}],
                ["display-text",
                function() { return '你找到了' + format(player.s.xionggui) + "个兄贵"},
                { "color": "white", "font-size": "24px",}],
            ],
        },
    },
}),

addLayer("x", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "兄贵", // 这是节点上显示的字母
    position: 1, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
    }},
    color: "#ac502a",
    resource: "兄贵", // 重置获得的资源名称
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){
        if(player.s.xionggui.gte(1))
        return true
        else return false
    },
    tooltip:'',
    upgrades: {
        11: {
            fullDisplay(){return "叫上好朋友帮你一起寻找<br>花费:10兄贵"},
            canAfford(){
                if (player.s.xionggui.gte(10)) return true
                else return false
            },
            onPurchase(){
                player.s.xionggui = player.s.xionggui.sub(10)
            },
        },
        12: {
            fullDisplay(){return "叫上更多好朋友帮你一起寻找<br>花费:50兄贵"},
            canAfford(){
                if (player.s.xionggui.gte(50)) return true
                else return false
            },
            onPurchase(){
                player.s.xionggui = player.s.xionggui.sub(50)
            },
        },
        13: {
            fullDisplay(){return "叫上超多好朋友帮你一起寻找<br>花费:100兄贵"},
            canAfford(){
                if (player.s.xionggui.gte(100)) return true
                else return false
            },
            onPurchase(){
                player.s.xionggui = player.s.xionggui.sub(100)
            },
        },
    },
    tabFormat: {
        兄贵: {
            content:[
                "blank",
                ["display-text",
                function() { return '你有' + format(player.s.xionggui) + "个兄贵"},
                { "color": "white", "font-size": "24px",}],
                "blank",
                ["row", [ ["upgrade", 11],["upgrade", 12],["upgrade", 13]],],
            ],
        },
    },
})

addLayer("l", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "萝莉", // 这是节点上显示的字母
    position: 0, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
    }},
    color: "",
    resource: "萝莉", // 重置获得的资源名称
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){
        if(player.s.luoli.gte(1))
        return true
        else return false
    },
    tooltip:'',
    tabFormat: {
        萝莉: {
            content:[
                "blank",
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.luoli) + "个萝莉"},
                { "color": "white", "font-size": "24px",}],
            ],
        },
    },
})

addLayer("n", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "少女", // 这是节点上显示的字母
    position: 1, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
    }},
    color: "",
    resource: "少女", // 重置获得的资源名称
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){
        if(player.s.shaonv.gte(1))
        return true
        else return false
    },
    tooltip:'',
    tabFormat: {
        少女: {
            content:[
                "blank",
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.shaonv) + "个少女"},
                { "color": "white", "font-size": "24px",}],
            ],
        },
    },
})

addLayer("y", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "御姐", // 这是节点上显示的字母
    position: 2, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
    }},
    color: "",
    resource: "御姐", // 重置获得的资源名称
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){
        if(player.s.yujie.gte(1))
        return true
        else return false
    },
    tooltip:'',
    tabFormat: {
        御姐: {
            content:[
                "blank",
                ["display-text",
                function() { return '你喜欢上了' + format(player.s.yujie) + "个御姐"},
                { "color": "white", "font-size": "24px",}],
            ],
        },
    },
})