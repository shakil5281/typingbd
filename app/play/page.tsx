import React from 'react'
import PlayCard from './components/PlayCard'

export default function play() {
    return (
        <div className='max-w-7xl m-auto mt-4'>
            <div>
                <div>
                    <h1 className='text-3xl font-semibold'>Home Row</h1>
                </div>
                <div className='mt-8 flex justify-center flex-row flex-wrap'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((row, index) => (
                            <div className='inline-flex m-2' key={index}>
                                <PlayCard items={row} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
