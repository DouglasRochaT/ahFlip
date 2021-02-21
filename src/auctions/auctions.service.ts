import { Injectable } from '@nestjs/common';
import { AuctionClass } from './shared/auction.class';
import { AuctionsListClass } from './shared/auctions-list.class';
const cacheManager = require("cache-manager");
const { Client } = require("@zikeji/hypixel");


@Injectable()
export class AuctionsService {
  private cache = cacheManager.caching({store: 'memory', max: 100, ttl: 30});
  private client = new Client("aad15ae1-a30e-4ced-95a2-6e10af03bc7a", this.cache);
  
  async getAll() :Promise<AuctionClass[]>{
    let auctions: AuctionClass[];
    let numberOfPages :number;
    let pageRequests :Promise<AuctionsListClass>[] = new Array();

    await this.client.skyblock.auctions.page(0).then(function(result :AuctionsListClass){
      auctions = result.auctions;
      numberOfPages = result.totalPages;
    });

    for (let pageIndex = 1; pageIndex < 4; pageIndex++) {
      pageRequests.push(this.client.skyblock.auctions.page(pageIndex));
    }

    await Promise.all(pageRequests).then(function(result :AuctionsListClass[]){
      result.forEach(function(auctionList){
        auctions = auctions.concat(auctionList.auctions);
      });
    })
    return auctions;
  }

  getByPage(page: number): AuctionsListClass{
    let auctions :AuctionsListClass = this.client.skyblock.auctions.page(page);
    return auctions;
  }
}
