import { Injectable } from '@nestjs/common';
import { AuctionClass } from './shared/auction.class';
import { AuctionsListClass } from './shared/auctions-list.class';
const cacheManager = require("cache-manager");
const { Client } = require("@zikeji/hypixel");


@Injectable()
export class AuctionsService {
  private cache = cacheManager.caching({store: 'memory', max: 100, ttl: 30});
  private client = new Client("aad15ae1-a30e-4ced-95a2-6e10af03bc7a", this.cache);

  getAll() :AuctionClass[]{
    let auctionsPage = this.client.skyblock.auctions.page().then(function(result :AuctionsListClass){
      
    });


    return auctionsPage.auctions; //Retorno Temporário
  }

  getByPage(page: number): AuctionsListClass{
    let auctions :AuctionsListClass = this.client.skyblock.auctions.page(page);
    return auctions;
  }


}
