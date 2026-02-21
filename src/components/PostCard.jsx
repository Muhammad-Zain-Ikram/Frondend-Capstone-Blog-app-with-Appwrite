import React from 'react'
import Container from './container/container'
import PrimaryBtn from './buttons/PrimaryBtn'

const PostCard = (post) => {

    const image = "https://images.pexels.com/photos/34071010/pexels-photo-34071010.jpeg?_gl=1*1cp3s6j*_ga*MTIzOTk1MzQ0MS4xNzcxNjgzOTE1*_ga_8JE65Q40S6*czE3NzE2ODM5MTQkbzEkZzEkdDE3NzE2ODQwMjckajYwJGwwJGgw"
  return (
    <Container>
    <div className='w-full  p-4 my-4 rounded-lg border-2 border-black-950'>
        <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="my-2 w-full lg:w-1/3"><img src={image} alt="" width={500}/></div>
        <div className="mx-4 w-full lg:w-1/2">
            <h2 className=' text-2xl text-[#1f1e1e] font-bold font-mono text-justify'>Classic Mercedes 2.3-16 Car Tail Light in Ankarn Today</h2>
            <p className='text-base my-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium unde voluptas itaque porro sunt, repudiandae, officiis a atque iure excepturi! Quas consequatur aliquid quos delectus temporibus aut reprehenderit voluptas, exercitationem quis, dolores optio perferendis doloremque minus quo blanditiis veniam.</p>
            <PrimaryBtn
            size='md'
            className='my-3 mx-1'
            >Read More</PrimaryBtn>
        </div>
        </div>
    </div>
    </Container>
  )
}

export default PostCard