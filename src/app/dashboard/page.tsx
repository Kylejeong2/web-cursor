import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Link href="/">Go to project</Link>
    </div>
  )
}

export default page