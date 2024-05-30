const routers = [
    {
        path: '/enterprise',
        router: (new (require('./routers/EnterpriseRouter'))).getRouter()
    },
    {
        path: '/organisation',
        router: (new (require('./routers/DeveloperRouter'))).getRouter()
    }
]

module.exports = routers;