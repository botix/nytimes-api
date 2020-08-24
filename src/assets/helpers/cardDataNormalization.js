export const prepareCard = (input) => {

  const book = input.data.book;
  const car = input.data;

  let infoData, cardData;

  if(book){
    infoData = {
      weeksOnList: book.weeks_on_list,
      rank: book.rank,
      publisher: book.publisher,
      ISBN: book.primary_isbn10
    };

    cardData = {
      img: book.book_image,
      description: book.description,
      textButtonLeft: "More Details",
      textButtonRight: "Buy the Book",
      url: book.amazon_product_url
    };
  };

  if(car.title){
    infoData = {
      section: car.section,
      datePublished: new Date(car.published_date).toDateString(),
      dateUpdated: new Date(car.updated_date).toDateString(),
    };

    cardData = {
      img: car.multimedia[0].url,
      description: car.abstract,
      textButtonLeft: "More Details",
      textButtonRight: "Read Full Article",
      url: car.url
    };
  };


  return {
    infoData,
    cardData
  };
};


