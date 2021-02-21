import { AuctionClass } from "./auction.class";

export class AuctionsListClass {
  success: boolean;
  page: number;
  totalPages: number;
  totalAuctions: number;
  lastUpdated: number;
  auctions: AuctionClass[];
}
