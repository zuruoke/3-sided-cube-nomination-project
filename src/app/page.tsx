// page.tsx
import Layout from '@/components/layout/Layout'
import EnterNomineeScreen from '@/components/screens/EnterNomineeScreen'
import IntroScreen from '@/components/screens/IntroScreen'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <EnterNomineeScreen />
      </main>
    </Layout>
  )
}
