import Head from 'next/head'
import Header from './Header'
import Search from './Search'

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}
Layout.defaultProps = {
    title:'Welcome to DevSpace'
}