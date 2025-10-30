/** @type {import('semantic-release').Options} */
export default {
  tagFormat: '${version}',
  branches: ['x'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG_X.md',
        changelogTitle: '# Changelog X',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG_X.md'],
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd:
          'echo "release_version=${nextRelease.version}" >> $GITHUB_OUTPUT',
      },
    ],
  ],
};
