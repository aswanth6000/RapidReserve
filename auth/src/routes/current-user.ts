import express from 'express'

const app = express()
const router = express.Router();

router.get('api/users/currentuser', ()=>{})

export {router as CurrentUserRouter}