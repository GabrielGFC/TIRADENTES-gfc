const express =require('express');
const router = express.Router();
const estoqueController=require('../controllers/estoqueController');

router.get('/',estoqueController.get);
router.post('/',estoqueController.register);
router.put('/:estoque_id',estoqueController.update);
router.delete('/:estoque_id',estoqueController.delete);

module.exports = router;
