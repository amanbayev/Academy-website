import {events, learningAreas, metrics, news, partners, programs, team, trainers} from './data';

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getRelatedPrograms(ids: string[]) {
  return programs.filter((program) => ids.includes(program.id));
}

export function getTrainerById(id: string) {
  return trainers.find((trainer) => trainer.id === id);
}

export function getFeaturedPrograms() {
  return programs.slice(0, 4);
}

export function getFeaturedEvent() {
  return events.find((event) => event.featured) ?? events[0];
}

export {events, learningAreas, metrics, news, partners, programs, team, trainers};
