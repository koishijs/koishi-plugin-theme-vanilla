import { Context } from '@koishijs/client'

import './index.scss'

export default function (ctx: Context) {
  ctx.theme({
    id: 'coffee-dark',
    name: 'Coffee Dark',
  })

  ctx.theme({
    id: 'dream-dark',
    name: 'Dream Dark',
  })

  ctx.theme({
    id: 'solarized-dark',
    name: 'Solarized Dark',
  })

  ctx.theme({
    id: 'solarized-light',
    name: 'Solarized Light',
  })

  ctx.theme({
    id: 'winter-dark',
    name: 'Winter Dark',
  })
}
