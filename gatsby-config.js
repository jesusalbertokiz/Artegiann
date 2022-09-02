module.exports = {
  siteMetadata: {
    title: `ArteGiann NFT`,
    description: `Giannella, es una joven de 16 años, nacida en Valencia Venezuela, desde niña le ha gustado el mundo de las artes, desarrollando la pintura, el dibujo, esculpe en plastilina, diseña, escribe cuentos, es emprendedora, creo su propia marca de diseños exclusivos ArteGiann y también es creadora digital de NFTs.`,
    author: `@artegiannct`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
