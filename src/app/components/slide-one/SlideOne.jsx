"use client"
import React, { useState, useEffect } from 'react'
import { Stickyroll } from '@stickyroll/react'

//data
import { DATA_ONE } from './slideOneData'



export default function SlideOne() {

    const [pProg1, setPProg1] = useState({
        progress: "",
        page: ""
    })

    const [imgId, setImgId] = useState(0)

    const handleClick = (id) => {
        setImgId(id)
    }

    useEffect(() => {
        const p = pProg1.progress

        if (p > 0.1 && p < 0.2) {
            setImgId(0)
        }
        if (p > 0.2 && p < 0.4) {
            setImgId(1)
        }
        if (p > 0.4 && p < 0.6) {
            setImgId(2)
        }
        if (p > 0.6 && p < 0.8) {
            setImgId(3)
        }
        if (p > 0.8) {
            setImgId(4)
        }

    }, [pProg1])
    return (
        <div
            className='w-full bg-[#615757ff]'
        >
            <Stickyroll
                pages={1}
                factor={5}
                onProgress={(progress, page) => {
                    setPProg1({
                        progress: progress,
                        page: page
                    })
                }}
            >
                <div className='flex justify-center items-center relative overflow-hidden'>

                    <section className='w-[50%] h-[100vh] flex justify-center items-center overflow-hidden'>

                        {
                            DATA_ONE.map((item, i) => {
                                return (
                                    <div key={i} className=' h-[100%] bg-[#999] absolute top-0 left-0 overflow-hidden'
                                        style={{
                                            opacity: i !== imgId ? "0" : "1",
                                            transition: "0.3s ease-in-out"

                                        }}
                                    >
                                        <img key={i} src={item.imgURl.src} alt=""
                                            style={{
                                                width: "100%",
                                                height: '100%',
                                                objectFit: "cover",
                                            }}
                                        />
                                        {i}
                                    </div>
                                )

                            })
                        }


                    </section>
                    <section
                        className='w-[60%] h-[100vh] flex flex-col justify-start bg-[#A5E003] relative overflow-hidden'

                    >
                        <div
                            className='w-[100%] h-[100%] flex flex-col justify-start items-center gap-4 relative'
                            style={{
                                transition: "0.1s ease-in-out",
                                transform: `translateY(-${imgId * 10}%)`
                            }}
                        >


                            <div
                                className='w-[80%] h-[20%] flex flex-col justify-center items-left gap-4 bg-[#A5E003] relative overflow-hidden text-[#1A2B6D]'
                            >
                                <h1 className='font-bold text-[3rem] leading-none'>Why BPMP</h1>
                                <p>Custom Solutions for Your Capital Projects</p>
                            </div>
                            <div
                                className='w-[100%] h-[80%] flex flex-col justify-start items-center gap-4 bg-[#A5E003] relative'
                            >

                                {
                                    DATA_ONE.map((item, i) => {
                                        return <div key={i} className='w-[80%] h-auto py-[2rem] bg-white text-[#1A2B6D] text-[1rem] px-[1em] flex gap-4 rounded-md cursor-pointer'
                                            onClick={() => handleClick(i)}
                                            style={{
                                                transition: "0.2s ease-in-out",
                                                opacity: i === imgId ? "1" : "0.5"

                                            }}
                                        >

                                            <div className='text-[1.4rem] font-bold'>{String(i + 1).padStart(2, "0")}</div>
                                            <div className='flex flex-col gap-4'>
                                                {item.details.map((item, i) => {
                                                    return <p key={i}>{item}</p>
                                                })}
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </section>
                </div>
            </Stickyroll >

        </div >
    )
}
