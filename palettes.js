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
  },
  {
    name: 'frozen-rose',
    colors: ['#29368f', '#e9697b', '#1b164d', '#f7d996'],
    background: '#f2e8e4'
  },
  {
    name: 'winter-night',
    colors: ['#122438', '#dd672e', '#87c7ca', '#ebebeb'],
    background: '#ebebeb'
  },
  {
    name: 'saami',
    colors: ['#eab700', '#e64818', '#2c6393', '#eecfca'],
    background: '#e7e6e4'
  },
  {
    name: 'knotberry1',
    colors: ['#20342a', '#f74713', '#686d2c', '#e9b4a6'],
    background: '#e5ded8'
  },
  {
    name: 'knotberry2',
    colors: ['#1d3b1a', '#eb4b11', '#e5bc00', '#f29881'],
    background: '#eae2d0'
  },
  {
    name: 'tricolor',
    colors: ['#ec643b', '#56b7ab', '#f8cb57', '#1f1e43'],
    background: '#f7f2df'
  },
  {
    name: 'rag-mysore',
    colors: ['#ec6c26', '#613a53', '#e8ac52', '#639aa0'],
    background: '#d5cda1'
  },
  {
    name: 'rag-gol',
    colors: ['#d3693e', '#803528', '#f1b156', '#90a798'],
    background: '#f0e0a4'
  },
  {
    name: 'rag-belur',
    colors: ['#f46e26', '#68485f', '#3d273a', '#535d55'],
    background: '#dcd4a6'
  },
  {
    name: 'rag-bangalore',
    colors: ['#ea720e', '#ca5130', '#e9c25a', '#52534f'],
    background: '#f9ecd3'
  },
  {
    name: 'rag-taj',
    colors: ['#ce565e', '#8e1752', '#f8a100', '#3ac1a6'],
    background: '#efdea2'
  },
  {
    name: 'rag-virupaksha',
    colors: ['#f5736a', '#925951', '#feba4c', '#9d9b9d'],
    background: '#eedfa2'
  },
  {
    name: 'foxshelter',
    colors: ['#ff3931', '#007861', '#311f27', '#bab9a4'],
    background: '#dddddd'
  },
  {
    name: 'hermes',
    colors: ['#253852', '#51222f', '#b53435', '#ecbb51'],
    background: '#eeccc2'
  }
];

export default palettes.map(p => {
  p.size = p.colors.length;
  return p;
});
