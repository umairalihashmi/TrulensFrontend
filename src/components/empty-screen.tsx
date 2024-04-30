import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Deploy with Ease: Your Cloud Assistant</h1>
        <p className="leading-normal text-muted-foreground">
          Welcome! I'm an AI-powered assistant that helps you deploy your applications to the cloud.
        </p>
        <p className="leading-normal text-muted-foreground">
          Simply tell me what you want to deploy, and I'll handle the technical details behind the scenes.
          I can help you deploy web applications, virtual machines, and more to popular platforms like AWS, Azure, and GCP.
        </p>
      </div>
    </div>
  )
}
