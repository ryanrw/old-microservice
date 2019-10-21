import { StatusType, ReturnStatus } from '../interfaces/auth'

function message(type: StatusType, message?: string): ReturnStatus {
  if (type === 'error') {
    return {
      isSuccess: false,
      description: message,
    }
  }

  return {
    isSuccess: true,
    jwt: message,
  }
}

export default message
