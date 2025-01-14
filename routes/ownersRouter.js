const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model')

// export NODE_ENV=development HAS SET THE ENVIROMENT TO DEVELOPMENT STAGE 
// export DEBUG=
//export DEBUG=development:*

if(process.env.NODE_ENV== "development"){
    router.post("/create",async function(req,res){
        const owners = await ownerModel.find();
        if(owners.length>0){
        return res.status(503).send("You dont have permission to create new owner.")
        }
        let { fullname, email, password } = req.body;

        let createdUser = await ownerModel({
            fullname,
            email,
            password
        });
        await createdUser.save();
        res.status(200).send(createdUser);
    });

    //  WILL FIND OWNER THROUGH ID AND DELETE THE OWNER 
//     router.delete("/delete/:id", async function(req,res){
//         const ownerId = req.params.id; // REQ.PARAMS WILL BE EQUAL TO THE URL PARAMETER
//         const deletedOwner =  await ownerModel.findByIdAndDelete(ownerId);
//         if (!deletedOwner) {
//             return res.status(404).send("Owner not found.");
//         }

//         res.status(200).send({
//             message: "Owner deleted successfully.",
//             deletedOwner,
//         });
//     })
// }

    // WILL FIND AND GIVE THE RESPECTIVE OWNER 
// router.get("/ownerfind", async function(req, res) {
//     try {
//         const owners = await ownerModel.find();
//         res.status(200).send(owners);  // This will return all owners including their _id fields
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred while fetching owners.");
//     }
// });

}
module.exports = router;