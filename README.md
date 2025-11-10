# Nicolas - Portfólio Pessoal

Um portfólio profissional e responsivo criado com **HTML, CSS e JavaScript puro** (sem frameworks).

## 📁 Estrutura de Arquivos

```
nicolas-portfolio-simples/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos CSS (design e animações)
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe todos os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! O portfólio está funcionando

### Opção 2: Publicar Online
- **GitHub Pages**: Faça upload dos arquivos para um repositório e ative GitHub Pages
- **Netlify**: Arraste e solte a pasta no Netlify
- **Vercel**: Conecte o repositório ao Vercel
- **Qualquer servidor web**: Faça upload via FTP

## ✏️ Como Editar o Conteúdo

### 1. Editar Textos e Informações
Abra o arquivo `index.html` em um editor de texto (VS Code, Notepad++, etc.) e procure por:

- **Nome**: Procure por "Nicolas" e substitua pelo seu nome
- **Email**: Procure por "jeancosta4@fatec.sp.gov.br" e atualize
- **LinkedIn**: Procure por "linkedin.com/in/jeancosta4" e atualize
- **GitHub**: Procure por "github.com/jeancosta4" e atualize
- **Descrição**: Edite os textos nas seções "Sobre", "Projetos", etc.

### 2. Editar Projetos
Procure pela seção `<!-- Projetos Section -->` e modifique os cards:

```html
<div class="projeto-card">
    <h3>Seu Projeto</h3>
    <p>Descrição do projeto</p>
    <div class="tech-tags">
        <span class="tech-tag">Tecnologia 1</span>
        <span class="tech-tag">Tecnologia 2</span>
    </div>
    <p class="desafio"><strong>Desafio:</strong> Descrição do desafio</p>
    <a href="link-do-projeto" class="projeto-link">Ver Projeto →</a>
</div>
```

### 3. Editar Habilidades
Procure pela seção `<!-- Habilidades Section -->` e modifique as listas:

```html
<div class="habilidade-coluna">
    <h3>Linguagens</h3>
    <ul class="skill-list">
        <li>• Sua Linguagem</li>
        <li>• Outra Linguagem</li>
    </ul>
</div>
```

### 4. Adicionar Imagens
1. Crie uma pasta chamada `images/` na mesma pasta do `index.html`
2. Coloque suas imagens lá
3. No HTML, adicione:

```html
<img src="images/seu-projeto.jpg" alt="Descrição da imagem">
```

### 5. Editar Cores
Abra o arquivo `styles.css` e procure por `:root` no início:

```css
:root {
    --primary-color: #0ea5e9;      /* Cor azul principal */
    --secondary-color: #06b6d4;    /* Cor ciano */
    --dark-bg: #0f172a;            /* Fundo escuro */
    /* ... mais cores ... */
}
```

## 🎨 Personalizações Comuns

### Mudar Tema de Cores
1. Abra `styles.css`
2. Modifique as cores em `:root`
3. Salve e atualize o navegador

### Adicionar Novas Seções
1. Adicione uma nova `<section>` no HTML
2. Dê um `id` único (ex: `id="minha-secao"`)
3. Adicione o link na navbar: `<li><a href="#minha-secao" class="nav-link">Minha Seção</a></li>`
4. Crie estilos CSS para a nova seção

### Mudar Fontes
Procure por `font-family` em `styles.css` e altere para sua fonte preferida.

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## ⚡ Recursos Implementados

- ✨ Animações suaves e efeitos hover
- 📱 Design totalmente responsivo
- 🎯 Menu mobile inteligente
- 🌙 Tema escuro profissional
- ⚡ Performance otimizada
- ♿ Acessibilidade básica
- 🔍 SEO-friendly
- 📊 Scroll suave entre seções

## 🛠️ Ferramentas Recomendadas para Edição

- **VS Code**: https://code.visualstudio.com/
- **Notepad++**: https://notepad-plus-plus.org/
- **Sublime Text**: https://www.sublimetext.com/

## 📚 Recursos Úteis

- **Cores**: https://colorhunt.co/
- **Ícones**: https://www.flaticon.com/
- **Imagens**: https://unsplash.com/ ou https://pexels.com/
- **Fontes**: https://fonts.google.com/

## 🚀 Próximos Passos

1. Personalize com suas informações
2. Adicione imagens dos seus projetos
3. Teste em diferentes navegadores
4. Publique online
5. Compartilhe com recrutadores e colegas!

## 📝 Licença

Este projeto é livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript puro**
