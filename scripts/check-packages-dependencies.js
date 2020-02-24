'use strict';

const fs = require('fs');
const path = require('path');

const readPackage = (path) => {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
};

// const rootPkg = readPackage('package.json');
const packages = fs.readdirSync('@pob');

packages.forEach((packageName) => {
  const pkgPath = path.resolve('@pob', packageName, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return;
  }

  const pkg = readPackage(pkgPath);

  if (pkg.peerDependencies) {
    Object.keys(pkg.peerDependencies).forEach((peerDep) => {
      if (pkg.dependencies && pkg.dependencies[peerDep]) {
        const expectedVersion = pkg.dependencies[peerDep];
        if (pkg.peerDependencies[peerDep] !== expectedVersion) {
          throw new Error(
            `Invalid ${peerDep} version in ${packageName}: should be ${expectedVersion}`
          );
        }
      }
    });
  }
});
