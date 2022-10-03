import { $host } from './index'

export const fetchDevice = async () => {
  const { data } = await $host.get('api/device')
  return data
}
