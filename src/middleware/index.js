const faviconError = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
      return res.status(204).end() // Responder sin contenido
  }
  next()
}

module.exports = faviconError