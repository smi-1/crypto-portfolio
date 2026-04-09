import { Router } from "express"
import { handleClick, getPrices } from "../controllers/api.controller"

const router = Router()

router.post("/:id/click", handleClick)
router.get("/crypto/getPrices", getPrices)

export default router
