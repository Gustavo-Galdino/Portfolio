'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface LinksProps {
  children: ReactNode
  text: string
}

export function Links({ children, text }: LinksProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className="px-2 font-semibold text-violet-600"
          >
            {text}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
