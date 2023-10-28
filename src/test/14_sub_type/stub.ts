import { getFirstName } from './stub.data'

export function getName(lastName: string) {
  return `${getFirstName()} ${lastName}`
}
