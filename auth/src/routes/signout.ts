import express from 'express'

const app = express()
const router = express.Router();

router.get('api/users/sognOut', ()=>{})

export {router as sognOutRouter}