<?php
// Chaves do funil. Preencha aqui (substitui as variáveis de ambiente da Vercel).
// Este arquivo é bloqueado pra acesso direto pelo .htaccess da pasta api/.
return [
  'FLEVOPAY_SECRET_KEY' => 'flevopay_sk_1592cb48f0bee842b1c92d937b4d906a7671f487e3ea2433e248172f00296db2',

  // Conversão no TikTok pelo backend (Events API). Deixe vazio pra desativar.
  'TIKTOK_PIXEL_ID' => 'DAIARBRC77U3EU7G889G',
  'TIKTOK_ACCESS_TOKEN' => '45d8fc23bf221990e63596c8c4bfd434bdcaad1b',

  // Opcionais
  'TIKTOK_EVENT_NAME' => 'CompletePayment',
  'TIKTOK_TEST_EVENT_CODE' => '',
];
