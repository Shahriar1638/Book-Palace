import React from 'react'

const Welcome = () => {
  return (
    <div className='section-container bg-beige '>
      <div className='text-center py-20'><h1 className='text-4xl md:text-5xl font-bold text-darkbrown px-200 md:leading-snug leading-snug '>BEST SELLERS</h1></div>
      <div className='py-20 flex  md:flex-row justify-between items-center ' >
        <div className='md:w-1/4 space-y-10 px-20'><img src="book1.jpg" alt="" width="600" height="600" /> <p className='font-bold'>BUCOLICA GEORGICA</p></div>
        <div className='md:w-1/4 space-y-10 px-20'><img src="book2.jpg" alt="" width="100" height="100" /><p className='font-bold'> THE ALCHEMIST</p></div>
        <div className='md:w-1/4 space-y-10 px-20'><img src="book3.jpg" alt="" width="100" height="100" /><p className='font-bold'>CARRIE ANNES WORLD</p></div>
        <div className='md:w-1/4 space-y-10 px-20'><img src="book5.jpg" alt="" width="100" height="100" /><p className='font-bold'>HEARTS AGLOW</p></div>
        <div className='md:w-1/4 space-y-10 px-20'><img src="book6.png" alt="" width="90" height="90" /><p className='font-bold'>ABANDONED KINGDOM</p></div>
      </div>







      <div className='py-5 flex flex-col md:flex-row justify-between items-center  gap-8 '>
        <div className='md:w-1/2 space-y-10 px-20'>
          <img src="logo.png "/>
          <h2 className='md:text-3xl text-2xl items-center justify-between font-bold text-darkbrown gap-4'>WELCOME TO BOOK PALACE</h2>
          <p className='text-darkbrown text-l'>Looking to buy good books , textbooks, novels or to get of your old ones. We are here to help. With thousands of new , old , exchanged books we are your trusted BOOK PALACE.</p>
        </div>
        <div className='md:w-1/2 px-100'>
          <img src="girl.png" alt="" width="400" height="400" />
        </div>

      </div>

      <div className='py-10 flex flex-col md:flex-row justify-between items-center  gap-8 '>
        <div className='md:w-1/2 px-100'>
          <img src="bookself.png" alt="" />
        </div>
        <div className='md:w-1/2 space-y-10 px-20'>
          <h2 className='md:text-5xl text-2xl items-center justify-between font-bold text-darkbrown gap-4'>MONTH'S Seller</h2>
          <p className='text-darkbrown text-l'>Best sellers of the months if you want to purchase</p>
          <a href="/menu" className="btn bg-green py-50 text-beige items-center align-middle">Purchase</a>
        </div>


      </div>









      <h3 className='text-darkbrown font-bold text-4xl px-200 py-200 text-center'>Customer's Love</h3>
      <br></br>
      <div className=" carousel flex justify-center align-center ">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center ">
          <img
            src="review1.png" 
            className="w-3/4 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center align-center ">
          <img
            src="review2.png "
            className="w-3/4 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex justify-center align-center ">
          <img
            src="review3.png"
            className="w-3/4 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full flex justify-center align-center ">
          <img
            src="review4.png"
            className="w-3/4 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Welcome