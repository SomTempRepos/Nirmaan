import type { CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;
export type IdeaEntry = CollectionEntry<'ideas'>;

export function publishedProjects(entries: ProjectEntry[]): ProjectEntry[] {
  return entries
    .filter((entry) => entry.data.status === 'published')
    .sort((left, right) => left.data.order - right.data.order);
}

export function publishedIdeas(entries: IdeaEntry[]): IdeaEntry[] {
  return entries
    .filter((entry) => entry.data.status === 'published')
    .sort(
      (left, right) => right.data.date.valueOf() - left.data.date.valueOf(),
    );
}
