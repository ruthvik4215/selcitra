"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const post_1 = require("./entities/post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: "selcitra",
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "@bspr4215#123_postres",
        type: "postgresql",
        entities: [post_1.Post],
        debug: !constants_1.__prod__
    });
    const post = orm.em.create(post_1.Post, { title: "My first post" });
    await orm.em.persistAndFlush(post);
    console.log("----sql 2----");
    await orm.em.nativeInsert(post_1.Post, { title: "My first post" });
};
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map