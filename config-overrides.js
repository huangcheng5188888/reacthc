const {
    override,
    addWebpackAlias
} = require("customize-cra")
const path = require("path")



const alter_config = ()=>(config,env)=>{
    const oneOf_loc = config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[
        {
            test:/\.scss$/,
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]
    return config
}

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, 'src'),
        "components": path.resolve(__dirname, 'src/components'),
        "views": path.resolve(__dirname, 'src/views'),
        "data": path.resolve(__dirname, 'src/data')
    })
)