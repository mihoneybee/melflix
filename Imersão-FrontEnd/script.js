// ========== DADOS DOS PERFIS ==========

const PROFILES_DATA = {
    mel: {
        name: 'Mel',
        avatar: 'assets/perfil1.png',
        badge: '🎬 Séries',
        categories: [
            {
                title: '🔥 Séries Populares',
                items: [
                    {
                        title: 'The Outsider',
                        description: 'Um detetive investiga o assassinato brutal de um menino e descobre que as evidências apontam para o impossível.',
                        thumbnail: 'https://img.youtube.com/vi/eNDKWr3Xmjk/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/eNDKWr3Xmjk/maxresdefault.jpg',
                        youtubeId: 'eNDKWr3Xmjk',
                        meta: 'HBO'
                    },
                    {
                        title: 'Stranger Things',
                        description: 'Quando um menino desaparece, uma cidade pequena descobre um mistério envolvendo experimentos secretos e forças sobrenaturais.',
                        thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/b9EkMc79ZSU/maxresdefault.jpg',
                        youtubeId: 'b9EkMc79ZSU',
                        meta: '4 Temporadas'
                    },
                    {
                        title: 'The Witcher',
                        description: 'Geralt de Rívia, um caçador de monstros mutante, luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes são mais perversas que os monstros.',
                        thumbnail: 'https://img.youtube.com/vi/ndl1W4ltcmg/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/ndl1W4ltcmg/maxresdefault.jpg',
                        youtubeId: 'ndl1W4ltcmg',
                        meta: '3 Temporadas'
                    },
                    {
                        title: 'Dark',
                        description: 'O desaparecimento de crianças expõe segredos e conexões ocultas entre quatro famílias, desvendando uma conspiração temporal.',
                        thumbnail: 'https://img.youtube.com/vi/rrwycJ08PSA/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/rrwycJ08PSA/maxresdefault.jpg',
                        youtubeId: 'rrwycJ08PSA',
                        meta: '3 Temporadas'
                    },
                    {
                        title: 'Peaky Blinders',
                        description: 'Uma família de gângsteres na Birmingham pós-Primeira Guerra Mundial ascende ao poder com ambição, violência e astúcia.',
                        thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/oVzVdvGIC7U/maxresdefault.jpg',
                        youtubeId: 'oVzVdvGIC7U',
                        meta: '6 Temporadas'
                    }
                ]
            },
            {
                title: '🎭 Mistério & Suspense',
                items: [
                    {
                        title: 'Wednesday',
                        description: 'Wandinha Addams investiga uma série de assassinatos enquanto estuda na Academia Nunca Mais e tenta dominar seus poderes psíquicos.',
                        thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/Di310WS8zLk/maxresdefault.jpg',
                        youtubeId: 'Di310WS8zLk',
                        meta: 'Netflix'
                    },
                    {
                        title: 'The Haunting of Hill House',
                        description: 'Irmãos adultos confrontam memórias assustadoras de sua antiga casa, a mais famosa casa mal-assombrada dos EUA.',
                        thumbnail: 'https://img.youtube.com/vi/3eqxXqJDmcY/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/3eqxXqJDmcY/maxresdefault.jpg',
                        youtubeId: '3eqxXqJDmcY',
                        meta: 'Netflix'
                    },
                    {
                        title: 'Arcane',
                        description: 'Nas cidades de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologia e magia.',
                        thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/fXmAurh012s/maxresdefault.jpg',
                        youtubeId: 'fXmAurh012s',
                        meta: '2 Temporadas'
                    },
                    {
                        title: 'Black Mirror',
                        description: 'Série antológica que explora um futuro próximo onde a tecnologia afeta a sociedade de maneiras perturbadoras.',
                        thumbnail: 'https://img.youtube.com/vi/jDiYGjp5iFg/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/jDiYGjp5iFg/maxresdefault.jpg',
                        youtubeId: 'jDiYGjp5iFg',
                        meta: '6 Temporadas'
                    },
                    {
                        title: 'The Last of Us',
                        description: 'Em um mundo pós-apocalíptico, um sobrevivente endurecido é contratado para contrabandear uma garota de 14 anos para fora de uma zona de quarentena.',
                        thumbnail: 'https://img.youtube.com/vi/uLtkt8BonwM/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/uLtkt8BonwM/maxresdefault.jpg',
                        youtubeId: 'uLtkt8BonwM',
                        meta: 'HBO'
                    },
                    {
                        title: 'You',
                        description: 'Um gerente de livraria brilhante e obsessivo faz de tudo para se inserir na vida das pessoas que ele fica obcecado.',
                        thumbnail: 'https://img.youtube.com/vi/srx7fSBwvF4/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/srx7fSBwvF4/maxresdefault.jpg',
                        youtubeId: 'srx7fSBwvF4',
                        meta: '4 Temporadas'
                    }
                ]
            }
        ]
    },
    vitor: {
        name: 'Vitor',
        avatar: 'assets/perfil2.png',
        badge: '⚔️ Animes',
        categories: [
            {
                title: '⚡ Animes em Alta',
                items: [
                    {
                        title: 'Jujutsu Kaisen',
                        description: 'Um estudante com força sobre-humana se junta a uma organização secreta de feiticeiros para eliminar maldições poderosas.',
                        thumbnail: 'https://img.youtube.com/vi/4A_X-Dvl0ws/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/4A_X-Dvl0ws/maxresdefault.jpg',
                        youtubeId: '4A_X-Dvl0ws',
                        meta: '2 Temporadas'
                    },
                    {
                        title: 'One Piece',
                        description: 'Monkey D. Luffy e sua tripulação pirata embarcam numa aventura épica pelo Grand Line em busca do tesouro lendário One Piece.',
                        thumbnail: 'https://img.youtube.com/vi/MCb13lbVGE0/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/MCb13lbVGE0/maxresdefault.jpg',
                        youtubeId: 'MCb13lbVGE0',
                        meta: '1100+ Episódios'
                    },
                    {
                        title: 'Demon Slayer',
                        description: 'Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada e sua irmã ser transformada em demônio.',
                        thumbnail: 'https://img.youtube.com/vi/VQGCKyvzIM4/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/VQGCKyvzIM4/maxresdefault.jpg',
                        youtubeId: 'VQGCKyvzIM4',
                        meta: '4 Temporadas'
                    },
                    {
                        title: 'Attack on Titan',
                        description: 'A humanidade vive dentro de muralhas gigantes para se proteger dos Titãs — criaturas humanoides que devoram humanos sem razão.',
                        thumbnail: 'https://img.youtube.com/vi/MGRm4IzK1SQ/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/MGRm4IzK1SQ/maxresdefault.jpg',
                        youtubeId: 'MGRm4IzK1SQ',
                        meta: '4 Temporadas'
                    },
                    {
                        title: 'My Hero Academia',
                        description: 'Em um mundo onde quase todos possuem superpoderes, um garoto sem poderes sonha em se tornar o maior herói de todos.',
                        thumbnail: 'https://img.youtube.com/vi/EPVkcwyLQQ8/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/EPVkcwyLQQ8/maxresdefault.jpg',
                        youtubeId: 'EPVkcwyLQQ8',
                        meta: '7 Temporadas'
                    },
                    {
                        title: 'Death Note',
                        description: 'Um estudante brilhante encontra um caderno sobrenatural que mata qualquer pessoa cujo nome seja escrito nele.',
                        thumbnail: 'https://img.youtube.com/vi/NlJZ-YgAt-c/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/NlJZ-YgAt-c/maxresdefault.jpg',
                        youtubeId: 'NlJZ-YgAt-c',
                        meta: '37 Episódios'
                    }
                ]
            },
            {
                title: '🏆 Clássicos do Anime',
                items: [
                    {
                        title: 'Naruto Shippuden',
                        description: 'Naruto Uzumaki retorna mais forte após anos de treinamento para proteger sua vila e resgatar seu amigo Sasuke.',
                        thumbnail: 'https://img.youtube.com/vi/1dy2zMJ4Jys/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/1dy2zMJ4Jys/maxresdefault.jpg',
                        youtubeId: '1dy2zMJ4Jys',
                        meta: '500 Episódios'
                    },
                    {
                        title: 'Dragon Ball Super',
                        description: 'Goku e seus amigos enfrentam ameaças cada vez mais poderosas de outros universos em batalhas épicas.',
                        thumbnail: 'https://img.youtube.com/vi/Uo5Rhn8zuPA/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/Uo5Rhn8zuPA/maxresdefault.jpg',
                        youtubeId: 'Uo5Rhn8zuPA',
                        meta: '131 Episódios'
                    },
                    {
                        title: 'Fullmetal Alchemist: Brotherhood',
                        description: 'Dois irmãos alquimistas buscam a Pedra Filosofal para restaurar seus corpos após uma transmutação humana fracassada.',
                        thumbnail: 'https://img.youtube.com/vi/--IcmZkvL0Q/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg',
                        youtubeId: '--IcmZkvL0Q',
                        meta: '64 Episódios'
                    },
                    {
                        title: 'Hunter x Hunter',
                        description: 'Gon Freecss embarca numa jornada perigosa para se tornar um Hunter e encontrar seu pai desaparecido.',
                        thumbnail: 'https://img.youtube.com/vi/d6kBeJjTGnY/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/d6kBeJjTGnY/maxresdefault.jpg',
                        youtubeId: 'd6kBeJjTGnY',
                        meta: '148 Episódios'
                    },
                    {
                        title: 'Chainsaw Man',
                        description: 'Um jovem que se funde com um demônio de motosserra se junta a uma organização governamental de caçadores de demônios.',
                        thumbnail: 'https://img.youtube.com/vi/q15CRdE5Bv0/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/q15CRdE5Bv0/maxresdefault.jpg',
                        youtubeId: 'q15CRdE5Bv0',
                        meta: '1 Temporada'
                    },
                    {
                        title: 'Solo Leveling',
                        description: 'O caçador mais fraco do mundo ganha o poder de subir de nível infinitamente após uma missão misteriosa numa masmorra.',
                        thumbnail: 'https://img.youtube.com/vi/7NaFHEq4hLg/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/7NaFHEq4hLg/maxresdefault.jpg',
                        youtubeId: '7NaFHEq4hLg',
                        meta: '2 Temporadas'
                    }
                ]
            }
        ]
    },
    nicole: {
        name: 'Nicole',
        avatar: 'assets/perfil3.png',
        badge: '🌸 Doramas',
        categories: [
            {
                title: '🇰🇷 Doramas Coreanos',
                items: [
                    {
                        title: 'Crash Landing on You',
                        description: 'Uma herdeira sul-coreana aterrissa acidentalmente na Coreia do Norte durante um voo de parapente e encontra um oficial norte-coreano.',
                        thumbnail: 'https://img.youtube.com/vi/GVQGWgeVc4k/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/GVQGWgeVc4k/maxresdefault.jpg',
                        youtubeId: 'GVQGWgeVc4k',
                        meta: '16 Episódios'
                    },
                    {
                        title: 'Goblin',
                        description: 'Um ser imortal busca uma noiva humana para acabar com sua existência eterna, mas acaba se apaixonando por ela.',
                        thumbnail: 'https://img.youtube.com/vi/8AcNEVUzV4o/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/8AcNEVUzV4o/maxresdefault.jpg',
                        youtubeId: '8AcNEVUzV4o',
                        meta: '16 Episódios'
                    },
                    {
                        title: 'Vincenzo',
                        description: 'Um advogado ítalo-coreano da máfia retorna à Coreia do Sul para recuperar ouro escondido e acaba lutando contra a corrupção.',
                        thumbnail: 'https://img.youtube.com/vi/oemqatlSUEE/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/oemqatlSUEE/maxresdefault.jpg',
                        youtubeId: 'oemqatlSUEE',
                        meta: '20 Episódios'
                    },
                    {
                        title: 'All of Us Are Dead',
                        description: 'Estudantes presos em uma escola durante um surto de zumbis lutam para sobreviver e escapar.',
                        thumbnail: 'https://img.youtube.com/vi/IN5TD4VRcSM/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/IN5TD4VRcSM/maxresdefault.jpg',
                        youtubeId: 'IN5TD4VRcSM',
                        meta: 'Netflix'
                    },
                    {
                        title: 'Extraordinary Attorney Woo',
                        description: 'Uma advogada brilhante com autismo navega desafios legais e sociais enquanto prova seu valor em um escritório de advocacia.',
                        thumbnail: 'https://img.youtube.com/vi/MxEFfsgFLBM/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/MxEFfsgFLBM/maxresdefault.jpg',
                        youtubeId: 'MxEFfsgFLBM',
                        meta: '16 Episódios'
                    },
                    {
                        title: 'Squid Game',
                        description: 'Centenas de jogadores endividados aceitam um convite para competir em jogos infantis por um prêmio tentador — mas mortífero.',
                        thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/oqxAJKy0ii4/maxresdefault.jpg',
                        youtubeId: 'oqxAJKy0ii4',
                        meta: '2 Temporadas'
                    }
                ]
            },
            {
                title: '🇨🇳 Doramas Chineses',
                items: [
                    {
                        title: 'The Untamed',
                        description: 'Dois jovens cultivadores se unem para resolver uma série de mistérios e lutar contra a injustiça em um mundo de artes marciais.',
                        thumbnail: 'https://img.youtube.com/vi/5MzY1xKDV70/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/5MzY1xKDV70/maxresdefault.jpg',
                        youtubeId: '5MzY1xKDV70',
                        meta: '50 Episódios'
                    },
                    {
                        title: 'Word of Honor',
                        description: 'Dois homens misteriosos com passados sombrios se encontram e embarcam numa jornada pelo mundo das artes marciais.',
                        thumbnail: 'https://img.youtube.com/vi/0TgyUgT8MsY/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/0TgyUgT8MsY/maxresdefault.jpg',
                        youtubeId: '0TgyUgT8MsY',
                        meta: '36 Episódios'
                    },
                    {
                        title: 'Love Between Fairy and Devil',
                        description: 'Uma fada de baixo escalão e um poderoso senhor dos demônios trocam de corpos e iniciam uma jornada inesperada juntos.',
                        thumbnail: 'https://img.youtube.com/vi/KmREZcNGJhs/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/KmREZcNGJhs/maxresdefault.jpg',
                        youtubeId: 'KmREZcNGJhs',
                        meta: '36 Episódios'
                    },
                    {
                        title: 'Ashes of Love',
                        description: 'Uma deusa das flores e um príncipe celestial enfrentam obstáculos cósmicos em sua história de amor proibida.',
                        thumbnail: 'https://img.youtube.com/vi/3VcLOTR5VbM/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/3VcLOTR5VbM/maxresdefault.jpg',
                        youtubeId: '3VcLOTR5VbM',
                        meta: '63 Episódios'
                    },
                    {
                        title: 'Nirvana in Fire',
                        description: 'Um estrategista brilhante busca vingança e justiça pelo exército de seu pai em uma trama política cheia de intrigas.',
                        thumbnail: 'https://img.youtube.com/vi/53gLJ6cqZso/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/53gLJ6cqZso/maxresdefault.jpg',
                        youtubeId: '53gLJ6cqZso',
                        meta: '54 Episódios'
                    },
                    {
                        title: 'Eternal Love (Ten Miles of Peach Blossoms)',
                        description: 'Uma história de amor épica entre uma deusa raposa e um príncipe celestial que atravessa três vidas e três mundos.',
                        thumbnail: 'https://img.youtube.com/vi/bOSoXhPATsU/hqdefault.jpg',
                        poster: 'https://img.youtube.com/vi/bOSoXhPATsU/maxresdefault.jpg',
                        youtubeId: 'bOSoXhPATsU',
                        meta: '58 Episódios'
                    }
                ]
            }
        ]
    }
};

// ========== THEME SWITCHER ==========
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const THEME_KEY = 'theme-preference';

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
}

function applyTheme(theme) {
    if (theme === 'light') {
        htmlElement.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        htmlElement.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const isLightMode = htmlElement.classList.contains('light-mode');
    applyTheme(isLightMode ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// ========== ELEMENTOS DO DOM ==========
const profileSelect = document.getElementById('profile-select');
const catalogScreen = document.getElementById('catalog-screen');
const headerAvatar = document.getElementById('header-avatar');
const headerName = document.getElementById('header-name');
const navProfileName = document.getElementById('nav-profile-name');
const heroBanner = document.getElementById('hero-banner');
const heroBadge = document.getElementById('hero-badge');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
const heroPlayBtn = document.getElementById('hero-play-btn');
const heroInfoBtn = document.getElementById('hero-info-btn');
const catalogContent = document.getElementById('catalog-content');
const dropdownProfiles = document.getElementById('dropdown-profiles');
const switchProfileBtn = document.getElementById('switch-profile-btn');
const trailerModal = document.getElementById('trailer-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const trailerIframe = document.getElementById('trailer-iframe');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

let currentProfile = null;
let heroItem = null;

// ========== NAVEGAÇÃO ENTRE TELAS ==========

function selectProfile(profileKey) {
    const profile = PROFILES_DATA[profileKey];
    if (!profile) return;

    currentProfile = profileKey;

    // Esconder tela de perfis, mostrar catálogo
    profileSelect.classList.add('hidden');
    catalogScreen.classList.remove('hidden');

    // Atualizar header
    headerAvatar.src = profile.avatar;
    headerAvatar.alt = `Avatar de ${profile.name}`;
    headerName.textContent = profile.name;
    navProfileName.textContent = `Catálogo de ${profile.name} ${profile.badge}`;

    // Atualizar dropdown com os outros perfis
    renderDropdownProfiles(profileKey);

    // Definir item destaque (hero) — primeiro item da primeira categoria
    heroItem = profile.categories[0].items[0];
    renderHero(heroItem, profile.badge);

    // Renderizar linhas de conteúdo
    renderCatalog(profile.categories);

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reposicionar theme switcher
    document.querySelector('.theme-switcher').style.top = '80px';
}

function switchToProfiles() {
    // Voltar para tela de seleção de perfis
    catalogScreen.classList.add('hidden');
    profileSelect.classList.remove('hidden');
    currentProfile = null;

    // Resetar theme switcher
    document.querySelector('.theme-switcher').style.top = '20px';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== RENDERIZAR HERO BANNER ==========

function renderHero(item, badge) {
    heroBanner.style.backgroundImage = `url('${item.poster}')`;
    heroBadge.textContent = badge || 'DESTAQUE';
    heroTitle.textContent = item.title;
    heroDescription.textContent = item.description;

    // Botão play do hero
    heroPlayBtn.onclick = () => openTrailer(item);
    heroInfoBtn.onclick = () => openTrailer(item);
}

// ========== RENDERIZAR CATÁLOGO ==========

function renderCatalog(categories) {
    catalogContent.innerHTML = '';

    categories.forEach(category => {
        const row = document.createElement('div');
        row.className = 'content-row';

        const title = document.createElement('h3');
        title.className = 'row-title';
        title.textContent = category.title;
        row.appendChild(title);

        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'row-cards';

        category.items.forEach(item => {
            const card = createCard(item);
            cardsContainer.appendChild(card);
        });

        row.appendChild(cardsContainer);
        catalogContent.appendChild(row);
    });
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Assistir trailer de ${item.title}`);

    card.innerHTML = `
        <img class="card-thumbnail" src="${item.thumbnail}" alt="${item.title}" loading="lazy">
        <div class="card-play-icon">▶</div>
        <div class="card-info">
            <div class="card-title">${item.title}</div>
            <div class="card-meta">${item.meta}</div>
        </div>
    `;

    card.addEventListener('click', () => openTrailer(item));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openTrailer(item);
        }
    });

    return card;
}

// ========== DROPDOWN DE PERFIS ==========

function renderDropdownProfiles(currentKey) {
    dropdownProfiles.innerHTML = '';

    Object.entries(PROFILES_DATA).forEach(([key, profile]) => {
        if (key === currentKey) return;

        const item = document.createElement('div');
        item.className = 'dropdown-profile-item';
        item.innerHTML = `
            <img src="${profile.avatar}" alt="${profile.name}">
            <span>${profile.name}</span>
        `;
        item.addEventListener('click', () => selectProfile(key));
        dropdownProfiles.appendChild(item);
    });
}

// ========== MODAL DE TRAILER ==========

function openTrailer(item) {
    trailerIframe.src = `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    trailerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeTrailer() {
    trailerModal.classList.add('hidden');
    trailerIframe.src = '';
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeTrailer);
modalBackdrop.addEventListener('click', closeTrailer);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !trailerModal.classList.contains('hidden')) {
        closeTrailer();
    }
});

// ========== EVENT LISTENERS DOS PERFIS ==========

document.querySelectorAll('.profile[data-profile]').forEach(profileEl => {
    profileEl.addEventListener('click', (e) => {
        e.preventDefault();
        const profileKey = profileEl.dataset.profile;
        selectProfile(profileKey);
    });
});

// Botão trocar perfil
switchProfileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchToProfiles();
});

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', initTheme);
if (document.readyState !== 'loading') {
    initTheme();
}
