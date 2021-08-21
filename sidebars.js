/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  introSidebar: [{type: 'autogenerated', dirName: './docs/'}],
  automationSidebar: [{type: 'autogenerated', dirName: './docs/automation'}],
  codeSidebar: [{type: 'autogenerated', dirName: './docs/code-best-practices'}],
  containerSidebar: [{type: 'autogenerated', dirName: './docs/containerization'}],
  deploymentSidebar: [{type: 'autogenerated', dirName: './docs/deployments'}],
  docsSidebar: [{type: 'autogenerated', dirName: './docs/documentation'}],
  monitoringSidebar: [{type: 'autogenerated', dirName: './docs/monitoring'}],
  resourcesSidebar: [{type: 'autogenerated', dirName: './docs/resources'}],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
