import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import postgres, { Sql } from 'postgres'

@Injectable()
export class AppService {
  public pgsql: Sql<{}>
  constructor(configService: ConfigService) {
    const pgConnectStr = configService.get<string>('POSTGRES_CONN_STR')
    this.pgsql = postgres(pgConnectStr)
  }

  async getPostGISVersion() {
    const pg = this.pgsql
    const info = await pg`
      select postgis_full_version()
    `

    return info
  }
}
