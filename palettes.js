const palettes = [
  {
    name: 'tundra1',
    colors: ['#40708c', '#8e998c', '#5d3f37', '#ed6954', '#f2e9e2']
  },
  {
    name: 'tundra2',
    colors: ['#5f9e93', '#3d3638', '#733632', '#b66239', '#b0a1a4', '#e3dad2']
  },
  {
    name: 'tundra3',
    colors: [
      '#87c3ca',
      '#7b7377',
      '#b2475d',
      '#7d3e3e',
      '#eb7f64',
      '#d9c67a',
      '#f3f2f2'
    ]
  },
  {
    name: 'tundra4',
    colors: [
      '#d53939',
      '#b6754d',
      '#a88d5f',
      '#524643',
      '#3c5a53',
      '#7d8c7c',
      '#dad6cd'
    ]
  },
  {
    name: 'retro',
    colors: [
      '#69766f',
      '#9ed6cb',
      '#f7e5cc',
      '#9d8f7f',
      '#936454',
      '#bf5c32',
      '#efad57'
    ]
  },
  {
    name: 'retro-washedout',
    colors: [
      '#878a87',
      '#cbdbc8',
      '#e8e0d4',
      '#b29e91',
      '#9f736c',
      '#b76254',
      '#dfa372'
    ]
  },
  {
    name: 'roygbiv-warm',
    colors: [
      '#705f84',
      '#687d99',
      '#6c843e',
      '#fc9a1a',
      '#dc383a',
      '#aa3a33',
      '#9c4257'
    ]
  },
  {
    name: 'roygbiv-toned',
    colors: [
      '#817c77',
      '#396c68',
      '#89e3b7',
      '#f59647',
      '#d63644',
      '#893f49',
      '#4d3240'
    ]
  },
  {
    name: 'present-correct',
    colors: [
      '#fd3741',
      '#fe4f11',
      '#ff6800',
      '#ffa61a',
      '#ffc219',
      '#ffd114',
      '#fcd82e',
      '#f4d730',
      '#ced562',
      '#8ac38f',
      '#79b7a0',
      '#72b5b1',
      '#5b9bae',
      '#6ba1b7',
      '#49619d',
      '#604791',
      '#721e7f',
      '#9b2b77',
      '#ab2562',
      '#ca2847'
    ]
  }
];

export default palettes.map(p => {
  p.size = p.colors.length;
  return p;
});
