
    const {Router} = require('express');
    const PessoaControler = require('../../controllers/PessoaController');

    
    const router = Router();
    
    router.get('/pessoas', PessoaControler.GetPessoas);
    router.get('/pessoas/:id', PessoaControler.GetUmaPessoa);
    router.post('/pessoas', PessoaControler.CreatePessoa);
    router.put('/pessoas/:id', PessoaControler.UpdatePessoa);
    router.delete('/pessoas/:id', PessoaControler.DeletePessoa);

    module.exports = router;


