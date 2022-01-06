import { fetchAPI } from '@/plugins/api'

export function getMapData(params) {
  console.log('params', params)
  return fetchAPI({
    url: 'https://cors-anywhere.herokuapp.com/https://asia-east2-botfat.cloudfunctions.net/project_controller',
    method: 'POST',
    data: {
      'lat': '12.89',
      'lng': '89.11'
    }
  })
}