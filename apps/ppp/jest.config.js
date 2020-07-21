module.exports = {
  name: 'ppp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ppp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
