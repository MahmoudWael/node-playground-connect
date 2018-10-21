import express from 'express';

import {
    client,
    index,
    type
} from '../elasticsearch'

var router = express.Router();

router.get('/', async (req, res) => {
    const response = await client.search({
        index: index,
        type: type,
        body: {
            query: {
                match: {
                    username: 'Rowe Chandler'
                }
            }
        }
    })

    res.json(response.hits.hits);

});

module.exports = router;