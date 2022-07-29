const goods = [
    {
        goodsId: '10001',
        goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/vVORwq7j4JJPH3LfR55.jpg',
        goodsTitle: '南酸枣粒 酸甜解暑',
        goodsSubtitle: '江西特产 五眼果 249g',
        goodsPrice: '25.8',
        goodsNum: '2',
    },
    {
        goodsId: '10002',
        goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/kSJmZOJWythpbOFnMnb.jpg',
        goodsTitle: '麻花小辫 迷你酥条',
        goodsSubtitle: '山药小麻花 249g',
        goodsPrice: '88.8',
        goodsNum: '1',
    },
    {
        goodsId: '10003',
        goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8015.png',
        goodsTitle: '香菇脆 即食果蔬',
        goodsSubtitle: '江西风味 249g',
        goodsPrice: '100',
        goodsNum: '10',
    },
    {
        goodsId: '10004',
        goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8002_v1.png',
        goodsTitle: '酸甜可口 风味独特',
        goodsSubtitle: '菩提圣果 圣果可串手串 220g',
        goodsPrice: '30.5',
        goodsNum: '5',
    }
]

export const getAllGoodsRequest = () => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(goods);
        }, 1000);
    })
    return p
}