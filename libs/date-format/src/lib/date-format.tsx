export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
