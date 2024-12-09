import { Injectable } from '@nestjs/common';
import { Bucket, Cluster, Collection } from 'couchbase';
import * as couchbase from 'couchbase';

@Injectable()
export class CouchBaseAdapterService {
  private collection: Collection;

  async connectDb(): Promise<Cluster> {
    const clusterConnStr = process.env.CLUSTER_CONN_STR_COUCH;
    const username = process.env.USERNAME_COUCH;
    const password = process.env.PASSWORD_COUCH;

    try {
      const cluster = await couchbase.connect(clusterConnStr, {
        username: username,
        password: password,
      });

      return cluster;
    } catch (e) {
      return e;
    }
  }

};