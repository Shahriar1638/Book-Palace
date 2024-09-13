import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [bookRatings, setBookRatings] = useState({}); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("bookCollection.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  const filterItems = (genre) => {
    const filtered =
      genre === "all"
        ? menu
        : menu.filter((item) => item.genre === genre);

    setFilteredItems(filtered);
    setSelectedCategory(genre);
    setCurrentPage(1);
  };
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };
  const handleRatingChange = (bookId, rating) => {
    setBookRatings(prevRatings => ({
      ...prevRatings,
      [bookId]: rating
    }));
  };


  // Pagination 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (

    <div className='mt-28 px-4 lg:px24'>
      <p className='text-center font-extrabold text-darkbrown '>LET'S DIVE INTO BOOKS</p>
      <div className="flex justify-end mb-4 rounded-sm">
      
        <div className="bg-darkbrown p-2 ">
          <FaFilter className="text-beige h-4 w-4" />
          
        </div>
        <select name="sort"
          id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
          value={sortOption}
          className="bg-darkbrown text-beige px-2 py-1 rounded-sm"
        >
          <option value="default"> Default</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
      <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 my-8 flex-wrap">

        <button
          onClick={showAll}
          className={selectedCategory === "all" ? "active" : "" } 
        >
          All
        </button>
        <button
          onClick={() => filterItems("Fiction")}
          className={selectedCategory === "Fiction" ? "active" : ""}
        >
          Fiction
        </button>
        <button
          onClick={() => filterItems("Thriller")}
          className={selectedCategory === "Thriller" ? "active" : ""}
        >
          Thriller
        </button>
        <button
          onClick={() => filterItems("Romance")}
          className={selectedCategory === "Romance" ? "active" : ""}
        >
          Romance
        </button>
        <button
          onClick={() => filterItems("Literary")}
          className={selectedCategory === "Literary" ? "active" : ""}
        >
          Literary
        </button>
        <button
          onClick={() => filterItems("Science")}
          className={selectedCategory === "Science" ? "active" : ""}
        >
          Science
        </button>
      </div>


      <h2 className='text-5xl font-bold text-center'></h2>
      <div className='grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
        {
          currentItem.map(menu =>
            <div className="card bg-beige w-65 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={menu.bookImage}
                  alt="books"
                  className="rounded-xl hover:scale-105 transition-all duration-200 md:h-72" />
              </figure>
              <div className="card-body items-center text-center">
                <p>{menu.bookTitle}</p>
                <p>{menu.authorName}</p>
                <p>{menu.price}</p>
                <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name={`rating-${menu.bookId}`}
                    className="mask mask-star-2 bg-green"
                    onClick={() => handleRatingChange(menu.bookId, index + 1)}
                    checked={bookRatings[menu.bookId] === index + 1}
                  />
                ))}
              </div>

                <div className="card-actions">
                  <button className="btn bg-green text-beige hover:scale-105"><a href={`/productdetail/${menu.bookId}`}>Details</a> </button>
                </div>
              </div>
            </div>
          )
        }
      </div>

      <div className="flex justify-center my-8">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-beige" : "bg-gray-200"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>




    </div>

  )
}

export default Menu