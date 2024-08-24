import e from "express";

const app = e();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ name: 'Jonas'})
})


app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`)
})