const PORT=process.env.PORT || 3232;
const DATABASE_URL=process.env.DATABASE_URL ||
    //"postgres://ppuser:pppass@localhost:5432/passportdb"

   // "mysql://ppuser:pppass@localhost:3306/passportdb"
    "mysql://userauth:userauth@localhost:3306/userauth"
exports=module.exports={PORT,DATABASE_URL}



