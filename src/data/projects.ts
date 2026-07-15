import elevador from '@/assets/elevado-interativo.png'
import conversor from '@/assets/conversor-dinheiro.png'
import cifra from '@/assets/cifra-cesa.png'
import jokenpo from '@/assets/jokepo.png'
import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Elevador Interativo',
    description: 'Simulação interativa de um elevador com interface objetiva, estados visuais e animações suaves.',
    image: elevador,
    github: 'https://github.com/Anderson-reis7/projet-elevador',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Conversor de Moedas',
    description: 'Aplicação para conversão de moedas com foco em usabilidade, leitura rápida e integração com API.',
    image: conversor,
    github: 'https://github.com/Anderson-reis7/conversor-de-dinheiro',
    technologies: ['JavaScript', 'API', 'CSS'],
  },
  {
    id: 3,
    title: 'Cifra de César',
    description: 'Ferramenta de criptografia baseada na técnica clássica da Cifra de César.',
    image: cifra,
    github: 'https://github.com/Anderson-reis7/cifra-de-cesar',
    technologies: ['JavaScript', 'Criptografia', 'HTML'],
  },
  {
    id: 4,
    title: 'Jokenpô',
    description: 'Jogo de pedra, papel e tesoura com regras simples, feedback visual e interação direta.',
    image: jokenpo,
    github: 'https://github.com/Anderson-reis7/jokenpo',
    technologies: ['JavaScript', 'Game Logic', 'CSS'],
  },
]
