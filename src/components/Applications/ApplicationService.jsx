
const url = 'http://localhost:3001/api/applications'

export const getApplications = (pageNumber, limitNumber) =>{
  return fetch(`${url}?_page=${pageNumber}&_limit=${limitNumber}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => response.json())
    .catch(err => err);
}