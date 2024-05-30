const routers = [
    {
        path: '/enterprise',
        router: (new (require('./routers/EnterpriseRouter'))).getRouter()
    }
]

module.exports = routers;