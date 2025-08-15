export async function carregarProdutos() {
    try {
        const response = await fetch('./data/produtos.json');

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }

        const produtos = await response.json();
        localStorage.setItem('produtos', JSON.stringify(produtos));

        return produtos;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return [];
    }
}