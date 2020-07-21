module.exports = {
  name: 'botw-material-form-io',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/botw-material-form-io',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
