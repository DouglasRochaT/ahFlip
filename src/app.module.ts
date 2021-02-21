import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionsController } from './auctions/auctions.controller';
import { AuctionsService } from './auctions/auctions.service';

@Module({
  imports: [],
  controllers: [AppController, AuctionsController],
  providers: [AppService, AuctionsService],
})
export class AppModule {}
