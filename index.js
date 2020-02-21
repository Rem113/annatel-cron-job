const mongoose = require("mongoose");
const action = require("./models/action");

mongoose
  .connect("mongodb://admin:gabhil@88.218.220.20:9000/Annatel?authSource=admin")
  .catch(err => console.error(err));

const now = Date.now();
const nowMinusSevenDays = now - 7 * 24 * 60 * 60 * 1000;
const formattedDate = new Date().toLocaleString();

action
  .remove({ insertedAt: { $lte: nowMinusSevenDays } })
  .then(res =>
    console.log(`[${formattedDate}] Deleted ${res.deletedCount} actions`)
  )
  .catch(err => console.error(`[${formattedDate}] ${err}`));
