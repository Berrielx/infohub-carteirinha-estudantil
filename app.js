/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Grupo 10 • Carteirinha Estudantil • ADS
 */

import { initModalController } from './modal-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Preserva os modais institucionais obrigatórios do template.
  initModalController();

  // Filtro simples de perguntas frequentes, sem bibliotecas externas.
  const search = document.querySelector('#faq-search');
  const faqItems = [...document.querySelectorAll('#faq-list .faq-item')];
  const emptyMessage = document.querySelector('#faq-empty');

  if (search && faqItems.length && emptyMessage) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('pt-BR');
      let visibleCount = 0;

      faqItems.forEach((item) => {
        const matches = item.textContent.toLocaleLowerCase('pt-BR').includes(query);
        item.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      emptyMessage.hidden = visibleCount !== 0;
    });
  }

  console.log('[InfoHub Grupo 10] Página de carteirinha inicializada.');
});
