// page.tsx
import Layout from '@/components/layout/Layout'
import IntroScreen from '@/components/screens/IntroScreen'

export default function Home() {
  return (
    <Layout>
      <main className='flex min-h-screen flex-col items-center justify-between pt-10'>
        <IntroScreen />
      </main>
    </Layout>
  );
}
