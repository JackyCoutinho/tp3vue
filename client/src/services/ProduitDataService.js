import http from '../http-common'
class ProduitDataService {
  getAll () {
    return http.get('/produit')
  }

  create (data) {
    return http.post('/produit', data)
  }

  get (id) {
    return http.get(`/produit/${id}`)
  }

  delete (id) {
    return http.delete(`/produit/${id}`)
  }

  update (id, data) {
    return http.put(`/produit/${id}`, data)
  }
}

export default new ProduitDataService()
