import Image from 'next/image';
import React, { FC } from 'react';

interface ClientsProps {
}

const client = [
    '/images/jobox.png',
    '/images/dsign.png',
    '/images/wave.png',
    '/images/twins.png',
    '/images/bubles.png'
]

const Clients: FC<ClientsProps> = () => {
  return (
    <div className='relative z-10'>
        <div className='text-lg text-muted-foreground'>
            Companies we helped grow
        </div>
        <div className='mt-8 flex flex-row justify-between'>
            {
                client.map((item: string, index: number) => {
                    return (
                        <Image key={index} src={item} alt={item} width={139} height={35}/>
                    )
                })
            }
        </div>
    </div>
  );
}

export default Clients;