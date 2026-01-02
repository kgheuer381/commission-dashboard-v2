import CommissionDashboard from '../components/CommissionDashboard'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Commission Central - Revenue Tracking Dashboard</title>
        <meta name="description" content="Multi-source commission tracking and team performance analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommissionDashboard />
    </>
  )
}
