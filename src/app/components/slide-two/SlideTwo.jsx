"use client"
import React, { useState, useEffect } from 'react'
import { Stickyroll } from '@stickyroll/react'

import { DATA_TWO } from './slideTwoData';

export default function SlideTwo() {

  const [pProg1, setPProg1] = useState({ progress: 0, page: 0 });
  const [cardId, setCardId] = useState(0)

  useEffect(() => {
    setCardId(Math.floor(pProg1.page));
  }, [pProg1]);

  // Compute dynamic clip values based on index
  const sValues = DATA_TWO.map((_, index) => (pProg1.progress + pProg1.page) - (index + 1));

  return (
    <div className='w-full h-100vh'>
      <Stickyroll
        pages={4}
        factor={2}
        onProgress={(progress, page) => setPProg1({ progress, page })}
      >
        <div className='w-[100%] h-[750px] overflow-hidden relative flex flex-row justify-center items-center'>

          <div className='w-[100%] h-[100%] overflow-hidden relative'>
            {DATA_TWO.map((frame, index) => (
              <img
                key={index}
                src={frame.imgURl.src}
                alt=""
                className='absolute'
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  clipPath: `inset(0% 0% ${sValues[index] * 100}% 0%)`,
                  zIndex: DATA_TWO.length - index,
                }}
              />
            ))}
          </div>


          <div className='w-[100%] h-[100%] overflow-hidden absolute z-10 flex flex-row justify-center items-center'

          >
            <div className='w-[25%] h-[100%] bg-[#fff] text-[#000] flex flex-col justify-center items-center gap-5'
              style={{
                boxShadow: "0px 4px 4px #00000050"

              }}
            >

              <div
                className='w-[100%] h-[25%] flex justify-center items-center'
              >
                <div className='w-[100%] h-[50%] flex flex-col gap-5 relative justify-center items-center overflow-hidden'>
                  {
                    DATA_TWO.map((item, i) => {
                      return <p key={i}
                        className='w-[60%] h-[100%] text-[1.4rem]  font-bold flex text-center justify-center items-center
                      absolute'

                        style={{
                          transition: "0.5s ease-in-out",
                          transform: i === cardId ? "translateY(0%)" :
                            i === cardId - 1 ? "translateY(-100%)" :
                              i === cardId + 1 ? "translateY(100%)" : "translateY(200%)",

                          opacity: i === cardId ? "1" : "0",
                          lineHeight: "1.5"
                        }}
                      >{item.heading}</p>
                    })
                  }
                </div>
              </div>

              <div
                className='w-[100%] h-[40%] relative overfloe-hidden'
              >
                {DATA_TWO.map((frame, index) => (
                  <img
                    key={index}
                    src={frame.imgURl.src}
                    alt=""
                    className='absolute'
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      clipPath: `inset(0% 0% ${sValues[index] * 100}% 0%)`,
                      zIndex: DATA_TWO.length - index,
                    }}
                  />
                ))}

              </div>
              <div
                className='w-[100%] h-[35%]'
              >

                <div className='w-[100%] h-[80%] flex flex-col gap-5 relative justify-center items-center overflow-hidden'>
                  {
                    DATA_TWO.map((item, i) => {
                      return <p key={i}
                        className='w-[70%] h-[80%] text-[0.8rem] flex text-center justify-center items-center
                      absolute'

                        style={{
                          transition: "0.5s ease-in-out",
                          opacity: i === cardId ? "0.8" : "0",
                        }}
                      >{item.details[0]}</p>
                    })
                  }
                </div>
              </div>


            </div>


          </div>
        </div>

      </Stickyroll>
    </div>
  )
}
