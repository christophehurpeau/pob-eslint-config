'use strict';

const fs = require('fs');
const path = require('path');
const semver = require('semver');

try {
  const readPackage = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

  const configDependencies = [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb',
  ];

  const rootPkg = readPackage('package.json');

  const devDependencies = Object.keys(rootPkg.devDependencies);

  configDependencies.forEach((configDependency) => {
    if (!devDependencies.includes(configDependency)) {
      throw new Error(`missing dependency ${configDependency}`);
    }
  });

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
              `Invalid ${peerDep} version in ${packageName}: should be ${expectedVersion}`,
            );
          }
        }
      });
    }

    if (pkg.dependencies) {
      configDependencies.forEach((configDep) => {
        if (pkg.dependencies[configDep]) {
          const expectedVersion = rootPkg.devDependencies[configDep];
          if (pkg.dependencies[configDep].slice(1) !== expectedVersion) {
            throw new Error(
              `Invalid ${configDep} version in ${packageName}: should be ${expectedVersion}`,
            );
          }
        }
      });

      Object.keys(pkg.dependencies).forEach((configDep) => {
        if (
          configDep.startsWith('@pob') ||
          configDependencies.includes(configDep)
        ) {
          const configDepPkg = readPackage(
            require.resolve(
              `${
                configDep.startsWith('@pob') ? `../${configDep}` : configDep
              }/package.json`,
            ),
          );

          if (!configDepPkg.peerDependencies) return;

          Object.keys(configDepPkg.peerDependencies).forEach((peerDep) => {
            if (
              !pkg.peerDependencies[peerDep] &&
              configDepPkg.peerDependenciesMeta &&
              configDepPkg.peerDependenciesMeta[peerDep] &&
              configDepPkg.peerDependenciesMeta[peerDep].optional
            ) {
              return;
            }

            const expectedVersion = configDepPkg.peerDependencies[peerDep];
            const actualVersion = pkg.peerDependencies[peerDep];

            if (!actualVersion) {
              throw new Error(
                `${pkg.name}: Missing peerDependency ${peerDep} ${expectedVersion} (${configDep})`,
              );
            }

            if (
              !semver.satisfies(
                semver.minVersion(actualVersion),
                expectedVersion,
              )
            ) {
              const message = `${pkg.name}: Invalid ${peerDep} version: ${actualVersion} doesn't satisfies ${expectedVersion} (${configDep})`;

              if (
                semver.gt(
                  semver.minVersion(actualVersion),
                  semver.minVersion(expectedVersion),
                )
              ) {
                console.warn(`Warning: ${message}`);
              } else {
                throw new Error(message);
              }
            }
          });
        }
      });
    }
  });
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
