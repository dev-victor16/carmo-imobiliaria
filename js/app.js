/**
 * CARMÔ IMOBILIÁRIA — Aplicação e Interatividade
 * Gestão de Catálogo, Filtros Multifacetados, Modal com Galeria, Simulador e Contatos
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado da aplicação
  const state = {
    purpose: 'todos', // 'todos' | 'venda' | 'locacao'
    type: 'todos',
    city: 'todos',
    neighborhood: 'todos',
    code: '',
    bedrooms: 0,
    bathrooms: 0,
    suites: 0,
    parking: 0,
    priceMin: null,
    priceMax: null,
    areaMin: null,
    areaMax: null,
    condoOnly: false,
    activeProperty: null,
    activePhotoIndex: 0
  };

  // Referências DOM
  const propertiesGrid = document.getElementById('propertiesGrid');
  const superDestaqueContainer = document.getElementById('superDestaqueContainer');
  const propertiesCount = document.getElementById('propertiesCount');
  const searchCodeInput = document.getElementById('searchCode');
  const filterType = document.getElementById('filterType');
  const filterCity = document.getElementById('filterCity');
  const filterNeighborhood = document.getElementById('filterNeighborhood');
  const filterPriceMin = document.getElementById('filterPriceMin');
  const filterPriceMax = document.getElementById('filterPriceMax');
  const filterAreaMin = document.getElementById('filterAreaMin');
  const filterAreaMax = document.getElementById('filterAreaMax');
  const filterCondoOnly = document.getElementById('filterCondoOnly');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const searchForm = document.getElementById('searchForm');

  // Modal
  const propertyModal = document.getElementById('propertyModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalMainPhoto = document.getElementById('modalMainPhoto');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const modalBadge = document.getElementById('modalBadge');
  const modalCode = document.getElementById('modalCode');
  const modalTitle = document.getElementById('modalTitle');
  const modalAddress = document.getElementById('modalAddress');
  const modalPrice = document.getElementById('modalPrice');
  const modalCondoIptu = document.getElementById('modalCondoIptu');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalDesc = document.getElementById('modalDesc');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
  const modalCallBtn = document.getElementById('modalCallBtn');

  // Drawer Mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  // Formatação Monetária
  function formatCurrency(val) {
    if (!val && val !== 0) return 'Sob consulta';
    return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  }

  // Sanitização de texto para WhatsApp
  function createWhatsAppLink(phoneRaw, text) {
    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
  }

  // Inicialização de filtros e seletores
  function populateFilterOptions() {
    if (filterCity) {
      const cities = [...new Set(PROPERTIES_DATA.map(p => p.city).filter(Boolean))];
      cities.forEach(city => {
        const opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        filterCity.appendChild(opt);
      });
    }

    if (filterNeighborhood) {
      const neighborhoods = [...new Set(PROPERTIES_DATA.map(p => p.neighborhood).filter(Boolean))].sort();
      neighborhoods.forEach(neigh => {
        const opt = document.createElement('option');
        opt.value = neigh;
        opt.textContent = neigh;
        filterNeighborhood.appendChild(opt);
      });
    }
  }

  // Filtragem dos imóveis
  function getFilteredProperties() {
    return PROPERTIES_DATA.filter(p => {
      // Finalidade
      if (state.purpose !== 'todos' && p.purpose !== state.purpose) {
        return false;
      }

      // Código
      if (state.code.trim()) {
        const query = state.code.trim().toLowerCase();
        const matchesCode = p.code.toLowerCase().includes(query);
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesNeigh = p.neighborhood.toLowerCase().includes(query);
        if (!matchesCode && !matchesTitle && !matchesNeigh) return false;
      }

      // Tipo
      if (state.type !== 'todos' && p.type !== state.type) {
        return false;
      }

      // Cidade
      if (state.city !== 'todos' && p.city.toLowerCase() !== state.city.toLowerCase()) {
        return false;
      }

      // Bairro
      if (state.neighborhood !== 'todos' && p.neighborhood.toLowerCase() !== state.neighborhood.toLowerCase()) {
        return false;
      }

      // Dormitórios
      if (state.bedrooms > 0 && (p.specs.bedrooms || 0) < state.bedrooms) {
        return false;
      }

      // Suítes
      if (state.suites > 0 && (p.specs.suites || 0) < state.suites) {
        return false;
      }

      // Banheiros
      if (state.bathrooms > 0 && (p.specs.bathrooms || 0) < state.bathrooms) {
        return false;
      }

      // Vagas
      if (state.parking > 0 && (p.specs.parking || 0) < state.parking) {
        return false;
      }

      // Preço Mínimo
      if (state.priceMin !== null && p.priceRaw < state.priceMin) {
        return false;
      }

      // Preço Máximo
      if (state.priceMax !== null && p.priceRaw > state.priceMax) {
        return false;
      }

      // Área Mínima
      if (state.areaMin !== null && (p.specs.area || 0) < state.areaMin) {
        return false;
      }

      // Área Máxima
      if (state.areaMax !== null && (p.specs.area || 0) > state.areaMax) {
        return false;
      }

      // Somente Condomínio Fechado
      if (state.condoOnly && p.type !== 'casa_condominio' && !p.features.some(f => f.toLowerCase().includes('condomínio'))) {
        return false;
      }

      return true;
    });
  }

  // Renderização do Super Destaque Editorial
  function renderSuperDestaque() {
    if (!superDestaqueContainer) return;

    const superDestaque = PROPERTIES_DATA.find(p => p.isSuperDestaque);
    if (!superDestaque) {
      superDestaqueContainer.style.display = 'none';
      return;
    }

    superDestaqueContainer.innerHTML = `
      <div class="super-destaque-card">
        <div class="super-destaque-visual">
          <img src="${superDestaque.image}" alt="${superDestaque.title}" loading="lazy" class="super-destaque-img" id="superDestaqueImg">
          <div class="super-destaque-overlay"></div>
          <span class="property-badge badge-gold super-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Imóvel de Prestígio • Carmô
          </span>
          <div class="super-photo-counter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            ${superDestaque.photos.length} Fotos Reais
          </div>
        </div>
        <div class="super-destaque-content">
          <div class="super-destaque-header">
            <div class="super-code-tag">Cód: <strong>${superDestaque.code}</strong></div>
            <div class="super-type-tag">${superDestaque.typeLabel}</div>
          </div>
          <h3 class="super-destaque-title">${superDestaque.title}</h3>
          <p class="super-destaque-address">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${superDestaque.address}
          </p>
          <div class="super-specs-row">
            <div class="super-spec-item">
              <span class="spec-number">${superDestaque.specs.area} m²</span>
              <span class="spec-label">Área Total</span>
            </div>
            <div class="super-spec-item">
              <span class="spec-number">${superDestaque.specs.bedrooms}</span>
              <span class="spec-label">Quartos</span>
            </div>
            <div class="super-spec-item">
              <span class="spec-number">${superDestaque.specs.suites}</span>
              <span class="spec-label">Suítes</span>
            </div>
            <div class="super-spec-item">
              <span class="spec-number">${superDestaque.specs.parking}</span>
              <span class="spec-label">Vagas</span>
            </div>
          </div>
          <p class="super-destaque-desc">${superDestaque.description}</p>
          <div class="super-destaque-footer">
            <div class="super-price-block">
              <span class="price-pre">Valor de Investimento</span>
              <span class="price-main">${superDestaque.price}</span>
            </div>
            <div class="super-actions-block">
              <button class="btn btn-outline open-modal-btn" data-id="${superDestaque.id}">
                Ficha Completa
              </button>
              <a href="${createWhatsAppLink(CARMO_INFO.whatsappRaw, `Olá! Vi o destaque Cód: ${superDestaque.code} (${superDestaque.title}) no site da Carmô Imobiliária e gostaria de agendar uma visita.`)}" target="_blank" rel="noopener" class="btn btn-primary btn-whatsapp-direct">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listener do botão super destaque
    const btn = superDestaqueContainer.querySelector('.open-modal-btn');
    if (btn) {
      btn.addEventListener('click', () => openModal(superDestaque));
    }
  }

  // Renderização da Grade de Imóveis
  function renderProperties() {
    const filtered = getFilteredProperties();

    if (propertiesCount) {
      propertiesCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'} com os critérios selecionados`;
    }

    if (!propertiesGrid) return;

    if (filtered.length === 0) {
      propertiesGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6"/></svg>
          </div>
          <h3>Nenhum imóvel encontrado</h3>
          <p>Não encontramos imóveis exatamente com essa combinação de filtros. Tente expandir sua pesquisa ou limpar os filtros para ver todas as opções disponíveis.</p>
          <button class="btn btn-primary" id="btnEmptyReset">Ver Todos os Imóveis da Carmô</button>
        </div>
      `;
      const btnEmptyReset = document.getElementById('btnEmptyReset');
      if (btnEmptyReset) {
        btnEmptyReset.addEventListener('click', resetAllFilters);
      }
      return;
    }

    propertiesGrid.innerHTML = filtered.map(p => {
      const badgeClass = p.badgeType === 'gold' ? 'badge-gold' : (p.badgeType === 'terracotta' ? 'badge-terracotta' : 'badge-dark');

      const specsHtml = `
        <div class="card-specs">
          ${p.specs.bedrooms ? `
            <div class="spec-pill" title="${p.specs.bedrooms} Dormitórios">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>
              <span>${p.specs.bedrooms} ${p.specs.bedrooms === 1 ? 'quarto' : 'quartos'}</span>
            </div>
          ` : ''}
          ${p.specs.bathrooms ? `
            <div class="spec-pill" title="${p.specs.bathrooms} Banheiros">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zm2-5h3v5H6z"/></svg>
              <span>${p.specs.bathrooms} ${p.specs.bathrooms === 1 ? 'banho' : 'banhos'}</span>
            </div>
          ` : ''}
          ${p.specs.parking ? `
            <div class="spec-pill" title="${p.specs.parking} Vagas de Garagem">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="7" cy="15" r="2"/><circle cx="17" cy="15" r="2"/></svg>
              <span>${p.specs.parking} ${p.specs.parking === 1 ? 'vaga' : 'vagas'}</span>
            </div>
          ` : ''}
          ${p.specs.area ? `
            <div class="spec-pill" title="${p.specs.area} Metros Quadrados">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
              <span>${p.specs.area} m²</span>
            </div>
          ` : ''}
        </div>
      `;

      return `
        <article class="property-card" data-id="${p.id}">
          <div class="card-media">
            <img src="${p.image}" alt="${p.title}" loading="lazy" class="card-img" />
            <div class="card-badges">
              <span class="property-badge ${badgeClass}">${p.badge}</span>
              <span class="purpose-badge">${p.purposeLabel}</span>
            </div>
            <div class="card-code-badge">Cód: <strong>${p.code}</strong></div>
            <div class="card-photos-count">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              ${p.photos.length} fotos
            </div>
          </div>
          <div class="card-body">
            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${p.neighborhood} • ${p.city}</span>
            </div>
            <h4 class="card-title" title="${p.title}">${p.title}</h4>
            ${specsHtml}
            <div class="card-footer">
              <div class="card-price-group">
                <span class="card-price-label">Valor</span>
                <span class="card-price-val">${p.price}</span>
              </div>
              <div class="card-buttons">
                <button class="btn-card-details open-modal-btn" data-id="${p.id}" title="Ver ficha técnica">
                  Ver Ficha
                </button>
                <a href="${createWhatsAppLink(CARMO_INFO.whatsappRaw, `Olá Carmô Imobiliária! Gostaria de informações sobre o imóvel Cód: ${p.code} (${p.title}).`)}" target="_blank" rel="noopener" class="btn-card-wa" title="Conversar no WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Adiciona event listeners aos botões
    propertiesGrid.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'), 10);
        const prop = PROPERTIES_DATA.find(p => p.id === id);
        if (prop) openModal(prop);
      });
    });
  }

  // Abertura do Modal de Detalhes com Galeria
  function openModal(prop) {
    state.activeProperty = prop;
    state.activePhotoIndex = 0;

    modalCode.textContent = `CÓDIGO: ${prop.code}`;
    modalBadge.textContent = prop.badge;
    modalBadge.className = `property-badge ${prop.badgeType === 'gold' ? 'badge-gold' : (prop.badgeType === 'terracotta' ? 'badge-terracotta' : 'badge-dark')}`;
    modalTitle.textContent = prop.title;
    modalAddress.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ${prop.address}
    `;
    modalPrice.textContent = prop.price;

    // Custos acessórios
    let costsText = [];
    if (prop.condoFee) costsText.push(`Condomínio: R$ ${prop.condoFee}/mês`);
    if (prop.iptu) costsText.push(`IPTU: R$ ${prop.iptu}/mês`);
    modalCondoIptu.textContent = costsText.length ? costsText.join(' • ') : 'IPTU sob consulta • Sem taxa de condomínio';

    // Imagem Principal
    modalMainPhoto.src = prop.photos[0] || prop.image;
    modalMainPhoto.alt = prop.title;

    // Miniaturas da Galeria
    modalThumbnails.innerHTML = prop.photos.map((url, idx) => `
      <button class="thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
        <img src="${url}" alt="Foto ${idx + 1}" loading="lazy" />
      </button>
    `).join('');

    modalThumbnails.querySelectorAll('.thumb-btn').forEach(tb => {
      tb.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        state.activePhotoIndex = idx;
        modalMainPhoto.src = prop.photos[idx];
        modalThumbnails.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });

    // Ficha técnica detalhada
    modalSpecs.innerHTML = `
      <div class="modal-spec-cell">
        <span class="label">Tipo de Imóvel</span>
        <span class="val">${prop.typeLabel}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Área Total</span>
        <span class="val">${prop.specs.area ? prop.specs.area + ' m²' : '—'}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Dormitórios</span>
        <span class="val">${prop.specs.bedrooms || '—'}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Suítes</span>
        <span class="val">${prop.specs.suites || '—'}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Banheiros</span>
        <span class="val">${prop.specs.bathrooms || '—'}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Vagas de Garagem</span>
        <span class="val">${prop.specs.parking || '—'}</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Cidade</span>
        <span class="val">${prop.city} / MG</span>
      </div>
      <div class="modal-spec-cell">
        <span class="label">Bairro</span>
        <span class="val">${prop.neighborhood}</span>
      </div>
    `;

    // Diferenciais
    if (prop.features && prop.features.length) {
      modalFeatures.innerHTML = prop.features.map(f => `
        <li class="feature-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ${f}
        </li>
      `).join('');
    } else {
      modalFeatures.innerHTML = '<li class="feature-item">Entre em contato para a lista completa de características.</li>';
    }

    // Descrição
    modalDesc.textContent = prop.description;

    // Botões de contato
    const waText = `Olá Carmô Imobiliária! Gostaria de atendimento exclusivo sobre o imóvel Cód: ${prop.code} (${prop.title}) anunciado no valor de ${prop.price}.`;
    modalWhatsappBtn.href = createWhatsAppLink(CARMO_INFO.whatsappRaw, waText);
    modalCallBtn.href = `tel:${CARMO_INFO.phoneRaw}`;

    // Exibe modal
    propertyModal.classList.add('open');
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Fechamento do Modal
  function closeModal() {
    propertyModal.classList.remove('open');
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Limpeza de todos os filtros
  function resetAllFilters() {
    state.purpose = 'todos';
    state.type = 'todos';
    state.city = 'todos';
    state.neighborhood = 'todos';
    state.code = '';
    state.bedrooms = 0;
    state.bathrooms = 0;
    state.suites = 0;
    state.parking = 0;
    state.priceMin = null;
    state.priceMax = null;
    state.areaMin = null;
    state.areaMax = null;
    state.condoOnly = false;

    if (searchCodeInput) searchCodeInput.value = '';
    if (filterType) filterType.value = 'todos';
    if (filterCity) filterCity.value = 'todos';
    if (filterNeighborhood) filterNeighborhood.value = 'todos';
    if (filterPriceMin) filterPriceMin.value = '';
    if (filterPriceMax) filterPriceMax.value = '';
    if (filterAreaMin) filterAreaMin.value = '';
    if (filterAreaMax) filterAreaMax.value = '';
    if (filterCondoOnly) filterCondoOnly.checked = false;

    // Atualiza abas de finalidade
    document.querySelectorAll('.purpose-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-purpose') === 'todos');
    });

    // Atualiza botões de contagem (quartos, vagas, etc)
    document.querySelectorAll('.count-pill-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    renderProperties();
  }

  if (btnResetFilters) btnResetFilters.addEventListener('click', resetAllFilters);

  // Manipulação de abas de finalidade
  document.querySelectorAll('.purpose-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.purpose-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.purpose = e.currentTarget.getAttribute('data-purpose');
      renderProperties();
    });
  });

  // Botões de contadores de quartos, suítes, banheiros e vagas
  document.querySelectorAll('.count-pill-group').forEach(group => {
    const targetField = group.getAttribute('data-field');
    group.querySelectorAll('.count-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = parseInt(e.currentTarget.getAttribute('data-val'), 10);
        if (state[targetField] === val) {
          state[targetField] = 0;
          e.currentTarget.classList.remove('active');
        } else {
          group.querySelectorAll('.count-pill-btn').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          state[targetField] = val;
        }
        renderProperties();
      });
    });
  });

  // Eventos nos inputs de filtro
  if (searchCodeInput) {
    searchCodeInput.addEventListener('input', (e) => {
      state.code = e.target.value;
      renderProperties();
    });
  }

  if (filterType) {
    filterType.addEventListener('change', (e) => {
      state.type = e.target.value;
      renderProperties();
    });
  }

  if (filterCity) {
    filterCity.addEventListener('change', (e) => {
      state.city = e.target.value;
      renderProperties();
    });
  }

  if (filterNeighborhood) {
    filterNeighborhood.addEventListener('change', (e) => {
      state.neighborhood = e.target.value;
      renderProperties();
    });
  }

  if (filterPriceMin) {
    filterPriceMin.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value.replace(/\D/g, ''));
      state.priceMin = isNaN(val) ? null : val;
      renderProperties();
    });
  }

  if (filterPriceMax) {
    filterPriceMax.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value.replace(/\D/g, ''));
      state.priceMax = isNaN(val) ? null : val;
      renderProperties();
    });
  }

  if (filterAreaMin) {
    filterAreaMin.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.areaMin = isNaN(val) ? null : val;
      renderProperties();
    });
  }

  if (filterAreaMax) {
    filterAreaMax.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.areaMax = isNaN(val) ? null : val;
      renderProperties();
    });
  }

  if (filterCondoOnly) {
    filterCondoOnly.addEventListener('change', (e) => {
      state.condoOnly = e.target.checked;
      renderProperties();
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      renderProperties();
      const el = document.getElementById('catalogo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Simulador de Financiamento
  const simPriceInput = document.getElementById('simPrice');
  const simDownPaymentInput = document.getElementById('simDownPayment');
  const simYearsSelect = document.getElementById('simYears');
  const simInterestInput = document.getElementById('simInterest');
  const simFinancedResult = document.getElementById('simFinancedResult');
  const simInstallmentResult = document.getElementById('simInstallmentResult');
  const simCtaBtn = document.getElementById('simCtaBtn');

  function calculateFinancing() {
    if (!simPriceInput || !simDownPaymentInput || !simInstallmentResult) return;

    const price = parseFloat(simPriceInput.value) || 0;
    const downPayment = parseFloat(simDownPaymentInput.value) || 0;
    const years = parseInt(simYearsSelect ? simYearsSelect.value : 30, 10);
    const rateAnnual = parseFloat(simInterestInput ? simInterestInput.value : 9.5) / 100;

    const financed = Math.max(0, price - downPayment);
    if (simFinancedResult) simFinancedResult.textContent = formatCurrency(financed);

    if (financed <= 0) {
      simInstallmentResult.textContent = 'R$ 0,00';
      return;
    }

    const nMonths = years * 12;
    const rMonthly = rateAnnual / 12;
    // Fórmula de Price / Amortização
    const installment = financed * (rMonthly * Math.pow(1 + rMonthly, nMonths)) / (Math.pow(1 + rMonthly, nMonths) - 1);

    simInstallmentResult.textContent = formatCurrency(Math.round(installment));

    if (simCtaBtn) {
      const msg = `Olá Carmô Imobiliária! Realizei uma simulação de financiamento no site: Imóvel no valor de ${formatCurrency(price)}, com entrada de ${formatCurrency(downPayment)} em ${years} anos. Gostaria de uma análise detalhada com os bancos parceiros.`;
      simCtaBtn.href = createWhatsAppLink(CARMO_INFO.whatsappRaw, msg);
    }
  }

  if (simPriceInput) simPriceInput.addEventListener('input', calculateFinancing);
  if (simDownPaymentInput) simDownPaymentInput.addEventListener('input', calculateFinancing);
  if (simYearsSelect) simYearsSelect.addEventListener('change', calculateFinancing);
  if (simInterestInput) simInterestInput.addEventListener('input', calculateFinancing);

  // Formulário do Proprietário ("Anuncie seu Imóvel")
  const ownerForm = document.getElementById('ownerForm');
  if (ownerForm) {
    ownerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('ownerName').value.trim();
      const phone = document.getElementById('ownerPhone').value.trim();
      const propType = document.getElementById('ownerPropType').value;
      const purpose = document.getElementById('ownerPurpose').value;
      const address = document.getElementById('ownerAddress').value.trim();
      const notes = document.getElementById('ownerNotes').value.trim();

      const msg = `*Novo Cadastro de Imóvel para Anunciar — Carmô Imobiliária*\n\n` +
        `• *Proprietário(a):* ${name}\n` +
        `• *Telefone/WhatsApp:* ${phone}\n` +
        `• *Tipo do Imóvel:* ${propType}\n` +
        `• *Finalidade:* ${purpose}\n` +
        `• *Localização:* ${address}\n` +
        (notes ? `• *Observações:* ${notes}\n` : '') +
        `\n_Enviado pelo formulário oficial do site Carmô Imobiliária._`;

      window.open(createWhatsAppLink(CARMO_INFO.whatsappRaw, msg), '_blank');
      ownerForm.reset();
      alert('Obrigado! Seus dados foram organizados e você será direcionado para o WhatsApp da nossa equipe de captação.');
    });
  }

  // Formulário Geral de Contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();

      const msg = `*Mensagem de Contato — Carmô Imobiliária*\n\n` +
        `• *Nome:* ${name}\n` +
        `• *Telefone/WhatsApp:* ${phone}\n` +
        `• *Assunto:* ${subject}\n` +
        `• *Mensagem:* ${message}\n\n` +
        `_Enviado através do formulário de contato do site._`;

      window.open(createWhatsAppLink(CARMO_INFO.whatsappRaw, msg), '_blank');
      contactForm.reset();
    });
  }

  // Drawer de Navegação Mobile
  function toggleMobileDrawer(open) {
    if (mobileDrawer) mobileDrawer.classList.toggle('open', open);
    if (drawerBackdrop) drawerBackdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileDrawer(true));
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', () => toggleMobileDrawer(false));
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => toggleMobileDrawer(false));

  document.querySelectorAll('.drawer-nav a').forEach(link => {
    link.addEventListener('click', () => toggleMobileDrawer(false));
  });

  // Sticky Header Elevation
  const mainHeader = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 40) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  });

  // Observador de animações suaves ao rolar a página
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Inicializa a aplicação
  populateFilterOptions();
  renderSuperDestaque();
  renderProperties();
  calculateFinancing();
});
