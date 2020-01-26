/* eslint-disable global-require, import/no-dynamic-require */

'use strict';

const usePlugin = (pluginDependencyPackage) => {
  let pluginRootPackage;
  try {
    pluginRootPackage = require(require.resolve(
      `${pluginDependencyPackage.name}/package.json`,
      {
        paths: [process.cwd()],
      }
    ));
  } catch (err) {
    console.error(
      `It seems the package ${pluginDependencyPackage.name} is not in your devDependencies`
    );
    throw err;
  }

  if (pluginDependencyPackage.version !== pluginRootPackage.version) {
    throw new Error(
      `Invalid version ${pluginRootPackage.version} of ${pluginDependencyPackage.name}, expected ${pluginDependencyPackage.version}`
    );
  }
};

module.exports = usePlugin;
