
const url = 'http://localhost:3001/api/applications'

export const getModalData = (id) =>{
  return fetch(`${url}/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => response.json())
    .catch(err => err);
}