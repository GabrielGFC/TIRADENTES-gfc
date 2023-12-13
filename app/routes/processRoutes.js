const express =require('express');
const router = express.Router();
const processController=require('../controllers/processController.js');

router.get('/',processController.get);
router.post('/',processController.register);
router.put('/:process_id',processController.update);
router.delete('/:process_id', processController.delete)
module.exports = router;
