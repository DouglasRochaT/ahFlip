export class AuctionClass {
  uuid: string;
  auctioneer: string;
  profile_id: string;
  coop: string[];
  start: number;
  end: number;
  item_name: string;
  item_lore: string;
  extra: string;
  category: string;
  tier: string;
  starting_bid: number;
  claimed: boolean;
  claimed_bidders: string[];
  highest_bid_amount: number;
  profit_margin: number;
  bids: {
    /**
     * UUID of the auction.
     */
    auction_id: string;
    /**
     * Minecraft UUID of the bidder.
     */
    bidder: string;
    /**
     * The Hypixel SkyBlock profile ID of the profile the bidder was on when they placed the bid.
     */
    profile_id?: string;
    /**
     * The amount in coins the bid is for.
     */
    amount: number;
    /**
     * Unix timestamp the bid was placed.
     */
    timestamp: number;
  }[];
  bin: boolean;
  /**
   * Base64 encoded NBT data for the item.
   */
  item_bytes: string;
}
