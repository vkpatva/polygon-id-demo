import { Request, Response, Router } from 'express'
import Controller from './VerifyController'

const router = Router()

router.get('/govt-auth-qr', (req: Request, res: Response) => {
	Controller.authQR(req, res)
})

router.post('/gov-id', (req: Request, res: Response) => {
	Controller.verifyGovId(req, res)
})

router.get('/insurance-issue-auth-qr', (req: Request, res: Response) => {
	Controller.insuranceIssueAuthQR(req, res)
})

router.post('/insurance-issue', (req: Request, res: Response) => {
	Controller.verifyInsuranceIssue(req, res)
})

router.post('/whitelist', (req: Request, res: Response) => {
	Controller.whiteList(req, res)
})

router.post('/mint', (req: Request, res: Response) => {
	Controller.mintNFT(req, res)
})

export default router
