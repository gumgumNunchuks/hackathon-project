declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_HOST: string
            DB_PORT: string
            DB_DATABASE: string
            DB_USERNAME: string
            DB_PASSWORD: string
            SECRET_KEY:string
        }
    }
}

export { }

