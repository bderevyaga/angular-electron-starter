import {RedisClient, ServerInfo} from 'redis';

export class RedisUtil {

    constructor(public connect: RedisClient) {

    }

    public keys(pattern: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.connect.keys(pattern, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public rename(key: string, newkey: string): Promise<'OK'> {
        return new Promise((resolve, reject) => {
            this.connect.rename(key, newkey, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public del(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connect.del(key, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public get(key: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.connect.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public set(key: string, value: string): Promise<'OK'> {
        return new Promise((resolve, reject) => {
            this.connect.set(key, value, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public bitcount(key: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connect.bitcount(key, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public strlen(key: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connect.strlen(key, (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }

    public scan(pattern: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.connect.scan('0', 'MATCH', pattern, 'COUNT', '50', (err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply[1]);
            });
        });
    }

    public info(): Promise<ServerInfo> {
        return new Promise((resolve, reject) => {
            this.connect.info((err, reply) => {
                if (err) {
                    reject(err);
                }

                resolve(reply);
            });
        });
    }
}
