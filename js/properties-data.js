/**
 * CARMÔ IMOBILIÁRIA — Catálogo Oficial de Imóveis
 * Fundada em 04 de Janeiro de 1996 | CRECI PJ 5306
 * Sede: Avenida São Paulo, 44 - Centro, Ibirité - MG
 * Telefones: (31) 3533-2888 | WhatsApp: (31) 99821-1647
 */

const PROPERTIES_DATA = [
  {
    id: 1,
    code: "1714",
    title: "Casa em Condomínio Fechado Quintas da Jangada",
    type: "casa_condominio",
    typeLabel: "Casa em Condomínio",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "super_destaque",
    isSuperDestaque: true,
    price: "R$ 1.250.000,00",
    priceRaw: 1250000,
    condoFee: 320,
    iptu: 110,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Condomínio Quintas da Jangada",
    address: "Condomínio Quintas da Jangada, Ibirité - MG",
    specs: {
      bedrooms: 3,
      suites: 2,
      bathrooms: 4,
      parking: 2,
      area: 1200
    },
    badge: "Super Destaque",
    badgeType: "gold",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b081cb0358.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b081cb0358.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b0817cdff7.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b081a4eb94.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b0813d1daf.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b07e79d807.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b07eab9273.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b07ee40f3a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b07f773cd0.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1492/iJsX1bv_14926a9b080a74f95.jpg"
    ],
    description: "Excelente chácara com 1.200 m² em condomínio fechado, ideal para quem busca espaço, conforto, contato com a natureza e tranquilidade. Imóvel com 3 quartos (sendo 2 suítes confortáveis), quarto de empregada, 2 banheiros sociais, sala ampla e arejada para 2 ambientes, cozinha planejada, área de serviço independente e espetacular área gourmet com fogão a lenha, churrasqueira e lago privativo para peixes. Garagem para 2 veículos.",
    features: [
      "Terreno Nobre de 1.200 m²",
      "2 Suítes com Excelente Iluminação",
      "Área Gourmet Completa com Fogão a Lenha",
      "Lago Ornamental para Peixes",
      "Condomínio Fechado com Segurança e Portaria 24h",
      "Sala Integrada para Dois Ambientes",
      "Quarto de Apoio / Empregada",
      "Garagem Coberta"
    ]
  },
  {
    id: 2,
    code: "1601",
    title: "Chácara de 1.000m² com Área de Lazer, Piscina e Sauna",
    type: "casa",
    typeLabel: "Casa / Chácara",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "destaque",
    isSuperDestaque: false,
    price: "R$ 1.200.000,00",
    priceRaw: 1200000,
    condoFee: 0,
    iptu: 95,
    city: "Sarzedo",
    state: "MG",
    neighborhood: "Quintas da Jangada 1ª Seção",
    address: "Quintas da Jangada 1ª Seção, Sarzedo - MG",
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 3,
      parking: 4,
      area: 1000
    },
    badge: "Piscina & Sauna",
    badgeType: "terracotta",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/im5n9u_137969c2c80fe4f46.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/im5n9u_137969c2c80fe4f46.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/iu9k2u_137969c2c80f49e62.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/ic9f3z_137969c2c80e95800.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/ij4e5q_137969c2c80eb5878.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1379/ip2j7b_137969c2c80ed0855.jpg"
    ],
    description: "Chácara diferenciada com 1.000 m² de terreno e infraestrutura completa. Casa principal com 3 quartos (sendo 1 suíte espaçosa com closet), banheiro social, sala de estar acolhedora, cozinha totalmente planejada com bancadas nobres e varanda circundante. Área de lazer privativa de alto nível com piscina aquecida, sauna e espaço gourmet coberto para recepção de familiares e convidados.",
    features: [
      "Chácara Plana de 1.000 m²",
      "Piscina Aquecida e Ducha",
      "Sauna Integrada",
      "Espaço Gourmet com Churrasqueira",
      "Suíte com Closet",
      "Cozinha Planejada com Granito",
      "Estacionamento para 4 Carros"
    ]
  },
  {
    id: 3,
    code: "1649",
    title: "Casa Linear em Lote de 430m² com Pomar no Jardim Ibirité",
    type: "casa",
    typeLabel: "Casa Individual",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "destaque",
    isSuperDestaque: false,
    price: "R$ 430.000,00",
    priceRaw: 430000,
    condoFee: 0,
    iptu: 75,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Jardim Ibirité",
    address: "Bairro Jardim Ibirité, Ibirité - MG",
    specs: {
      bedrooms: 4,
      suites: 0,
      bathrooms: 2,
      parking: 2,
      area: 430
    },
    badge: "Lote de 430m²",
    badgeType: "terracotta",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a17287de9b9f.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a17287de9b9f.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a17284de41a5.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a172851bd1bd.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a172859c4053.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a172865e3ca6.jpg"
    ],
    description: "Lote de 430 m² constituído por casa ampla e muito bem distribuída, composta por 4 quartos, sala confortável, cozinha com copa separada, 2 banheiros sociais, área de serviço coberta, varanda frontal e garagem para 2 carros. O imóvel conta com quintal espaçoso com pomar formado e frutífero, oferecendo qualidade de vida e liberdade em ótima vizinhança de Ibirité.",
    features: [
      "Lote Espaçoso de 430 m²",
      "4 Quartos Amplos e Ventilados",
      "Quintal Gramado com Pomar Produtivo",
      "Cozinha Tradicional com Copa Integrada",
      "2 Banheiros com Revestimento",
      "Garagem para 2 Carros"
    ]
  },
  {
    id: 4,
    code: "1719",
    title: "Casas Novas Individuais com Suíte no Bairro Canaã",
    type: "casa",
    typeLabel: "Casa Individual",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "destaque",
    isSuperDestaque: false,
    price: "R$ 365.000,00",
    priceRaw: 365000,
    condoFee: 0,
    iptu: 55,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Canaã",
    address: "Bairro Canaã, Ibirité - MG",
    specs: {
      bedrooms: 3,
      suites: 1,
      bathrooms: 2,
      parking: 2,
      area: 110
    },
    badge: "Lançamento 2026",
    badgeType: "gold",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9115210e9.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9115210e9.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae911b13928.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9120a815a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae91258335a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae912ab3f3b.jpg"
    ],
    description: "Empreendimento moderno desenvolvido rigorosamente conforme projeto aprovado pela prefeitura. Casas individuais com arquitetura contemporânea, compostas por 3 quartos (sendo 1 suíte privativa), sala com pé-direito imponente, cozinha funcional, área privativa nos fundos e 2 vagas de garagem. Aceita financiamento bancário Caixa e uso de FGTS.",
    features: [
      "Imóvel Novo com Garantia Construtiva",
      "Aceita Financiamento Caixa e FGTS",
      "3 Quartos com Suíte Master",
      "Área Privativa Externa",
      "Acabamento em Porcelanato",
      "2 Vagas de Garagem"
    ]
  },
  {
    id: 5,
    code: "1718",
    title: "Casa de 4 Quartos com Suíte e Garagem no Serra Dourada",
    type: "casa",
    typeLabel: "Casa Individual",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "destaque",
    isSuperDestaque: false,
    price: "R$ 350.000,00",
    priceRaw: 350000,
    condoFee: 0,
    iptu: 60,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Serra Dourada",
    address: "Bairro Serra Dourada, Ibirité - MG",
    specs: {
      bedrooms: 4,
      suites: 1,
      bathrooms: 2,
      parking: 2,
      area: 180
    },
    badge: "4 Quartos",
    badgeType: "dark",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4c5135bb.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4c5135bb.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4c0d0052.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4bd01a58.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4a34be0a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4b4f3a9e.jpg"
    ],
    description: "Lote de 180 m² com sólida edificação composta por 4 quartos espaçosos (sendo 1 suíte confortável), 2 banheiros sociais, sala arejada, copa e cozinha com bom acabamento, área de serviço coberta e garagem para 2 carros. Localização com comércio consolidado, transporte público acessível e ambiente familiar.",
    features: [
      "Lote de 180 m²",
      "4 Quartos (1 Suíte)",
      "2 Banheiros Revestidos",
      "Área de Serviço Coberta",
      "Garagem para 2 Veículos",
      "Próximo a Escolas e Comércio"
    ]
  },
  {
    id: 6,
    code: "1670",
    title: "Imóvel Misto Comercial e Residencial na Av. Serrinha",
    type: "comercial",
    typeLabel: "Comercial / Misto",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "destaque",
    isSuperDestaque: false,
    price: "R$ 350.000,00",
    priceRaw: 350000,
    condoFee: 0,
    iptu: 90,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Marilândia",
    address: "Avenida Serrinha, Marilândia - Ibirité - MG",
    specs: {
      bedrooms: 2,
      suites: 0,
      bathrooms: 2,
      parking: 1,
      area: 360
    },
    badge: "Renda & Negócio",
    badgeType: "terracotta",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/i62yR51A844c3A6Lf8S9_14486aa998bbc58b0.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/i62yR51A844c3A6Lf8S9_14486aa998bbc58b0.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/ibZg44N8691JG3m_14486a44012cf30d2.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/ibZg44N8691JG3m_14486a4401291f2a2.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/ibZg44N8691JG3m_14486a4401311b7ca.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1448/ibZg44N8691JG3m_14486a44013ceff99.jpg"
    ],
    description: "Excelente oportunidade para investidores ou empresários. Terreno de 360 m² estrategicamente situado na Avenida Serrinha, no bairro Marilândia. Conta com barracão residencial independente (4 cômodos, banheiro, área de serviço e 1 vaga) mais 2 lojas com laje de frente para a avenida, proporcionando alto fluxo de pedestres e potencial imediato de dupla locação.",
    features: [
      "Terreno Nobre de 360 m²",
      "2 Lojas Comerciais com Laje Frontal",
      "Barracão Residencial Independente",
      "Frente para Avenida Principal",
      "Potencial para Dupla Renda Locatícia",
      "Ponto Consolidado"
    ]
  },
  {
    id: 7,
    code: "436",
    title: "Lote Residencial Plano com 245m² no Bairro Cruzeiro",
    type: "terreno",
    typeLabel: "Terreno / Lote",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 220.000,00",
    priceRaw: 220000,
    condoFee: 0,
    iptu: 40,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Cruzeiro",
    address: "Bairro Cruzeiro, Ibirité - MG",
    specs: {
      bedrooms: 0,
      suites: 0,
      bathrooms: 0,
      parking: 0,
      area: 245
    },
    badge: "Pronto para Construir",
    badgeType: "gold",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/246/ik9a4m_24669c2c364c00e9.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/246/ik9a4m_24669c2c364c00e9.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/246/il5h9q_24669c2c363a7a05.jpg"
    ],
    description: "Lote residencial à venda com 245 m², perfeito para projetos arquitetônicos personalizados. Localização privilegiada com segurança e tranquilidade, próximo a comércios essenciais, linhas de transporte e áreas verdes. Topografia favorável que reduz custos de terraplanagem.",
    features: [
      "Área de 245 m²",
      "Topografia Plana e Favorável",
      "Infraestrutura Completa (Água, Luz e Esgoto)",
      "Rua Tranquila e Pavimentada",
      "Documentação Rigorosamente em Dia",
      "Pronto para Construção Imediata"
    ]
  },
  {
    id: 8,
    code: "1720",
    title: "Apartamento de 2 Quartos no Jardim Industrial / Contagem",
    type: "apartamento",
    typeLabel: "Apartamento",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 218.000,00",
    priceRaw: 218000,
    condoFee: 190,
    iptu: 45,
    city: "Contagem",
    state: "MG",
    neighborhood: "Jardim Industrial",
    address: "Jardim Industrial, Contagem - MG",
    specs: {
      bedrooms: 2,
      suites: 0,
      bathrooms: 1,
      parking: 1,
      area: 58
    },
    badge: "Jardim Industrial",
    badgeType: "dark",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4c5135bb.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4c5135bb.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4c0d0052.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4bd01a58.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4a34be0a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1498/iS37x4U7W5u1J41_14986aaad4b4f3a9e.jpg"
    ],
    description: "Excelente apartamento no tradicional bairro Jardim Industrial em Contagem. Unidade composta por 2 quartos confortáveis, sala agradável, cozinha com armários e bancada, banheiro social com box, área de serviço arejada e 1 vaga de garagem demarcada. Localização estratégica com acesso rápido a BH, comércio vibrante e serviços.",
    features: [
      "2 Quartos Arejados",
      "1 Vaga de Garagem Demarcada",
      "Sala para Dois Ambientes",
      "Localização Estratégica em Contagem",
      "Condomínio com Portão Eletrônico",
      "Aceita Financiamento Bancário"
    ]
  },
  {
    id: 9,
    code: "1721",
    title: "Apartamento Pronto para Morar no Bairro Industrial / Ibirité",
    type: "apartamento",
    typeLabel: "Apartamento",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 215.000,00",
    priceRaw: 215000,
    condoFee: 180,
    iptu: 40,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Industrial",
    address: "Bairro Industrial, Ibirité - MG",
    specs: {
      bedrooms: 2,
      suites: 0,
      bathrooms: 1,
      parking: 1,
      area: 54
    },
    badge: "Aceita Financiamento",
    badgeType: "gold",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9115210e9.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9115210e9.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae911b13928.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae9120a815a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae91258335a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1499/id4a18Uv35d73634y112_14996aae912ab3f3b.jpg"
    ],
    description: "Apartamento prático e aconchegante composto por 2 quartos, sala iluminada, cozinha funcional, banheiro social e 1 vaga de garagem. Imóvel pronto para morar, elegível para financiamento habitacional Caixa Econômica Federal e uso do FGTS na entrada.",
    features: [
      "Elegível para Minha Casa Minha Vida / Caixa",
      "Possibilidade de Subsídio e Uso do FGTS",
      "2 Quartos Confortáveis",
      "1 Vaga de Garagem",
      "Condomínio Seguro e Acessível",
      "Excelente Opção para Primeiro Imóvel"
    ]
  },
  {
    id: 10,
    code: "1698",
    title: "Casa Linear em Lote de 360m² com Varanda no Cascata",
    type: "casa",
    typeLabel: "Casa Individual",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 200.000,00",
    priceRaw: 200000,
    condoFee: 0,
    iptu: 50,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Cascata",
    address: "Bairro Cascata, Ibirité - MG",
    specs: {
      bedrooms: 2,
      suites: 0,
      bathrooms: 1,
      parking: 2,
      area: 360
    },
    badge: "Lote de 360m²",
    badgeType: "terracotta",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a7e3a923.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a7e3a923.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a6e33ab2.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a63140f1.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a6b0cfb5.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1476/i6Pl3a_14766a762a721151e.jpg"
    ],
    description: "Lote de 360 m² construído por casa linear constituída por 2 quartos, sala, cozinha, banheiro social, área de serviço coberta, agradável varanda frontal e 2 vagas de garagem. Imóvel ideal para quem valoriza terreno livre para ampliações, quintal ou horta.",
    features: [
      "Terreno Amplo de 360 m²",
      "2 Quartos Bem Arejados",
      "Varanda Coberta Aconchegante",
      "Garagem para 2 Carros",
      "Área de Serviço Separada",
      "Venda Direta com Assessoria Carmô"
    ]
  },
  {
    id: 11,
    code: "1515",
    title: "Lotes Contíguos Murados de 400m² e 440m² no Petrovale",
    type: "terreno",
    typeLabel: "Terreno / Lote",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 155.000,00",
    priceRaw: 155000,
    condoFee: 0,
    iptu: 35,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Petrovale",
    address: "Bairro Petrovale - 1ª Seção, Ibirité - MG",
    specs: {
      bedrooms: 0,
      suites: 0,
      bathrooms: 0,
      parking: 0,
      area: 440
    },
    badge: "Lotes Murados",
    badgeType: "gold",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a172851bd1bd.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a172851bd1bd.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1427/i5bwH9932_14276a17287de9b9f.jpg"
    ],
    description: "Dois lotes contíguos com 400 m² e 440 m², ideais para construção de casas residenciais ou galpão comercial. Infraestrutura completa no bairro, muros construídos nas laterais e na frente, garantindo privacidade, segurança e economia para sua obra.",
    features: [
      "Lote Murado com Portão",
      "Opção de Aquisição Conjunta ou Individual",
      "Área Total Disponível até 840 m²",
      "Fácil Acesso à Rodovia e ao Centro",
      "Topografia Prática para Projeto"
    ]
  },
  {
    id: 12,
    code: "904",
    title: "Terreno Comercial e Residencial no Bairro Novo Horizonte",
    type: "terreno",
    typeLabel: "Terreno / Lote",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 150.000,00",
    priceRaw: 150000,
    condoFee: 0,
    iptu: 30,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Novo Horizonte",
    address: "Bairro Novo Horizonte, Ibirité - MG",
    specs: {
      bedrooms: 0,
      suites: 0,
      bathrooms: 0,
      parking: 0,
      area: 300
    },
    badge: "Oportunidade Única",
    badgeType: "terracotta",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/im1y8d_68669c2c522dddd9.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/im1y8d_68669c2c522dddd9.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/ik1q5l_68669c2c5221f3c1.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/ie5h0c_68669c2c522360f1.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/iq1z0j_68669c2c5227da5a.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/686/ii6m2k_68669c2c522b02fc.jpg"
    ],
    description: "Excelente lote de 300 m² no bairro Novo Horizonte, com rápido acesso ao centro comercial de Ibirité. Bairro consolidado, com comércios, escolas e linhas de transporte. Imóvel com documentação regular, pronto para projetos de moradia ou investimento.",
    features: [
      "Área de 300 m²",
      "Região em Pleno Desenvolvimento",
      "Rede Elétrica e Hidráulica Instalada",
      "Rua de Fácil Acesso",
      "Excelente Custo por Metro Quadrado"
    ]
  },
  {
    id: 13,
    code: "1582",
    title: "Casa com Terraço Panorâmico no Morada da Serra",
    type: "casa",
    typeLabel: "Casa Individual",
    purpose: "venda",
    purposeLabel: "Venda",
    category: "oportunidade",
    isSuperDestaque: false,
    price: "R$ 140.000,00",
    priceRaw: 140000,
    condoFee: 0,
    iptu: 30,
    city: "Ibirité",
    state: "MG",
    neighborhood: "Morada da Serra",
    address: "Bairro Morada da Serra, Ibirité - MG",
    specs: {
      bedrooms: 2,
      suites: 0,
      bathrooms: 2,
      parking: 0,
      area: 95
    },
    badge: "Com Terraço",
    badgeType: "dark",
    image: "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4bd01a58.jpg",
    photos: [
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4bd01a58.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4c5135bb.jpg",
      "https://cdn.vistahost.com.br/carmoltd/vista.imobi/fotos/1496/iS37x4U7W5u1J41_14986aaad4c0d0052.jpg"
    ],
    description: "Ótima casa composta por 2 quartos confortáveis, 2 banheiros, sala acolhedora, cozinha, copa e área de serviço. O imóvel conta ainda com amplo terraço coberto com vista privilegiada para as montanhas de Ibirité, ideal para momentos de lazer e confraternização com a família.",
    features: [
      "Terraço Coberto com Vista Panorâmica",
      "2 Quartos Arejados",
      "2 Banheiros",
      "Cozinha com Copa Separada",
      "Excelente Opção de Moradia Econômica"
    ]
  }
];

// Dados institucionais oficiais da Carmô Imobiliária
const CARMO_INFO = {
  name: "Carmô Imobiliária",
  creci: "PJ 5306",
  foundationYear: 1996,
  yearsOfHistory: 30,
  address: "Avenida São Paulo, 44 - Centro, Ibirité - MG, CEP 32400-000",
  addressShort: "Av. São Paulo, 44 - Centro, Ibirité/MG",
  phone: "(31) 3533-2888",
  phoneRaw: "553135332888",
  whatsapp: "(31) 99821-1647",
  whatsappRaw: "5531998211647",
  email: "contato@carmoimobiliaria.com.br",
  hours: "Segunda a Sexta: 08:30 às 17:30 | Sábado: 08:30 às 12:00",
  cities: ["Ibirité", "Contagem", "Sarzedo", "Betim", "Belo Horizonte"],
  neighborhoods: [
    "Centro",
    "Condomínio Quintas da Jangada",
    "Quintas da Jangada 1ª Seção",
    "Jardim Ibirité",
    "Canaã",
    "Serra Dourada",
    "Marilândia",
    "Cruzeiro",
    "Jardim Industrial",
    "Industrial",
    "Cascata",
    "Petrovale",
    "Novo Horizonte",
    "Morada da Serra"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROPERTIES_DATA, CARMO_INFO };
}
