//export da biblioteca
const Item = require('../models/Item');

//get
exports.get = async (req, res) => {
  try {
    const item = await Item.findAll();
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar item.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    nome,
    descricao,
    quantidade  
  } = req.body;

  try {
    let 
    quantidadeStr = quantidade.toString()

  if (nome && nome.length > 1 && nome.length < 128)
  {}
  else {return res.status(401).json({ message: 'Nome não preenchido ou inválido' });}
  
  if(quantidade && quantidadeStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Quantidade não preenchida ou inválida'});;}
  
  if (descricao && descricao.length > 1 && descricao.length < 500)
  {}
  else {return res.status(401).json({ message: 'Descrição não preenchida ou inválida' });}
  
  await Item.create({
    nome,
    descricao,
    quantidade
    });
    res.status(201).json({ message: 'Item register successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//put
exports.update = async (req, res) => {
  const { item_id } = req.params;
  const { 
    nome,
    descricao,
    quantidade
  } = req.body;

  try {let 
    quantidadeStr = quantidade.toString()

    if (nome && nome.length > 1 && nome.length < 128)
    {}
    else {return res.status(401).json({ message: 'Nome não preenchido ou inválido' });}
    
    if(quantidade && quantidadeStr.length <= 3)
    {}
    else {return res.status(401).json({ message: 'Quantidade não preenchida ou inválida'});;}
    
    if (descricao && descricao.length > 1 && descricao.length < 500)
    {}
    else {return res.status(401).json({ message: 'Descrição não preenchida ou inválida' });}

    await Item.update({ 
      nome,
      descricao,
      quantidade
    },
  
    { where: { id: item_id } });
    res.status(200).json({ message: 'Item updated successfully' });

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

//delete
exports.delete = async (req, res) => {
    const { item_id } = req.params;
    try {
        await Item.destroy({ where: { id: item_id } });

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};