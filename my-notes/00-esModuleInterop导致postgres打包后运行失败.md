# 踩雷

[issue - porsager/postgres#297](https://github.com/porsager/postgres/issues/297)

似乎是因为 build 之后 NodeJS 无法调用 postgres 库的 ESModule 的问题。

解决方法，在 `tsconfig.json` 中设置 `compilerOptions.esModuleInterop` 为 `true`.

关于这点，请查看 *[Great import schism: Typescript confusion around imports explained](https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2)* 一文。

