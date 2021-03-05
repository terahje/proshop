import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Terahje Gratkowski',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Pat Mac',
        email: 'pacmac@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Boo Boo',
        email: 'booboo@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users