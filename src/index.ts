import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";

const main = async ()=> {
    const orm = await MikroORM.init({
        dbName: "selcitra",
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "@bspr4215#123_postres",
        type: "postgresql",
        entities: [Post],
        debug: !__prod__
    });

    const post = orm.em.create(Post, {title: "My first post"});
    await orm.em.persistAndFlush(post);
    console.log("----sql 2----");
    await orm.em.nativeInsert(Post, {title: "My first post"});
};

main().catch(err => {
    console.error(err);
});