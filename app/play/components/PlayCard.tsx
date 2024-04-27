import Link from 'next/link'
import React from 'react'

export default function PlayCard({ items }: any) {
    return (
        <Link href={`play/${items}`}>
            <div className='shadow-sm border border-gray-200 rounded-xl p-12 hover:bg-gray-100 duration-150'>
                <div id="keyboard">
                    <div >অ</div>
                    <div >আ</div>
                    
                </div>
            </div>
        </Link>
    )
}
