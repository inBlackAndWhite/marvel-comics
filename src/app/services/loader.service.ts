import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

const PRIV_KEY = "aec85d6083bf364c0bb74d7868f0a26ebdc98418";
const PUBLIC_KEY = "855c597d2ef62a8e2e406fb6917a9f25";

@Injectable()
export class LoaderService {

  constructor() { }

  comics: Array<Object> = [];

  loadComics(): Promise<number> {
    let ts = new Date().getTime().toString();
    let hash = Md5.hashStr(ts + PRIV_KEY + PUBLIC_KEY);
    let authorization = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

    let caracterId = '1009368';
    let orderBy = 'orderBy=onsaleDate&'
    let path = `/characters/${caracterId}/comics?${orderBy}`;
    let url = `https://gateway.marvel.com:443/v1/public`;

    let fullUrl = `${url}${path}${authorization}`;

    return fetch(fullUrl).then(readableStm => readableStm.json())
                         .then(response => {
                           return this.comics.push(...response.data.results);
                         });
  }

}
