/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  mount: {
    src: { url: '/dist' },
  },
  devOptions: {
    open: "none"
  }
}
