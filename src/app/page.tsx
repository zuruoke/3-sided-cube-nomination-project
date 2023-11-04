// page.tsx
import Layout from '@/components/layout/Layout'
import EnterNomineeScreen from '@/components/screens/EnterNomineeScreen'
import IntroScreen from '@/components/screens/IntroScreen'
import NominationOverviewScreen from '@/components/screens/NominationOverviewScreen'
import NominationSubmittedScreen from '@/components/screens/NominationSubmittedScreen'
import NominationsScreen from '@/components/screens/NominationsScreen'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <NominationsScreen />
      </main>
    </Layout>
  )
}
