const unified = require('unified')
const parse = require('remark-parse')

const success = 'Auto: Maintainer Pinged';
const nofound = 'Auto: Route Not Found';
const nomainter = 'Auto: No Maintainer Found'
const ignoreUsername = []; // Ignore user who don't want to be pinged.

(async() => {
    let a = `
### 路由地址

暂无

### 完整路由地址

暂无

### 相关文档

https://docs.rsshub.app/install/#shou-dong-bu-shu

### 预期是什么？

预期：按照 手动部署 手册，能够成功运行： \`npm ci --production\`  命令。

### 实际发生了什么？

实际上，发现了如下错误：
`
    const file = await unified()
    .use(parse)
    .parse(a)

    console.log(JSON.stringify(file, null, 2))
})()


// module.exports = async ({ github, context, core }, body, number, sender) => {

// };
