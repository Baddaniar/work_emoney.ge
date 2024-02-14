import Credentials from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
const users = [
    {email: 'admin@gmail.com', password: 'admin', name: 'admin'},
    {email: 'demo@gmail.com', password: 'demo123', name: 'user'},
]

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                
                // const res = await fetch("endpoint!", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                //   })
                //   const user = await res.json()
            
                //   if (res.ok && user) {
                //     return user
                //   }
                //   return null

                // placeholder
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {

                    const {password, ...user} = currentUser;

                    return user
                }
                return null
            },
            pages: {
                signIn: '/'
            }
        })
    ]
}

const handler = NextAuth(authConfig)


export {handler as GET, handler as POST}