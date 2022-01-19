import { fetchAPI } from '@/plugins/api'

export function getMapData(params) {
  console.log('params', params)
  return fetchAPI({
    url: 'https://cors-anywhere.herokuapp.com/https://asia-east2-botfat.cloudfunctions.net/project_controller',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: {
      'lat': '23.697809',
      'lng': '120.960518'
    }
  })
}