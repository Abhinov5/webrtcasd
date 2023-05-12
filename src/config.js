require('dotenv').config()
module.exports = {
    METERED_DOMAIN: process.env.METERED_DOMAIN || "abhishek.metered.live",
    METERED_SECRET_KEY: process.env.METERED_SECRET_KEY || "DyZqERwmQ3zJJeUQO6cbBrcnUwKO0SvbAnLwv2oupkjtAyQX",
    port: process.env.PORT || 4000
}