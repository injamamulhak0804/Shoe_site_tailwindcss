import React from 'react'

const sample = () => {
    return (
        <>
            <div className="App text-center">
                <a href="#" className='underline decoration-sky-800 hover:text-red-800'>Link</a>
                <p className='underline decoration-sky-600'>Normal</p>
            </div>

            <div className="text">
                <p className='text-center m-10 font-serif'>Normal tag</p>
                <p className='text-center text-sm'>Normal tag</p>
                <p className='text-center text-base'>Normal tag</p>
                <p className='text-center text-lg'>Normal tag</p>
                <p className='text-center text-xl'>Normal tag</p>
                <p className='text-center text-2xl'>Normal tag</p>
                <p className='text-center text-3xl'>Normal tag</p>
                <p className='text-center text-4xl'>Normal tag</p>
                <p className='text-center text-5xl'>Normal tag</p>
                <p className='text-center text-6xl'>Normal tag</p>
                <p className='text-center text-7xl'>Normal tag</p>
                <p className='text-center text-8xl'>Normal tag</p>
                <p className='text-center text-9xl'>Normal tag</p>
                {/* <p className='text-center text-10xl'>Normal tag</p> */}
            </div>
            <div className="line-height">
                <h1 className='text-center m-10'>Line Height</h1>
                <p className='text-base/7 mb-10 subpixel-antialiased m-5'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>


                <p className='text-base/7 mb-10 antialiased'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>


                <p className='text-base/8 mb-10'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>


                <p className='text-base/loose mb-10'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>

            <div className="focus">
                <h1 className='text-center m-10 font-mono'>Focus</h1>
                <p className='text-2xl hover:text-base '>Just Focus</p>
                <p>Customize the Apperance <span className='text-[30px]'>Hello World!! by using: text-[14px]</span></p>
            </div>

            <div className="text-center m-10">
                <h1>Smoothing</h1>
                <p className="subpixel-antialiased">
                    The quick brown fox
                </p>
                <p className="antialiased">
                    The quick brown fox
                </p>
                <div className="antialiased hover:subpixel-antialiased">
                    Hover  the text
                </div>
            </div>

            <div className="font-weight">
                <h1 className="text-center font-bold">FONT WEIGHT</h1>
                <div className="text bg-lime-200 m-10 rounded">
                    <p className='text-center font-thin m-5'>Text</p>
                    <p className='text-center font-extralight m-5'>Text</p>
                    <p className='text-center font-light m-5'>Text</p>
                    <p className='text-center font-medium m-5'>Text</p>
                    <p className='text-center font-semibold m-5'>Text</p>
                    <p className='text-center font-bold m-5'>Text</p>
                    <p className='text-center font-extrabold m-5'>Text</p>
                    <p className='text-center font-black m-5'>Text</p>
                    <p className='text-center font-[3400] m-5'>Text</p>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-center mb-5">TEST</h1>
                <p className="font-serif">Hello World</p>
                <p className="font-mono">Hello World</p>
                <p className='font-base'>Fuck u ulgy Bitch</p>
                <p className='font-sm'>Fuck u ulgy Bitch</p>
                <p className='font-2xl'>Fuck u ulgy Bitch</p>
                <p className='font-bold'>Fuck u ulgy Bitch</p>
                <p className="font-light">Hello World</p>
                <p className="font-bold">Hello World</p>
                <p className="font-black">Hello World</p>
            </div>

            <div className="letter-spacing">
                <h1 className='text-center'>Letter Tracking</h1>
                <div className="letter-contaier min-h-[10rem] p-1 text-indigo-50 text-center bg-blue-700 m-10">
                    <p className='tracking-normal m-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?</p>


                    <p className='tracking-wide m-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? </p>


                    <p className='tracking-tighter m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?</p>

                    <p className='tracking-wide m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?</p>

                    <p className='tracking-tight md:tracking-wide text-indigo-50 m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?</p>
                </div>
            </div>

            <div className="line-clamp">
                <h1 className='text-center font-black text-uppercase'>CLAMP</h1>
                <p className="text-center m-5 line-clamp-2">
                    ng elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? t illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?
                </p>
            </div>
            <div className="line-height">
                <h1 className='text-center font-light text-[3rem]'>Line Height</h1>
                <p className='m-5 leading-loose'>
                    ng elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? t illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?
                </p>

                <p className='m-5 leading-8'>
                    ng elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? t illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?
                </p>

                <p className='m-5 leading-10'>
                    ng elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? t illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?
                </p>

                <p className='m-5 leading-relaxed'>
                    ng elit. Placeat illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est? t illo ut debitis, reprehenderit eum assumenda ad explicabo mollitia et odit ullam. Harum veniam nobis omnis magnam magni provident, consequatur earum ipsam quisquam libero voluptates vitae recusandae quis repellendus maxime ex beatae in quas enim et error, quia blanditiis ea? Est?
                </p>
            </div>
        </>
    )
}

export default sample