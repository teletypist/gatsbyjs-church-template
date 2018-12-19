module.exports = {
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/store/`,
            },
        },
        `gatsby-plugin-netlify-cms`
    ],
}
