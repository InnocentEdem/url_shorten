const express = require('express')
const router = express.Router()
const urlService = require('../services/urlService')
const getNew = require('../controllers/generateUrl')

router.get("/:id",async(req,res)=>{
    const useUrlService = new urlService()
    res.setHeader("Content-Type", "text/html")
    const shortUrl = req.params.id
    if(shortUrl){
        const url = await useUrlService.findShort(shortUrl)
        if(url){
            res.status(301).redirect(`http://${url.urlin}`)
        }else{
         res.status(400).json("This link has expired or is currently unavailable")
        }

    }else{
        res.status(404).json("This link has expired or is currently unavailable")
    }

})

router.post("/",async(req,res)=>{
    const useUrlService = new urlService()
    const newUrl = req.body.url
    const hasShort = await useUrlService.hasShort(newUrl) 
    if(hasShort){
        console.log("hasShort");
        return res.status(200).json(hasShort.urlout)
    }
    const generatedUrl = getNew();
    console.log(newUrl, generatedUrl);
    await useUrlService.saveNewUrl(newUrl, generatedUrl)
    return res.status(200).json(generatedUrl)

})
router.put("/", async(req,res)=>{
    const useUrlService = new urlService()
    const shortUrl = req.body.url;
    const result = await useUrlService.findShort(shortUrl)
    if(result){
        const generatedUrl = getNew();
        await useUrlService.replaceUrl(result.urlin, generatedUrl)
        return res.status(200).json(generatedUrl)
    }
    return res.status(404).json("unknown address")
})

module.exports = router