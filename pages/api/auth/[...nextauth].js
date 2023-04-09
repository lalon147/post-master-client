import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions={
    session:{
        strategy:"jwt"
    },
    providers: [
        CredentialsProvider({
         async authorize(credentials,req){
            const {email,password}=credentials

            if(email!=="lalon@gmail.com" || password!=="1234"){
                throw new Error("EMAIL OR PASSWORD DID NOT")
            }
            else{
                return {name:"lalon",email:"lalon@gmail.com"}
            }
         }
        })
      ],
    pages:{
        signIn:"/app/login/page.jsx"
    }
}


export default NextAuth(authOptions)