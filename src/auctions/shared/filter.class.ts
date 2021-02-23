export class FilterClass {
  //Filter by tipe of auction
  legacyAuction :boolean;
  binAuction :boolean;

  //Filters by type of iten
  includePets :boolean;
  includeDungeonItens :boolean;
  includeBooks :boolean;

  //Filters by values
  maxBinValue :number;
  minBinValue :number;
}
