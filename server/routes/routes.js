const route = require("express").Router();
const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    node: 'http://localhost:9200'
});

const titles = [{
        id: 1,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",

    },
    {
        id: 2,
        title: 'Egg with Protien',
        author: 'Coursera',
        imageLink: 'https://post.healthline.com/wp-content/uploads/2020/09/AN274-Eggs-carton-732x549-Thumb.jpg',
        price: '50',
        date: new Date()
    },
    {
        id: 3,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 4,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 5,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 6,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 7,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 8,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 9,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    },
    {
        id: 10,
        title: 'Protien Shake',
        price: '120',
        date: new Date(),
        imageLink: "https://as2.ftcdn.net/v2/jpg/03/15/17/27/1000_F_315172714_Nkbsndlpr3TxSLQQl1fKdUzb05Ao41bH.jpg",
    }
];

const body = titles.flatMap((doc, index) => [
    { index: { _index: 'titles', _id: index + 1 } },
    doc
]);




route.post('/search', async(req, res) => {



    const query = req.body.query;



    async function createTitles() {
        const { response } = await client.bulk({ body: body, refresh: true });

        if (response) {
            console.log(response.errors);
        }
    }

    createTitles().catch(console.log);

    // Let's search!
    const result = await client.search({
        index: 'titles',
        body: {
            query: {
                fuzzy: {
                    title: {
                        value: query,
                        fuzziness: 2
                    }
                }
            }
        }
    }).then(function(resp) {
            console.log("Successful query!");
            return res.send(JSON.stringify(resp.hits.hits, null, 4));
        },
        function(err) {
            console.trace(err.message);
        });

})

module.exports = route;