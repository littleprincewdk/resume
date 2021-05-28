module.exports = {
  '*.js': ['eslint --fix --report-unused-disable-directives', 'git add'],
  '*.less': ['stylelint --fix --report-needless-disables', 'git add'],
  '*.html': ['prettier --write', 'git add'],
};
