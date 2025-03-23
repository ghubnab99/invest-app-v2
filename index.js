
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
  });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})







