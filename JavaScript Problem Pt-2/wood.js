/**
 * Chair ---> 3 CFT
 * Table ---> 10 CFT
 * Bed -----> 50 CFT
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const woodForChair = chairQuantity * perChairWood;
  const woodForTable = tableQuantity * perTableWood;
  const woodForBed = bedQuantity * perBedWood;

  const totalWoodCost = woodForChair + woodForTable + woodForBed;

  return `Total wood cost for all item: ${totalWoodCost} CFT.`;
}

let roomDecoration = woodQuantity(2, 2, 1);
console.log(roomDecoration);
