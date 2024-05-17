import React from 'react'
import Contributions from './Contributions'
import { GITHUB_ACCOUNTS } from '@/common/constant/github';


const index = () => {
  return (
    <div className='space-y-10 mt-4'>
      {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
        (account, index) => (
          <Contributions
            key={index}
            username={account?.username}
            type={account?.type}
            endpoint={account?.endpoint}
          />
        ),
      )}
    </div>
  )
}
export default index