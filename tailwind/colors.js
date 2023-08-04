const pallet = {
  color1: '#215CCF', //main1
  color2: '#', //main2
  color3: '#020C20', //main3
  color4: "#FFF", //balance4
  color5: "#333", //balance5
  color6: "#", //balance6
  color7: "#", //variation7
  color8: "#", //variation8
  color9: "#", //variation9
  color10: "#FFBD59", //accent10
}

const light = {
  lightBg: pallet.color4,
  lightText: pallet.color5,
}

const dark = {
  darkBg: pallet.color3,
  darkText: pallet.color4,
}

const colors = {
  main: pallet.color1,
  ...light,
  ...dark,
  accent: pallet.color10,
}

module.exports = { colors }
