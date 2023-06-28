module.exports = {
    '*.{ts,tsx}': [
      'next lint',
      "bash -c 'next types:check'",
      'next format:check',
    ],
}