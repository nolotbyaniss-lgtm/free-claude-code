'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const fieldClasses =
  'w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-ink-50 outline-none transition-colors placeholder:text-ink-400 focus:border-forest-500 focus:ring-2 focus:ring-forest-700/50'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Démo : aucune requête réseau. Brancher ici votre service d'envoi.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-forest-800 bg-forest-900/30 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-600 text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink-50">
          Message envoyé
        </h3>
        <p className="mt-2 text-sm text-ink-300">
          Merci ! Sabrina &amp; Benoît vous répondront très vite.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-ink-700 bg-ink-900/50 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nom"
            className="mb-1.5 block text-sm font-medium text-ink-200"
          >
            Nom
          </label>
          <input id="nom" name="nom" required className={fieldClasses} />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dates"
            className="mb-1.5 block text-sm font-medium text-ink-200"
          >
            Dates souhaitées
          </label>
          <input
            id="dates"
            name="dates"
            placeholder="ex. 12 – 19 juillet"
            className={fieldClasses}
          />
        </div>
        <div>
          <label
            htmlFor="gite"
            className="mb-1.5 block text-sm font-medium text-ink-200"
          >
            Gîte
          </label>
          <select id="gite" name="gite" className={fieldClasses}>
            <option>Le Couvent</option>
            <option>Le Presbytère</option>
            <option>Indifférent</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={cn(fieldClasses, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full')}
      >
        <Send className="h-4 w-4" />
        Envoyer ma demande
      </button>
    </form>
  )
}
