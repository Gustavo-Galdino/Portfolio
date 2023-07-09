'use client'

import { Mail, MailCheck } from 'lucide-react'
import { useState } from 'react'

export function Email() {
  const [isCopied, setIsCopied] = useState(false)

  const email = 'gustavogaldinomartins@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <div className="relative flex flex-col items-center">
      <div
        onClick={() => handleCopyEmail()}
        className={`flex cursor-pointer items-center gap-1.5 overflow-hidden rounded-md pl-1.5 transition-colors duration-200 ${
          isCopied ? 'bg-green-500 text-zinc-100' : 'bg-red-400'
        }`}
      >
        {isCopied ? <MailCheck /> : <Mail />}
        <span className="bg-red-300 px-1.5 py-1 transition-colors duration-200">
          gustavogaldinomartins@gmail.com
        </span>
      </div>
      {isCopied && (
        <p className="absolute -bottom-6 transition-opacity duration-200">
          email copiado!
        </p>
      )}
    </div>
  )
}
