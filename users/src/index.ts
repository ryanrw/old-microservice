import { server } from './app'

const app = server()

app.listen({ port: 4001 }).then(({ url }) => {
  console.log(`server start at ${url}`)
})
