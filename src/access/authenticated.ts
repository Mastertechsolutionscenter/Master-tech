import type { PayloadRequest } from 'payload'

export const authenticated = async ({
  req,
}: {
  req: PayloadRequest
}): Promise<boolean> => {
  return Boolean(req?.user)
}