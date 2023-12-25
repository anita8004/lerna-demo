import request from '@/utils/request'

export const getTestApi = () => request({
  url: '/api/get',
  method: 'get'
})