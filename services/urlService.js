const {url} = require("../models")


class urlService {

        async saveNewUrl(oldUrl,newUrl){
            try{
                const saved = await url.create({urlin:oldUrl,urlout:newUrl,date_created: Date.now()})
                return saved
            }catch(err){
                console.log(err)
                return err
            }
        }
        async replaceUrl(input,newUrl){
            try{
                const result = await url.update(
                    {urlout:newUrl},
                    {where:{
                        urlin:input
                    }
                })
            }catch(err){
                console.log(err)
            }
        }
        async checkUnique (newUrl){
            try{
                if(newUrl){
                    const check = await url.findOne({
                    where:{urlout:newUrl}
                })
                return check !== null
                }
                return false
            }catch(err){
                console.log(err)
            }
        }
        async hasShort (input){
            try{
                const result = await url.findOne({
                    where:{
                        urlin: input
                    }
                })
                return result
            }catch(err){
                console.log(err);
                return err
            }
        }
        async findShort(short){
            try{
                const result = await url.findOne({
                    where:{
                        urlout:short
                    }
                })
                return result

            }catch(err){
                console.log(err)
            }
        }
}
module.exports = urlService