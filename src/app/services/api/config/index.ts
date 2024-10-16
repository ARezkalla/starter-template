const getHTTPType = () => {
  window.location.href.includes("unsafe") ? "http" : "https"
}

export default class Config {
  static baseURL = `https://teplate/api/`
}
