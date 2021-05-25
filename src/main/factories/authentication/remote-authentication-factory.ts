import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'
import { Authentication } from '@/domain/usecases'

export const makeRemoteAuthentication = (url: string): Authentication => {
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
