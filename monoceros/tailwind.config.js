module.exports = {
  content: ["./src/**/*.{html,js}",
  "./dist/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      metropolisRegular: ['Metropolis Regular'],
      metropolisSemBold: ['Metropolis Semi Bold'],
      metropolisBold: ['Metropolis Bold'],
      metropolisExBold: ['Metropolis Extra Bold'],
      Arvo: ['Arvo'],
    },
    colors: {
      lgreen: '#BCDCC4',
      dgreen: '#315C72',
      textGrey: '#8A8A8A',
      white500: 'rgba(255, 255, 255, 0.5)',
      card: 'rgba(241, 242, 243, 0.5)',
      border: 'rgba(21, 21, 21, 0.06)',
      footer: 'rgba(21, 21, 21, 0.5)',
      input: 'rgba(21, 21, 21, 0.12)',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}
