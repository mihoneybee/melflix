Parabéns pelo projeto! O seu código está muito bem estruturado e vai muito além do que foi proposto na imersão. Você criou uma aplicação robusta, com troca de temas, manipulação dinâmica de dados e uma experiência de usuário (UX) digna de um portfólio de Engenharia de Software.

Aqui está o seu **README.md** personalizado. Ele destaca que a Alura forneceu a faísca inicial, mas que toda a "inteligência" e o polimento visual vieram do seu aprofundamento técnico.

---

# 🎬 MELFLIX — Streaming Interface

Este projeto é uma plataforma de streaming pessoal que simula a experiência de usuário de grandes serviços como Netflix e Disney+. O desenvolvimento teve como ponto de partida a **Imersão Front-End da Alura**, onde foi apresentada a criação de uma página inicial estática. A partir dessa base, utilizei meus conhecimentos técnicos para transformar um rascunho visual em uma aplicação funcional, dinâmica e interativa.


## 🚀 Evolução do Projeto

Diferente da proposta inicial da imersão, que focava apenas na estrutura básica da página de perfis, este projeto foi expandido para incluir uma lógica completa de navegação e exibição de conteúdo.

### 🔹 O que veio da Imersão (A Base)
* [cite_start]**Conceitos Iniciais**: Estruturação semântica com HTML5[cite: 13, 15].
* [cite_start]**Estilização Básica**: Uso de Flexbox para alinhamento e Reset CSS para consistência visual[cite: 22, 24].
* [cite_start]**Inspiração Visual**: Guia inicial para a tela de "Quem está assistindo?"[cite: 56, 77].

### ⚡ Meus Aprofundamentos (Diferenciais Técnicos)
* **Arquitetura de Dados Dinâmica**: Implementei uma estrutura de objetos em JavaScript (`PROFILES_DATA`) que centraliza as informações de perfis, categorias e mídias, permitindo que o catálogo mude completamente dependendo do usuário selecionado.
* **Sistema de Temas (Light/Dark Mode)**: Desenvolvi um alternador de temas persistente que utiliza **Local Storage** para salvar a preferência do usuário e variáveis CSS para uma transição suave entre os modos claro e escuro.
* **Single Page Application (SPA) Feelings**: A transição entre a tela de perfis e o catálogo principal ocorre de forma instantânea via manipulação do DOM, sem recarregar a página.
* **Integração com YouTube API**: Os cards de conteúdo são gerados dinamicamente e, ao serem clicados, abrem um modal com o trailer oficial consumido diretamente do YouTube.
* **Responsividade Avançada**: Refinei o CSS com Media Queries específicas para garantir que a experiência seja impecável desde dispositivos ultra-wide até smartphones pequenos.

---

## 🛠️ Tecnologias e Ferramentas

* **HTML5 & CSS3**: Uso avançado de Pseudo-classes, Variáveis (Custom Properties) e Animações `@keyframes`.
* **JavaScript (Vanilla)**: Lógica de filtragem, manipulação de eventos e persistência de dados.
* **GitHub Pages**: Deploy automatizado para hospedagem do site.
* [cite_start]**Lighthouse**: Auditoria de performance e acessibilidade para garantir um site otimizado[cite: 141, 143].

---

## 📸 Demonstração do Fluxo

1.  **Seleção de Perfil**: O usuário escolhe um perfil com animações de hover e escala.
2.  **Catálogo Personalizado**: Cada perfil (Mel, Vitor ou Nicole) carrega sua própria curadoria de Séries, Animes ou Doramas.
3.  **Hero Banner**: Um destaque dinâmico com imagem de fundo em alta definição e descrição.
4.  **Reprodução**: Clique em qualquer card para assistir ao trailer em um modal responsivo.

---

## 🏁 Como Rodar o Projeto
1. Clone este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. *(Opcional)* Use a extensão **Live Server** no VS Code para uma melhor experiência de desenvolvimento.
