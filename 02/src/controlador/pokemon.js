const { listarPokemons, detalharPokemon } = require('utils-playground');

const mostraPaginas = async (req, res) => {
    const { pagina } = req.query;
    const resultado = await listarPokemons(pagina ?? 1);

    return res.status(200).json(resultado);
};

const detalhaPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    const detalhe = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = detalhe;

    return res.status(200).json({ id, name, height, weight, base_experience, forms, abilities, species })
}


module.exports = {
    mostraPaginas,
    detalhaPokemon
}