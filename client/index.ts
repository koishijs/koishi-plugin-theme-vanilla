import { Context } from '@koishijs/client'

import './index.scss'

export default function (ctx: Context) {
  ctx.theme({
    id: 'coffee-dark',
    name: 'Coffee Dark',
  })

  ctx.theme({
    id: 'coffee-light',
    name: 'Coffee Light',
  })

  ctx.theme({
    id: 'pale-night-dark',
    name: 'Pale Night',
  })

  ctx.theme({
    id: 'ocean-dark',
    name: 'Ocean Dark',
  })

  ctx.theme({
    id: 'ocean-light',
    name: 'Ocean Light',
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
