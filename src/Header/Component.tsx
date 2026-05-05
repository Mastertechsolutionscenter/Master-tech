import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { getServicesAction } from '@/services/business/actions'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const services = await getServicesAction()

  return <HeaderClient data={headerData} services={services} />
}
