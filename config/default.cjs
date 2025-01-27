const fs = require('fs')
const path = require('path')

const SecretKey = process.env.SECRET_KEY || 'secret.key'

module.exports = {
  debug: true,
  host: '0.0.0.0',
  port: 8000,
  api: {
    prefix: '/api'
  },
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      database: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 5,
      max: 10
    },
    migrations: {
      directory: path.join('db', 'migrations')
    },
    seeds: {
      directory: path.join('db', 'seeds')
    }
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    username: null,
    password: null,
    enableAutoPipelining: true
  },
  session: {
    cookieName: 'sid',
    sessionName: 'session',
    secret: process.env.SECRET || 'Jeqrldi6lyFKHtN5O5Sjgx0l2z5KuTH7',
    cookie: {
      expires: 1800000,
      path: '/',
      secure: false
    }
  }
}
