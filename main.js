/* 
  Petra Holanda Confeitaria - Main Interactive Logic
  Gerenciamento de cardápio, filtros, carrinho de compras, customização e checkout via WhatsApp.
*/

// Catalog Data (Com suporte a imagens dinâmicas por variação de sabor)
const PRODUCTS = [
  {
    "id": "empada-frango-catupiry",
    "title": "EMPADA FRANGO CATUPIRY",
    "category": "salgados",
    "price": 9.5,
    "unit": "Porção",
    "description": "empada recheada com frango e catupiry",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "empada-de-carne-de-sol-com-cream-cheese",
    "title": "EMPADA DE CARNE DE SOL COM CREAM CHEESE",
    "category": "salgados",
    "price": 9.5,
    "unit": "Porção",
    "description": "empada recheada com carne de sol e cream cheese",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "p-o-del-cia-frango",
    "title": "PÃO DELÍCIA FRANGO",
    "category": "salgados",
    "price": 11.99,
    "unit": "Porção",
    "description": "pão delícia recheado com frango",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/pao_de_queijo_recheado.png"
  },
  {
    "id": "p-o-delicia-carne",
    "title": "PÃO DELICIA CARNE",
    "category": "salgados",
    "price": 14.99,
    "unit": "Porção",
    "description": "pão delícia recheado com carne",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/pao_de_queijo_recheado.png"
  },
  {
    "id": "coxinha-carne-de-sol",
    "title": "COXINHA CARNE DE SOL",
    "category": "salgados",
    "price": 9.99,
    "unit": "Porção",
    "description": "coxinha de carne de sol com requeijão",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/coxinha_gourmet_solo.png"
  },
  {
    "id": "coxinha-de-frango-com-requeij-o",
    "title": "COXINHA DE FRANGO COM REQUEIJÃO",
    "category": "salgados",
    "price": 9.99,
    "unit": "Porção",
    "description": "coxinha de frango com requeijão",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/coxinha_gourmet_solo.png"
  },
  {
    "id": "salgadinhos-fritos-carne-de-sol-15-unid",
    "title": "SALGADINHOS FRITOS CARNE DE SOL - 15 UNID",
    "category": "salgados",
    "price": 15.0,
    "unit": "Porção",
    "description": "15 unidades",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "salgadinhos-fritos-frango-15-unid",
    "title": "SALGADINHOS FRITOS FRANGO - 15 UNID",
    "category": "salgados",
    "price": 15.0,
    "unit": "Porção",
    "description": "15 unidades",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "salgadinhos-fritos-mix-frango-carne-e-queijo-15-unid",
    "title": "SALGADINHOS FRITOS MIX FRANGO, CARNE E QUEIJO - 15 UNID",
    "category": "salgados",
    "price": 15.0,
    "unit": "Porção",
    "description": "15 unidades",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "salgadinhos-fritos-queijo-15-unid",
    "title": "SALGADINHOS FRITOS QUEIJO - 15 UNID",
    "category": "salgados",
    "price": 15.0,
    "unit": "Porção",
    "description": "15 unidades",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/porcao_salgadinhos_festa.png"
  },
  {
    "id": "croissant-de-carne",
    "title": "CROISSANT DE CARNE",
    "category": "salgados",
    "price": 14.99,
    "unit": "Porção",
    "description": "Croissant De Carne artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥐",
    "filterTags": [
      "individual"
    ],
    "image": "images/croissant_salgado_ervas.png"
  },
  {
    "id": "croissant-de-frango",
    "title": "CROISSANT DE FRANGO",
    "category": "salgados",
    "price": 11.99,
    "unit": "Porção",
    "description": "Croissant De Frango artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥐",
    "filterTags": [
      "individual"
    ],
    "image": "images/croissant_salgado_frango.png"
  },
  {
    "id": "croissant-ninho-com-morango",
    "title": "CROISSANT NINHO COM MORANGO",
    "category": "salgados",
    "price": 17.99,
    "unit": "Porção",
    "description": "Croissant Ninho Com Morango artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥐",
    "filterTags": [
      "individual"
    ],
    "image": "images/croissant_doce_ninho_nutella.png"
  },
  {
    "id": "croissant-ninho-com-nutella",
    "title": "CROISSANT NINHO COM NUTELLA",
    "category": "salgados",
    "price": 17.99,
    "unit": "Porção",
    "description": "Croissant Ninho Com Nutella artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥐",
    "filterTags": [
      "individual"
    ],
    "image": "images/croissant_doce_ninho_nutella.png"
  },
  {
    "id": "alfajor",
    "title": "ALFAJOR",
    "category": "vitrine",
    "price": 10.0,
    "unit": "Unidade",
    "description": "Alfajor artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/alfajor_artesanal.png"
  },
  {
    "id": "banoffe",
    "title": "BANOFFE",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "Banoffe artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_banoffe.gif"
  },
  {
    "id": "bolo-no-pote-brigadeiro",
    "title": "BOLO NO POTE BRIGADEIRO",
    "category": "vitrine",
    "price": 17.0,
    "unit": "Unidade",
    "description": "Bolo No Pote Brigadeiro artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/bolo_no_pote_brigadeiro.png"
  },
  {
    "id": "bolo-no-pote-ninho-brigadeiro",
    "title": "BOLO NO POTE NINHO + BRIGADEIRO",
    "category": "vitrine",
    "price": 17.0,
    "unit": "Unidade",
    "description": "Bolo No Pote Ninho + Brigadeiro artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/bolo_no_pote_brigadeiro.png"
  },
  {
    "id": "bolo-no-pote-ninho-morango",
    "title": "BOLO NO POTE NINHO + MORANGO",
    "category": "vitrine",
    "price": 17.0,
    "unit": "Unidade",
    "description": "Bolo No Pote Ninho + Morango artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/bolo_no_pote_ninho_morango.png"
  },
  {
    "id": "bolo-no-pote-ninho-nutela",
    "title": "BOLO NO POTE NINHO + NUTELA",
    "category": "vitrine",
    "price": 17.0,
    "unit": "Unidade",
    "description": "Bolo No Pote Ninho + Nutela artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/bolo_no_pote_brigadeiro.png"
  },
  {
    "id": "bolo-no-pote-red-velvet",
    "title": "BOLO NO POTE RED VELVET",
    "category": "vitrine",
    "price": 17.0,
    "unit": "Unidade",
    "description": "Bolo No Pote Red Velvet artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/naked_cake_premium_red_velvet.png"
  },
  {
    "id": "brownie-duo-brigadeiro",
    "title": "BROWNIE DUO BRIGADEIRO",
    "category": "vitrine",
    "price": 16.9,
    "unit": "Unidade",
    "description": "Brownie Duo Brigadeiro artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/brownies_gourmet_sabores.png"
  },
  {
    "id": "brownie-duo-ninho-e-brigadeiro",
    "title": "BROWNIE DUO NINHO E BRIGADEIRO",
    "category": "vitrine",
    "price": 16.9,
    "unit": "Unidade",
    "description": "Brownie Duo Ninho E Brigadeiro artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/brownies_gourmet_sabores.png"
  },
  {
    "id": "brownie-duo-ninho-e-morango",
    "title": "BROWNIE DUO NINHO E MORANGO",
    "category": "vitrine",
    "price": 16.9,
    "unit": "Unidade",
    "description": "Brownie Duo Ninho E Morango artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/brownie_supreme_morangos.png"
  },
  {
    "id": "brownie-duo-ninho-e-nutella",
    "title": "BROWNIE DUO NINHO E NUTELLA",
    "category": "vitrine",
    "price": 16.9,
    "unit": "Unidade",
    "description": "Brownie Duo Ninho E Nutella artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/brownie_supreme_morangos.png"
  },
  {
    "id": "cone-trufado",
    "title": "CONE TRUFADO",
    "category": "vitrine",
    "price": 13.0,
    "unit": "Unidade",
    "description": "Cone Trufado artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_cone-trufado.gif"
  },
  {
    "id": "copo-da-felicidade-266g",
    "title": "COPO DA FELICIDADE 266G",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "Copo Da Felicidade 266G artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍯",
    "filterTags": [
      "individual"
    ],
    "image": "images/taca_ostentacao_petra.png"
  },
  {
    "id": "copo-kinder",
    "title": "COPO KINDER",
    "category": "vitrine",
    "price": 19.0,
    "unit": "Unidade",
    "description": "recheio de brigadeiro, pedaços de brownie, pedacos de kinder buneo, e mousse de ninho.",
    "badge": "👑 Gourmet",
    "badgeType": "gold",
    "icon": "🍯",
    "filterTags": [
      "individual"
    ],
    "image": "images/torta_retangular_kinder.png"
  },
  {
    "id": "copo-mousse-de-ninho",
    "title": "COPO MOUSSE DE NINHO",
    "category": "vitrine",
    "price": 19.0,
    "unit": "Unidade",
    "description": "recheio de creme de ninho, pedaçços de morango, bolo de baunilha, mousse de ninho.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍯",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "coxinha-doce",
    "title": "COXINHA DOCE",
    "category": "vitrine",
    "price": 11.99,
    "unit": "Unidade",
    "description": "brigadeiro de morango",
    "badge": "Quentinho",
    "badgeType": "mint",
    "icon": "🍗",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_coxinha-doce.gif"
  },
  {
    "id": "delicia-tropical-sensa-ao",
    "title": "DELICIA TROPICAL - SENSAÇAO",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "Delicia Tropical - Sensaçao artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_delicia-tropical-sensa-ao.gif"
  },
  {
    "id": "fatia-nutella",
    "title": "FATIA NUTELLA",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "Fatia Nutella artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/fatia_cacau_calda_quente.png"
  },
  {
    "id": "del-cia-tropical-abacaxi",
    "title": "DELÍCIA TROPICAL - ABACAXI",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "cocada cremosa, pedaços de massa de banilha, abacaxi caramelizada finalizado de creme de moça e chantininho",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_del-cia-tropical-abacaxi.gif"
  },
  {
    "id": "del-cia-tropical-limao",
    "title": "DELÍCIA TROPICAL - LIMAO",
    "category": "vitrine",
    "price": 15.99,
    "unit": "Unidade",
    "description": "mousse de limão, massa de baunilha e chantininho.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_del-cia-tropical-limao.gif"
  },
  {
    "id": "del-cia-tropical-maracuja",
    "title": "DELÍCIA TROPICAL - MARACUJA",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "delicia tropical - maracuja",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/fatia_torta_maracuja.png"
  },
  {
    "id": "del-cia-tropical-prestigio",
    "title": "DELÍCIA TROPICAL - PRESTIGIO",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "cocada cremosa, pedaços de brownie, e ganache.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_del-cia-tropical-prestigio.gif"
  },
  {
    "id": "docinhos-brigadeiro-belga",
    "title": "DOCINHOS BRIGADEIRO BELGA",
    "category": "vitrine",
    "price": 4.0,
    "unit": "Unidade",
    "description": "Docinhos Brigadeiro Belga artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_docinhos-brigadeiro-belga.gif"
  },
  {
    "id": "docinhos-churros",
    "title": "DOCINHOS CHURROS",
    "category": "vitrine",
    "price": 4.0,
    "unit": "Unidade",
    "description": "Docinhos Churros artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "docinhos-ferrero-rocher",
    "title": "DOCINHOS FERRERO ROCHER",
    "category": "vitrine",
    "price": 4.0,
    "unit": "Unidade",
    "description": "Docinhos Ferrero Rocher artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "👑 Gourmet",
    "badgeType": "gold",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_docinhos-ferrero-rocher.gif"
  },
  {
    "id": "docinhos-ninho-com-nutela",
    "title": "DOCINHOS NINHO COM NUTELA",
    "category": "vitrine",
    "price": 4.0,
    "unit": "Unidade",
    "description": "Docinhos Ninho Com Nutela artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_docinhos-ninho-com-nutela.gif"
  },
  {
    "id": "docinhos-surpresa-de-uva",
    "title": "DOCINHOS SURPRESA DE UVA",
    "category": "vitrine",
    "price": 4.0,
    "unit": "Unidade",
    "description": "Docinhos Surpresa De Uva artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_docinhos-surpresa-de-uva.gif"
  },
  {
    "id": "fatia-crocante",
    "title": "FATIA CROCANTE",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "massa de baunilha e chocolate com recheio de brigadeiro, doce de leite e amendoim crocante / com corbetura de chantilly",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/fatia_torta_duo_glace.png"
  },
  {
    "id": "fatia-matilda",
    "title": "FATIA MATILDA",
    "category": "vitrine",
    "price": 23.0,
    "unit": "Unidade",
    "description": "Fatia Matilda artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "⭐ Mais Pedido",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_cacau_calda_quente.png"
  },
  {
    "id": "fatia-matilda-completa",
    "title": "FATIA MATILDA COMPLETA",
    "category": "vitrine",
    "price": 26.99,
    "unit": "Unidade",
    "description": "bolo chocolate 50% cacau,recheado com 3 camadas de brigadeiro ao leite e cobertura de ganache de chocolatecobre! peso medio: 350g. acompanha calda de chocolate e granulado de chocolate.",
    "badge": "⭐ Mais Pedido",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_cacau_calda_quente.png"
  },
  {
    "id": "fatia-ninho-com-nutela",
    "title": "FATIA NINHO COM NUTELA",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "massa: baunilha, recheio de ninho com nutella e cobertura de ninho.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/fatia_torta_duo_glace.png"
  },
  {
    "id": "fatia-red-velvet",
    "title": "FATIA RED VELVET",
    "category": "vitrine",
    "price": 20.0,
    "unit": "Unidade",
    "description": "massa red velvet saborizada de frutas vermelhas com recheio de ninho com geleia de morango / com cobertura de chantilly",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "individual"
    ],
    "image": "images/fatia_red_velvet.png"
  },
  {
    "id": "fatia-tenta-ao",
    "title": "FATIA TENTAÇAO",
    "category": "vitrine",
    "price": 21.0,
    "unit": "Unidade",
    "description": "massa-chocolate-recheio de creme de moça e morango-cobertura de chocolate.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_red_velvet.png"
  },
  {
    "id": "fatia-torta-brownie",
    "title": "FATIA TORTA BROWNIE",
    "category": "vitrine",
    "price": 25.0,
    "unit": "Unidade",
    "description": "Fatia Torta Brownie artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_pizza_brownie.png"
  },
  {
    "id": "gargamel",
    "title": "GARGAMEL",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "recheio de creme de moça, recheio de brigadeiro,recheio de doce de leite, amendoim caramelizado e chantininho.",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_gargamel.gif"
  },
  {
    "id": "pasteninho",
    "title": "PASTENINHO",
    "category": "vitrine",
    "price": 9.0,
    "unit": "Unidade",
    "description": "massa de leite ninho com leite condesado e recheio de nutella.",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_pasteninho.gif"
  },
  {
    "id": "pudim-de-leite",
    "title": "PUDIM DE LEITE",
    "category": "vitrine",
    "price": 18.0,
    "unit": "Unidade",
    "description": "pudim 250g",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_pudim-de-leite.gif"
  },
  {
    "id": "fatia-torta-duo",
    "title": "FATIA TORTA DUO",
    "category": "vitrine",
    "price": 22.0,
    "unit": "Unidade",
    "description": "Fatia Torta Duo artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_torta_duo_glace.png"
  },
  {
    "id": "fatia-torta-ferrero",
    "title": "FATIA TORTA FERRERO",
    "category": "vitrine",
    "price": 22.0,
    "unit": "Unidade",
    "description": "base de biscoito com chocolate 50% cacau, mousse de creme de avelã, ganache de chocolate meio amargo com pedaços de amendoim e brigadeiro belga",
    "badge": "👑 Gourmet",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/fatia_cacau_calda_quente.png"
  },
  {
    "id": "fatia-torta-pistache",
    "title": "FATIA TORTA PISTACHE",
    "category": "vitrine",
    "price": 25.9,
    "unit": "Unidade",
    "description": "base de biscoito, mousse de pistache, geleia de morango, ganache de chocolate branco...",
    "badge": "👑 Gourmet",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/cheesecake_frutas_vermelhas.png"
  },
  {
    "id": "ta-a-premium",
    "title": "TAÇA PREMIUM",
    "category": "tacas",
    "price": 38.9,
    "unit": "Porção",
    "description": "sorvete de creme, acompanhada de recheio de brigadeiro e branco, com pedaços de brownie, acompamento,...",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍧",
    "filterTags": [
      "destaque"
    ],
    "image": "images/taca_ostentacao_petra.png"
  },
  {
    "id": "caneca-brownie",
    "title": "CANECA BROWNIE",
    "category": "tacas",
    "price": 29.9,
    "unit": "Porção",
    "description": "sobremesa com sorvete de creme, acompanhada depedacos de brownie,recheio de brigadeiro tradicional ...",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍧",
    "filterTags": [
      "destaque"
    ],
    "image": "images/caneca_petra_gourmet.png"
  },
  {
    "id": "grand-gateau",
    "title": "GRAND GATEAU",
    "category": "tacas",
    "price": 45.9,
    "unit": "Porção",
    "description": "bolinho de chocolate quentinho, acompanhado de brigadeiro cremoso tradicional e branco, acompanhamento,...",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍧",
    "filterTags": [
      "destaque"
    ],
    "image": "images/grand_gateau_magnum.png"
  },
  {
    "id": "brownie-com-sorvete",
    "title": "BROWNIE COM SORVETE",
    "category": "tacas",
    "price": 28.9,
    "unit": "Porção",
    "description": "fatia de pizza brownie, sorvete de creme, acompanheto e calda de chocolate.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "destaque"
    ],
    "image": "images/brownie_colher_sorvete.png"
  },
  {
    "id": "grand-vulcao",
    "title": "GRAND VULCAO",
    "category": "tacas",
    "price": 32.9,
    "unit": "Porção",
    "description": "bolo quentinho, acompando de calda de chocolate e sorevte de creme,finalizado com ganule belga e acompanhamento.",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍧",
    "filterTags": [
      "destaque"
    ],
    "image": "images/taca_vulcao_brigadeiro.png"
  },
  {
    "id": "gelatto",
    "title": "GELATTO",
    "category": "tacas",
    "price": 42.9,
    "unit": "Porção",
    "description": "base de brownie quentinho, acompanhado de picole magnum, recheio de ninho e brigadeiro, acompanhamento,nutella e...",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍧",
    "filterTags": [
      "destaque"
    ],
    "image": "images/taca_ninho_morango_sorvete.png"
  },
  {
    "id": "caseirinhos-simples",
    "title": "CASEIRINHOS SIMPLES",
    "category": "vitrine",
    "price": 36.9,
    "unit": "Unidade",
    "description": "serve de 5 a 6 pessoas / obs: para retirada em loja o pedido só entra para produção mediante pagamento via pix",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/caseirinho_simples_duo.png"
  },
  {
    "id": "caseirinho-premium",
    "title": "CASEIRINHO PREMIUM",
    "category": "vitrine",
    "price": 49.9,
    "unit": "Unidade",
    "description": "serve de 5 a 6 pessoas / obs: para retirada em loja o pedido só entra para produção mediante pagamento pix",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/caseirinho_premium_duo.png"
  },
  {
    "id": "mini-vulcao-chocolatudo",
    "title": "MINI VULCAO CHOCOLATUDO",
    "category": "vitrine",
    "price": 15.99,
    "unit": "Unidade",
    "description": "Mini Vulcao Chocolatudo artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍧",
    "filterTags": [
      "individual"
    ],
    "image": "images/mini_vulcao_sorvete.png"
  },
  {
    "id": "mini-vulcao-ninho-com-nutella",
    "title": "MINI VULCAO NINHO COM NUTELLA",
    "category": "vitrine",
    "price": 15.99,
    "unit": "Unidade",
    "description": "Mini Vulcao Ninho Com Nutella artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍧",
    "filterTags": [
      "individual"
    ],
    "image": "images/mini_vulcao_sorvete_morango.png"
  },
  {
    "id": "caseirinho-premium-tam-familia",
    "title": "CASEIRINHO PREMIUM TAM. FAMILIA",
    "category": "vitrine",
    "price": 82.5,
    "unit": "Unidade",
    "description": "serve de 10 a 12 pessoas / obs: para retirada em loja o pedido só entra para produção mediante pagamento via pix",
    "badge": "⭐ Especial",
    "badgeType": "gold",
    "icon": "🍰",
    "filterTags": [
      "destaque"
    ],
    "image": "images/caseirinho_premium_duo.png"
  },
  {
    "id": "combo-1-fatia-refri-lata-coxinha-frango-ou-carne",
    "title": "COMBO 1 - FATIA, REFRI LATA, COXINHA FRANGO OU CARNE",
    "category": "salgados",
    "price": 32.99,
    "unit": "Combo",
    "description": "coloque na observação: sabor da fatia ( tentação, nutella ou crocante ) , da coxinha e do refri . obs fatia red velvit...",
    "badge": "⭐ Mais Pedido",
    "badgeType": "gold",
    "icon": "🍗",
    "filterTags": [
      "destaque"
    ],
    "image": "images/combo_coxinha_fatia_cafe.png"
  },
  {
    "id": "combo-2-bolo-no-pote-refri-lata-coxinha-frango-ou-carne",
    "title": "COMBO 2 - BOLO NO POTE, REFRI LATA, COXINHA FRANGO OU CARNE",
    "category": "salgados",
    "price": 29.99,
    "unit": "Combo",
    "description": "combo com bolo no pote, refrigerante lata e coxinha",
    "badge": "⭐ Mais Pedido",
    "badgeType": "gold",
    "icon": "🍗",
    "filterTags": [
      "destaque"
    ],
    "image": "images/combo_da_semana.png"
  },
  {
    "id": "agua-com-gas",
    "title": "AGUA COM GAS",
    "category": "bebidas",
    "price": 5.0,
    "unit": "Unidade",
    "description": "água mineral com gás",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_agua-com-gas.gif"
  },
  {
    "id": "agua-mineral",
    "title": "AGUA MINERAL",
    "category": "bebidas",
    "price": 4.0,
    "unit": "Unidade",
    "description": "água mineral sem gás",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_agua-mineral.gif"
  },
  {
    "id": "cafe-expresso",
    "title": "CAFE EXPRESSO",
    "category": "bebidas",
    "price": 4.5,
    "unit": "Unidade",
    "description": "café expresso",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "☕",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_cafe-expresso.gif"
  },
  {
    "id": "capuccino",
    "title": "CAPUCCINO",
    "category": "bebidas",
    "price": 8.9,
    "unit": "Unidade",
    "description": "capuccino tradicional",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "☕",
    "filterTags": [
      "individual"
    ],
    "image": "images/cappuccino_especial_chantilly.png"
  },
  {
    "id": "capuccino-completo",
    "title": "CAPUCCINO COMPLETO",
    "category": "bebidas",
    "price": 14.9,
    "unit": "Unidade",
    "description": "capuccino com borda de chocolate e chantilly",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "☕",
    "filterTags": [
      "individual"
    ],
    "image": "images/cappuccino_especial_chantilly.png"
  },
  {
    "id": "chocolate-quente",
    "title": "CHOCOLATE QUENTE",
    "category": "bebidas",
    "price": 18.0,
    "unit": "Unidade",
    "description": "chocolate quente cremoso",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "☕",
    "filterTags": [
      "individual"
    ],
    "image": "images/chocolate_gelado_nutella.png"
  },
  {
    "id": "coca-cola-1l",
    "title": "COCA COLA 1L",
    "category": "bebidas",
    "price": 10.0,
    "unit": "Unidade",
    "description": "Coca Cola 1L artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_coca-cola-1l.gif"
  },
  {
    "id": "coca-zero-1lt",
    "title": "COCA ZERO 1LT",
    "category": "bebidas",
    "price": 10.0,
    "unit": "Unidade",
    "description": "Coca Zero 1Lt artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_coca-zero-1lt.gif"
  },
  {
    "id": "guarana-1lt",
    "title": "GUARANA 1LT",
    "category": "bebidas",
    "price": 10.0,
    "unit": "Unidade",
    "description": "Guarana 1Lt artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_guarana-1lt.gif"
  },
  {
    "id": "milkshake-chocomaltine",
    "title": "MILKSHAKE CHOCOMALTINE",
    "category": "bebidas",
    "price": 16.0,
    "unit": "Unidade",
    "description": "Milkshake Chocomaltine artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/milkshake_ovomaltine.png"
  },
  {
    "id": "milkshake-creme",
    "title": "MILKSHAKE CREME",
    "category": "bebidas",
    "price": 16.0,
    "unit": "Unidade",
    "description": "Milkshake Creme artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/cappuccino_especial_chantilly.png"
  },
  {
    "id": "milkshake-morango",
    "title": "MILKSHAKE MORANGO",
    "category": "bebidas",
    "price": 16.0,
    "unit": "Unidade",
    "description": "Milkshake Morango artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/taca_ninho_morango_sorvete.png"
  },
  {
    "id": "milkshake-nutella",
    "title": "MILKSHAKE NUTELLA",
    "category": "bebidas",
    "price": 16.0,
    "unit": "Unidade",
    "description": "Milkshake Nutella artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/chocolate_gelado_nutella.png"
  },
  {
    "id": "refrigerante-lata-coca-cola",
    "title": "REFRIGERANTE LATA COCA-COLA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Coca-Cola artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-coca-cola.gif"
  },
  {
    "id": "refrigerante-lata-fanta-laranja",
    "title": "REFRIGERANTE LATA FANTA LARANJA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Fanta Laranja artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-fanta-laranja.gif"
  },
  {
    "id": "refrigerante-lata-fanta-uva",
    "title": "REFRIGERANTE LATA FANTA UVA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Fanta Uva artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-fanta-uva.gif"
  },
  {
    "id": "refrigerante-lata-guarana",
    "title": "REFRIGERANTE LATA GUARANA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Guarana artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-guarana.gif"
  },
  {
    "id": "suco-laranja",
    "title": "SUCO LARANJA",
    "category": "bebidas",
    "price": 7.0,
    "unit": "Unidade",
    "description": "Suco Laranja artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_suco-laranja.gif"
  },
  {
    "id": "suco-polpa-acerola",
    "title": "SUCO POLPA ACEROLA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Suco Polpa Acerola artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "suco-polpa-caja",
    "title": "SUCO POLPA CAJA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Suco Polpa Caja artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/cappuccino_especial_chantilly.png"
  },
  {
    "id": "suco-polpa-goiaba",
    "title": "SUCO POLPA GOIABA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Suco Polpa Goiaba artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/chocolate_gelado_nutella.png"
  },
  {
    "id": "suco-polpa-maracuja",
    "title": "SUCO POLPA MARACUJA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Suco Polpa Maracuja artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "h2o",
    "title": "H2O",
    "category": "bebidas",
    "price": 6.5,
    "unit": "Unidade",
    "description": "H2O artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_h2o.gif"
  },
  {
    "id": "suco-de-uva",
    "title": "SUCO DE UVA",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Suco De Uva artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/chocolate_gelado_nutella.png"
  },
  {
    "id": "refrigerante-lata-coca-cola-zero",
    "title": "REFRIGERANTE LATA COCA-COLA ZERO",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Coca-Cola Zero artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-coca-cola-zero.gif"
  },
  {
    "id": "refrigerante-lata-guarana-zero",
    "title": "REFRIGERANTE LATA GUARANA ZERO",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Guarana Zero artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-guarana-zero.gif"
  },
  {
    "id": "refrigerante-lata-sprite",
    "title": "REFRIGERANTE LATA SPRITE",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Sprite artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-sprite.gif"
  },
  {
    "id": "refrigerante-lata-sprite-zero",
    "title": "REFRIGERANTE LATA SPRITE ZERO",
    "category": "bebidas",
    "price": 6.0,
    "unit": "Unidade",
    "description": "Refrigerante Lata Sprite Zero artesanal feito no capricho pela Confeitaria Petra Holanda.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🥤",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_refrigerante-lata-sprite-zero.gif"
  },
  {
    "id": "dimdim-goumert-abacaxi-com-coco",
    "title": "DIMDIM GOUMERT ABACAXI COM COCO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "dindin gourmet sabor abacaxi com coco",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dimdim-goumert-abacaxi-com-coco.gif"
  },
  {
    "id": "dindin-goumert-sensa-o",
    "title": "DINDIN GOUMERT SENSAÇÃO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "(sabor morango trufado com chocolate nobre ao leite)",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-goumert-sensa-o.gif"
  },
  {
    "id": "dindin-gourmert-pistache",
    "title": "DINDIN GOURMERT PISTACHE",
    "category": "dindins",
    "price": 10.99,
    "unit": "Unidade",
    "description": "dindin gourmet sabor pistache",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmert-pistache.gif"
  },
  {
    "id": "dindin-gourmert-pudim",
    "title": "DINDIN GOURMERT PUDIM",
    "category": "dindins",
    "price": 10.99,
    "unit": "Unidade",
    "description": "dindin gourmet sabor pudim",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmert-pudim.gif"
  },
  {
    "id": "dindin-gourmet-ninho-com-morango",
    "title": "DINDIN GOURMET NINHO COM MORANGO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "sabor ninho com geleia de morango artesanal",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "dindin-gourmet-oreo",
    "title": "DINDIN GOURMET OREO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "sabor ninho com pedaços de oreo",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmet-oreo.gif"
  },
  {
    "id": "dindin-gourmet-ovomaltine",
    "title": "DINDIN GOURMET OVOMALTINE",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "sabor ovomaltine trufado de chocolate nobre ao leite",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmet-ovomaltine.gif"
  },
  {
    "id": "dindin-gourmet-prestigio",
    "title": "DINDIN GOURMET PRESTIGIO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "sabor coco trufado com chocolate nobre ao leite",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmet-prestigio.gif"
  },
  {
    "id": "dindin-gourmet-torta-de-limao",
    "title": "DINDIN GOURMET TORTA DE LIMAO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "sabor limão, trufado com chocolate branco nobre e pedaços de biscoito",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-gourmet-torta-de-limao.gif"
  },
  {
    "id": "dindin-ninho-e-nutella",
    "title": "DINDIN NINHO E NUTELLA",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "base de ninho trufada com nutella",
    "badge": "✨ Gelado Artesanal",
    "badgeType": "mint",
    "icon": "🍦",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_dindin-ninho-e-nutella.gif"
  },
  {
    "id": "maracuja-trufado",
    "title": "MARACUJA TRUFADO",
    "category": "dindins",
    "price": 8.99,
    "unit": "Unidade",
    "description": "base de maracujá com chocolate nobre ao leite",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "✨",
    "filterTags": [
      "individual"
    ],
    "image": "images/potinho_mousse_ninho_morango.png"
  },
  {
    "id": "sacola-para-presente-g",
    "title": "SACOLA PARA PRESENTE G",
    "category": "presentes",
    "price": 7.0,
    "unit": "Unidade",
    "description": "o caseirinho cabe nela.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🎁",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_sacola-para-presente-g.gif"
  },
  {
    "id": "sacola-tam-p",
    "title": "SACOLA TAM P",
    "category": "presentes",
    "price": 5.0,
    "unit": "Unidade",
    "description": "o caseirinho não cabe nela.",
    "badge": "Delícia",
    "badgeType": "mint",
    "icon": "🎁",
    "filterTags": [
      "individual"
    ],
    "image": "images/xmenu_sacola-tam-p.gif"
  }
];

// Clean up any temporary blob URLs from local testing
const rawCustomPhotos = JSON.parse(localStorage.getItem("petra_custom_photos") || "{}");
const cleanedCustomPhotos = {};
Object.keys(rawCustomPhotos).forEach(k => {
  if (rawCustomPhotos[k] && !rawCustomPhotos[k].startsWith("blob:")) {
    cleanedCustomPhotos[k] = rawCustomPhotos[k];
  }
});

// App State
const state = {
  cart: [],
  activeCategory: "todos",
  activeFilter: null,
  searchQuery: "",
  photoManagerEnabled: false,
  customPhotos: cleanedCustomPhotos,
  selectedProductForModal: null,
  modalQty: 1,
  orderMode: "table", // "table" (Consumo no Local / QR Code) ou "delivery" (Delivery/Retirada)
  tableNumber: "01",
  orderType: "delivery" // "delivery" ou "pickup" quando orderMode === "delivery"
};

// DOM Element References
const elements = {
  // Order Mode Elements
  orderModeTabs: document.querySelectorAll(".mode-tab"),
  tableSelectorBar: document.getElementById("table-selector-bar"),
  tableNumberSelect: document.getElementById("table-number-select"),

  productsGrid: document.getElementById("products-grid"),
  emptyState: document.getElementById("empty-state"),
  searchInput: document.getElementById("search-input"),
  searchClearBtn: document.getElementById("search-clear"),
  resetSearchBtn: document.getElementById("reset-search-btn"),
  categoryChips: document.querySelectorAll(".category-chip"),
  filterTags: document.querySelectorAll(".filter-tag"),
  currentCategoryHeading: document.getElementById("current-category-heading"),
  photoManagerToggle: document.getElementById("photo-manager-toggle"),

  // Modal Product
  productModalBackdrop: document.getElementById("product-modal-backdrop"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalImgContainer: document.getElementById("modal-img-container"),
  modalCategoryTag: document.getElementById("modal-category-tag"),
  modalTitle: document.getElementById("modal-title"),
  modalPrice: document.getElementById("modal-price"),
  modalDescription: document.getElementById("modal-description"),
  modalOptionsGroup: document.getElementById("modal-options-group"),
  modalOptionsLabel: document.getElementById("modal-options-label"),
  modalOptionsList: document.getElementById("modal-options-list"),
  modalNoteInput: document.getElementById("modal-note"),
  qtyMinusBtn: document.getElementById("qty-minus"),
  qtyPlusBtn: document.getElementById("qty-plus"),
  qtyDisplay: document.getElementById("qty-display"),
  modalTotalPrice: document.getElementById("modal-total-price"),
  modalCustomForm: document.getElementById("modal-custom-form"),

  // Cart Drawer
  cartDrawerBackdrop: document.getElementById("cart-drawer-backdrop"),
  btnOpenCart: document.getElementById("btn-open-cart"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartItemsContainer: document.getElementById("cart-items-container"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartDeliveryFee: document.getElementById("cart-delivery-fee"),
  cartGrandTotal: document.getElementById("cart-grand-total"),
  deliveryFeeLine: document.getElementById("delivery-fee-line"),
  orderTypeBtns: document.querySelectorAll(".order-type-btn"),
  deliveryAddressGroup: document.getElementById("delivery-address-group"),
  checkoutForm: document.getElementById("checkout-form"),
  cartCountBadges: document.querySelectorAll(".cart-count-badge"),

  // Store Info Modal
  btnInfoModal: document.getElementById("btn-info-modal"),
  infoModalBackdrop: document.getElementById("info-modal-backdrop"),
  infoModalClose: document.getElementById("info-modal-close"),

  // Floating Cart Bar
  floatingCartBar: document.getElementById("floating-cart-bar"),
  floatCartCount: document.getElementById("float-cart-count"),
  floatCartTotal: document.getElementById("float-cart-total"),
  btnFloatOpen: document.getElementById("btn-float-open")
};

function init() {
  attachEventListeners();
  renderProducts();
  updateCartUI();
}

function renderProducts() {
  const filtered = PRODUCTS.filter(product => {
    const matchCategory = state.activeCategory === "todos" || product.category === state.activeCategory;
    const matchFilter = !state.activeFilter || (product.filterTags && product.filterTags.includes(state.activeFilter));
    const query = state.searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      product.title.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      (product.options && product.options.some(opt => opt.toLowerCase().includes(query)));

    return matchCategory && matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = "";
    elements.emptyState.hidden = false;
    return;
  }

  elements.emptyState.hidden = true;
  elements.productsGrid.innerHTML = filtered.map(product => createProductCardHTML(product)).join("");

  document.querySelectorAll(".product-card").forEach(card => {
    const id = card.dataset.id;
    const product = PRODUCTS.find(p => p.id === id);

    card.addEventListener("click", (e) => {
      if (e.target.closest(".quick-upload-trigger") || e.target.closest(".btn-add-card")) {
        return;
      }
      openProductModal(product);
    });

    const addBtn = card.querySelector(".btn-add-card");
    if (addBtn) {
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (product.options && product.options.length > 0) {
          openProductModal(product);
        } else {
          addToCart(product, 1, null, "");
        }
      });
    }

    const uploadBtn = card.querySelector(".quick-upload-trigger");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        triggerImageUploadForProduct(id);
      });
    }
  });
}

function createProductCardHTML(product) {
  let customImg = state.customPhotos[product.id];
  if (customImg && customImg.startsWith("blob:")) {
    customImg = null;
  }
  const finalImg = customImg || product.image;
  
  const imageHTML = finalImg 
    ? `<img src="${finalImg}" alt="${product.title}" class="product-card-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
       <div class="placeholder-illustration" style="display:none;">
        <span class="ph-icon">${product.icon || '🧁'}</span>
        <span class="ph-text">Petra Holanda</span>
       </div>`
    : `<div class="placeholder-illustration">
        <span class="ph-icon">${product.icon || '🧁'}</span>
        <span class="ph-text">Petra Holanda</span>
       </div>`;

  const badgeHTML = product.badge 
    ? `<span class="card-badge ${product.badgeType === 'gold' ? 'gold' : ''}">${product.badge}</span>` 
    : "";

  const uploadTriggerHTML = state.photoManagerEnabled
    ? `<button class="quick-upload-trigger" title="Substituir foto deste item">📷</button>`
    : "";

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-img-wrapper">
        ${badgeHTML}
        ${uploadTriggerHTML}
        ${imageHTML}
      </div>
      <div class="product-card-body">
        <h3 class="product-card-title">${product.title}</h3>
        <p class="product-card-desc">${product.description}</p>
        <div class="product-card-footer">
          <span class="product-price">${formatCurrency(product.price)}</span>
          <button class="btn-add-card">
            ${product.options ? 'Opções +' : '+ Adicionar'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function openProductModal(product) {
  state.selectedProductForModal = product;
  state.modalQty = 1;

  elements.modalCategoryTag.textContent = product.category.toUpperCase();
  elements.modalTitle.textContent = product.title;
  elements.modalPrice.textContent = `${formatCurrency(product.price)} / ${product.unit}`;
  elements.modalDescription.textContent = product.description;
  elements.modalNoteInput.value = "";
  elements.qtyDisplay.textContent = "1";

  // Initial Modal Image
  updateModalImage(product, product.options ? product.options[0] : null);

  if (product.options && product.options.length > 0) {
    elements.modalOptionsGroup.style.display = "block";
    elements.modalOptionsLabel.textContent = "Escolha o seu sabor favorito:";
    elements.modalOptionsList.innerHTML = product.options.map((opt, idx) => `
      <label class="option-radio-item">
        <input type="radio" name="product-option" value="${opt}" ${idx === 0 ? 'checked' : ''}>
        <span>${opt}</span>
      </label>
    `).join("");

    // Listen for radio change to swap image dynamically based on selected flavor variation!
    elements.modalOptionsList.querySelectorAll("input[name='product-option']").forEach(radio => {
      radio.addEventListener("change", (e) => {
        const selectedOpt = e.target.value;
        updateModalImage(product, selectedOpt);
      });
    });

  } else {
    elements.modalOptionsGroup.style.display = "none";
    elements.modalOptionsList.innerHTML = "";
  }

  updateModalPriceCalculation();
  elements.productModalBackdrop.classList.add("open");
}

function updateModalImage(product, selectedOption = null) {
  let imgUrl = state.customPhotos[product.id] || product.image;

  // Check if this option has a specific variation image!
  if (selectedOption && product.optionImages && product.optionImages[selectedOption]) {
    imgUrl = product.optionImages[selectedOption];
  }

  elements.modalImgContainer.innerHTML = imgUrl 
    ? `<img src="${imgUrl}" alt="${product.title}" />`
    : `<div class="placeholder-illustration">
        <span class="ph-icon" style="font-size: 4rem;">${product.icon}</span>
        <span class="ph-text">Confeitaria Fina</span>
       </div>`;
}

function updateModalPriceCalculation() {
  if (!state.selectedProductForModal) return;
  const total = state.selectedProductForModal.price * state.modalQty;
  elements.modalTotalPrice.textContent = formatCurrency(total);
}

function closeProductModal() {
  elements.productModalBackdrop.classList.remove("open");
  state.selectedProductForModal = null;
}

function addToCart(product, qty = 1, option = null, note = "") {
  let customImg = state.customPhotos[product.id] || product.image;
  if (option && product.optionImages && product.optionImages[option]) {
    customImg = product.optionImages[option];
  }
  
  const existingIndex = state.cart.findIndex(item => 
    item.id === product.id && item.option === option && item.note === note
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: qty,
      option: option,
      note: note,
      icon: product.icon,
      image: customImg
    });
  }

  updateCartUI();
  showToastNotification(`"${product.title}" adicionado à sacola!`);
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  elements.cartCountBadges.forEach(badge => badge.textContent = totalItemsCount);
  elements.floatCartCount.textContent = totalItemsCount;
  elements.floatCartTotal.textContent = formatCurrency(subtotal);

  if (totalItemsCount > 0) {
    elements.floatingCartBar.classList.add("visible");
  } else {
    elements.floatingCartBar.classList.remove("visible");
  }

  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--cocoa-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🛍️</div>
        <p style="font-weight: 600;">Sua sacola está vazia</p>
        <p style="font-size: 0.85rem; opacity: 0.8;">Escolha os doces e salgados que você mais gosta para começar seu pedido.</p>
      </div>
    `;
  } else {
    elements.cartItemsContainer.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          ${item.image ? `<img src="${item.image}" alt="${item.title}"/>` : item.icon}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          ${item.option ? `<div class="cart-item-opt">Sabor: <strong>${item.option}</strong></div>` : ''}
          ${item.note ? `<div class="cart-item-opt">Obs: <em>${item.note}</em></div>` : ''}
          <div class="cart-item-price">${item.qty}x ${formatCurrency(item.price)} = ${formatCurrency(item.price * item.qty)}</div>
        </div>
        <button class="cart-item-remove" data-index="${idx}" title="Remover item">&times;</button>
      </div>
    `).join("");

    document.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(e.target.dataset.index);
        removeFromCart(idx);
      });
    });
  }

  elements.cartSubtotal.textContent = formatCurrency(subtotal);
  
  if (state.orderType === "delivery") {
    elements.deliveryFeeLine.style.display = "flex";
    elements.cartGrandTotal.textContent = formatCurrency(subtotal) + " + taxa";
  } else {
    elements.deliveryFeeLine.style.display = "none";
    elements.cartGrandTotal.textContent = formatCurrency(subtotal);
  }
}

function handleWhatsAppCheckout(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    alert("Sua sacola está vazia! Adicione alguns produtos antes de finalizar.");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const payment = document.getElementById("cust-payment").value;
  const address = document.getElementById("cust-address").value.trim();

  if (state.orderType === "delivery" && !address) {
    alert("Por favor, informe o endereço completo para entrega.");
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = `✨ *NOVO PEDIDO - PETRA HOLANDA CONFEITARIA* ✨\n\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📱 *WhatsApp:* ${phone}\n`;
  message += `📍 *Tipo de Pedido:* ${state.orderType === 'delivery' ? '🚚 Entrega (Delivery)' : '🏪 Retirada na Loja'}\n`;
  
  if (state.orderType === 'delivery') {
    message += `🏡 *Endereço:* ${address}\n`;
  }
  
  message += `💳 *Forma de Pagamento:* ${payment}\n\n`;
  message += `------------------------------------\n`;
  message += `📜 *ITENS DO PEDIDO:*\n\n`;

  state.cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.title}* (${item.qty}x)\n`;
    if (item.option) message += `   ▫️ Sabor: ${item.option}\n`;
    if (item.note) message += `   ▫️ Obs: ${item.note}\n`;
    message += `   💰 Valor: ${formatCurrency(item.price * item.qty)}\n\n`;
  });

  message += `------------------------------------\n`;
  message += `💵 *Subtotal:* ${formatCurrency(subtotal)}\n`;
  if (state.orderType === 'delivery') {
    message += `🛵 *Taxa de Entrega:* A confirmar com o atendente\n`;
  }
  message += `\nMuito obrigado! Aguardo a confirmação do pedido. ❤️`;

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5584999999999&text=${encodedMsg}`;

  window.open(whatsappUrl, "_blank");
}

function triggerImageUploadForProduct(productId) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      state.customPhotos[productId] = dataUrl;
      localStorage.setItem("petra_custom_photos", JSON.stringify(state.customPhotos));
      renderProducts();
      showToastNotification("Foto do produto atualizada com sucesso!");
    };
    reader.readAsDataURL(file);
  };

  input.click();
}

function showToastNotification(text) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--cocoa-dark);
    color: #FFF;
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius-pill);
    font-size: 0.85rem;
    font-weight: 600;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: fadeIn 0.3s forwards;
  `;
  toast.textContent = text;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

function formatCurrency(val) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(val);
}

function attachEventListeners() {

  // Order Mode Tab Switcher (Consumo na Loja vs Delivery)
  elements.orderModeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      elements.orderModeTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.orderMode = tab.dataset.mode;

      if (state.orderMode === "table") {
        if (elements.tableSelectorBar) elements.tableSelectorBar.style.display = "flex";
        if (elements.deliveryAddressGroup) elements.deliveryAddressGroup.style.display = "none";
        document.getElementById("cust-address").required = false;
        showToastNotification("Modo Consumo na Loja ativado! Selecione sua mesa.");
      } else {
        if (elements.tableSelectorBar) elements.tableSelectorBar.style.display = "none";
        if (state.orderType === "delivery" && elements.deliveryAddressGroup) {
          elements.deliveryAddressGroup.style.display = "block";
          document.getElementById("cust-address").required = true;
        }
        showToastNotification("Modo Delivery & Retirada ativado!");
      }
      updateCartUI();
    });
  });

  if (elements.tableNumberSelect) {
    elements.tableNumberSelect.addEventListener("change", (e) => {
      state.tableNumber = e.target.value;
      showToastNotification(`Mesa alterada para: Mesa ${state.tableNumber}`);
    });
  }

  elements.categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      elements.categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.dataset.category;

      const categoryNames = {
        todos: "Cardápio Completo",
        dindins: "Dindins Gourmet (Geladinhos Artesanais)",
        vitrine: "Vitrine Pronta Entrega",
        bolos: "Bolos Fatiados & Festas",
        tacas: "Taças & Sobremesas",
        salgados: "Salgados & Empadas Gourmet",
        bebidas: "Bebidas & Cafés",
        doces: "Doces Gourmet & Brigadeiros",
        cestas: "Cestas & Presentes",
        presentes: "Embalagens para Presente"
      };
      elements.currentCategoryHeading.textContent = categoryNames[state.activeCategory] || "Cardápio";
      renderProducts();
    });
  });

  elements.filterTags.forEach(tag => {
    tag.addEventListener("click", () => {
      if (tag.classList.contains("active")) {
        tag.classList.remove("active");
        state.activeFilter = null;
      } else {
        elements.filterTags.forEach(t => t.classList.remove("active"));
        tag.classList.add("active");
        state.activeFilter = tag.dataset.filter;
      }
      renderProducts();
    });
  });

  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    elements.searchClearBtn.hidden = !state.searchQuery;
    renderProducts();
  });

  elements.searchClearBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.searchClearBtn.hidden = true;
    renderProducts();
  });

  elements.resetSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    state.activeCategory = "todos";
    state.activeFilter = null;
    elements.searchClearBtn.hidden = true;
    elements.categoryChips.forEach(c => c.classList.remove("active"));
    elements.categoryChips[0].classList.add("active");
    elements.filterTags.forEach(t => t.classList.remove("active"));
    renderProducts();
  });

  elements.photoManagerToggle.addEventListener("change", (e) => {
    state.photoManagerEnabled = e.target.checked;
    renderProducts();
  });

  elements.qtyMinusBtn.addEventListener("click", () => {
    if (state.modalQty > 1) {
      state.modalQty--;
      elements.qtyDisplay.textContent = state.modalQty;
      updateModalPriceCalculation();
    }
  });

  elements.qtyPlusBtn.addEventListener("click", () => {
    state.modalQty++;
    elements.qtyDisplay.textContent = state.modalQty;
    updateModalPriceCalculation();
  });

  elements.modalCloseBtn.addEventListener("click", closeProductModal);
  elements.productModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.productModalBackdrop) closeProductModal();
  });

  elements.modalCustomForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.selectedProductForModal) return;

    let selectedOption = null;
    const selectedRadio = elements.modalOptionsList.querySelector("input[name='product-option']:checked");
    if (selectedRadio) {
      selectedOption = selectedRadio.value;
    }

    const note = elements.modalNoteInput.value.trim();

    addToCart(state.selectedProductForModal, state.modalQty, selectedOption, note);
    closeProductModal();
  });

  const openCart = () => elements.cartDrawerBackdrop.classList.add("open");
  const closeCart = () => elements.cartDrawerBackdrop.classList.remove("open");

  elements.btnOpenCart.addEventListener("click", openCart);
  elements.btnFloatOpen.addEventListener("click", openCart);
  elements.cartCloseBtn.addEventListener("click", closeCart);
  elements.cartDrawerBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.cartDrawerBackdrop) closeCart();
  });

  elements.orderTypeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.orderTypeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.orderType = btn.dataset.type;

      if (state.orderType === "delivery") {
        elements.deliveryAddressGroup.style.display = "block";
        document.getElementById("cust-address").required = true;
      } else {
        elements.deliveryAddressGroup.style.display = "none";
        document.getElementById("cust-address").required = false;
      }
      updateCartUI();
    });
  });

  elements.checkoutForm.addEventListener("submit", handleWhatsAppCheckout);

  elements.btnInfoModal.addEventListener("click", () => {
    elements.infoModalBackdrop.classList.add("open");
  });
  elements.infoModalClose.addEventListener("click", () => {
    elements.infoModalBackdrop.classList.remove("open");
  });
  elements.infoModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.infoModalBackdrop) elements.infoModalBackdrop.classList.remove("open");
  });
}

document.addEventListener("DOMContentLoaded", init);
