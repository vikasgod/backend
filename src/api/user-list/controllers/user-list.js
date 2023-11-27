'use strict';

/**
 * user-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-list.user-list')
// module.exports = createCoreController('api::user-list.user-list',({ strapi }) =>  ({
//     async find(ctx) {
//         const result = await super.find(ctx);
//         // console.log("objectdfhgdhfdhfdhfhdffghfgdfgdfg",result.data);
//     }
// }))
