# 简介

[NestJS](https://github.com/nestjs/nest) + [postgres](https://github.com/porsager/postgres) 写的个人 OGC API 实践。

全程使用 TypeScript，暂时使用 express 作为基础设施。

# 已有 API

`GET /version`

```json
[
  {
    "postgis_full_version": "POSTGIS=\"3.1.0alpha2 b6f415d\" [EXTENSION] PGSQL=\"130\" GEOS=\"3.8.1-CAPI-1.13.3\" PROJ=\"7.1.1\" LIBXML=\"2.9.1\" LIBJSON=\"0.11\" LIBPROTOBUF=\"1.0.2\" WAGYU=\"0.5.0 (Internal)\""
  }
]
```