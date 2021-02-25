import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionClass } from './shared/auction.class';
import { AuctionsListClass } from './shared/auctions-list.class'
import { FilterClass } from './shared/filter.class';


@Controller('auctions')
export class AuctionsController {

  constructor(private auctionsService: AuctionsService){}
  
  @Get('/')
  async getAll() :Promise<AuctionClass[]>{
    return this.auctionsService.getAll();
  }

  @Get('/:page')
  async getByPage(@Param('page') page: string): Promise<AuctionsListClass>{
    return this.auctionsService.getByPage(+page);
  }

  @Post('/filter')
  async showAuctionsFiltered(@Body() filter :FilterClass) :Promise<AuctionClass[]>{
    return this.auctionsService.getFiltered(filter);
  }

  @Post('/flip')
  async showAuctionByMargin(@Body() filter :FilterClass):Promise<AuctionClass[]>{
    return this.auctionsService.getAuctionsByProfitMargin(filter);
  }
}
