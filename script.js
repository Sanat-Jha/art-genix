const products =  [ {
    title: "Bird Art  Colourful Painting of animal modern art By Art Genix Framed Art Print",
    category: "Nature",
    imageUrl: "designs/Bird Art  Colourful Painting of animal modern art By Art Genix Framed Art Print.png",
    productUrl: "https://www.redbubble.com/i/framed-print/Bird-Art-Colourful-Painting-of-animal-modern-art-By-Art-Genix-by-SanatJha/100668588.AJ1A3"
  },
{
    title: "Yellow and blue Horse Painting and Art",
    category: "Nature",
    imageUrl: "designs/Yellow and blue Horse Painting and Art.jpg",
    productUrl: "https://www.redbubble.com/i/framed-print/Yellow-and-blue-Horse-Painting-and-Art-By-Art-Genix-by-SanatJha/101863738.AJ1A3"
  },
{
    title: "Nature Bird Parrot Art Colourful Painting By art genix",
    category: "Nature",
    imageUrl: "designs/Nature Bird Parrot Art Colourful Painting.jpg",
    productUrl: "https://www.redbubble.com/i/framed-print/Nature-Bird-Parrot-Art-Colourful-Painting-By-art-genix-by-SanatJha/101607844.AJ1A3"
  },
{
    title: "Art Work of Lion in Bardolino Gardasee Pappelallee design",
    category: "Nature",
    imageUrl: "designs/Art Work of Lion in Bardolino Gardasee Pappelallee design.jpg",
    productUrl: "https://www.redbubble.com/people/sanatjha/works/101515903-art-work-of-lion-in-bardolino-gardasee-pappelallee-design-by-art-genix-love-animals?asc=u"
  },
{
    title: "Dolphin painting in Starry night design Ocean animals",
    category: "Nature",
    imageUrl: "designs/Dolphin painting in Starry night design Ocean animals.jpg",
    productUrl: "https://www.redbubble.com/i/framed-print/Dolphin-painting-in-Starry-night-design-Ocean-animals-By-Art-Genix-by-SanatJha/101076120.AJ1A3#&gid=1&pid=3"
  },
{
    title: "Elephant painting By Art Genix",
    category: "Nature",
    imageUrl: "designs/Elephant painting By Art Genix.jpg",
    productUrl: "https://www.redbubble.com/people/sanatjha/works/100745083-elephant-painting-by-art-genix?asc=u"
  },
{
    title: "Ferrari",
    category: "Super Car",
    imageUrl: "designs/ferrari1.jpg",
    productUrl: "https://www.redbubble.com/i/t-shirt/Ferrari-by-SanatJha/141792984.WFLAH.XYZ#&gid=1&pid=3"
  },
{
    title: "Ferrari",
    category: "Super Car",
    imageUrl: "designs/ferrari2.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Ferrari-by-SanatJha/141792738.EJUG5#&gid=1&pid=3"
  },
{
    title: "Ferrari",
    category: "Super Car",
    imageUrl: "designs/ferrari3.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Ferrari-by-SanatJha/141793159.EJUG5"
  },
{
    title: "Ferrari",
    category: "Super Car",
    imageUrl: "designs/ferrari4.jpg",
    productUrl: "https://www.redbubble.com/i/t-shirt/Ferrari-by-SanatJha/141792489.IJ6L0"
  },
{
    title: "Ferrari",
    category: "Super Car",
    imageUrl: "designs/ferrari5.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Ferrari-by-SanatJha/141725043.EJUG5"
  },
{
    title: "Cute Pet Dog",
    category: "Cute Pet",
    imageUrl: "designs/pet dog1.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cute-Pet-Dog-by-SanatJha/101145647.EJUG5#&gid=1&pid=3"
  },
{
    title: "Cute Pet Dog",
    category: "Cute Pet",
    imageUrl: "designs/pet dog2.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cute-Pet-Dog-by-SanatJha/101145768.EJUG5"
  },
{
    title: "Cute Pet Dog",
    category: "Cute Pet",
    imageUrl: "designs/pet dog3.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cute-Pet-Dog-by-SanatJha/101145685.EJUG5#&gid=1&pid=3"
  },
{
    title: "Cute Pet Dog",
    category: "Cute Pet",
    imageUrl: "designs/pet dog4.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cute-Dog-pet-by-SanatJha/101145598.EJUG5#&gid=1&pid=3"
  },
{
    title: "Love Dogs",
    category: "Cute Pet",
    imageUrl: "designs/love dogs.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Love-Dogs-A-design-for-all-the-dog-lovers-Love-animals-by-SanatJha/89091699.EJUG5#&gid=1&pid=3"
  },
{
    title: "Cool neon cat",
    category: "Cute Pet",
    imageUrl: "designs/cool neon cat.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cool-Cat-blue-Neon-glasses-by-SanatJha/88438279.EJUG5#&gid=1&pid=3"
  },
{
    title: "Cute Pet Cat",
    category: "Cute Pet",
    imageUrl: "designs/pet cat1.jpg",
    productUrl: "https://www.redbubble.com/i/sticker/Cute-and-cool-Cat-with-goggles-by-SanatJha/88623525.EJUG5#&gid=1&pid=3"
  },
]
const gridContainer = document.querySelector('.grid-container');
const paginationLinks = document.querySelector('.pagination-links');
const previousPageBtn = document.querySelector('.previous-page-btn');
const nextPageBtn = document.querySelector('.next-page-btn');
const productsPerPage = 21;
let currentPage = 1;

// Function to render products for a given page
function renderProducts(page) {
  // Clear the grid container and scroll to top
  gridContainer.innerHTML = '';
  window.scrollTo(0, 700);

  // Calculate the start and end index for the current page
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Render the products for the current page
  for (let i = startIndex; i < endIndex && i < products.length; i++) {
    const product = products[i];
    const html = `
      <div class="design-card">
        <div class="card-image">
          <img src="${product.imageUrl}" alt="${product.title}">
        </div>
        <div class="card-info">
          <h3>${product.title}</h3>
          <div class="btn-container">
            <a href="${product.productUrl}" target="_blank"class="btn btn-black">Look Products</a>
          </div>
        </div>
      </div>
    `;
    gridContainer.insertAdjacentHTML('beforeend', html);
  }
}

// Function to render the pagination links
function renderPagination() {
  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Clear the pagination links
  paginationLinks.innerHTML = '';

  // Render a link for each page
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.textContent = i;
    link.classList.add('pagination-link');
    if (i === currentPage) {
      link.classList.add('active');
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderProducts(currentPage);
      renderPagination();
    });
    paginationLinks.appendChild(link);
  }
}

// Function to go to the previous page
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage);
    renderPagination();
  }
}
function search(searchTerm) {
  const filteredProducts = products.filter((product) => {
    const titleWords = product.title.split(' ');
    const searchWords = searchTerm.split(' ');
    let matchCount = 0;

    // Count the number of words in the title that match any of the search words
    titleWords.forEach((titleWord) => {
      searchWords.forEach((searchWord) => {
        if (titleWord.toLowerCase().includes(searchWord.toLowerCase())) {
          matchCount++;
        }
      });
    });

    return matchCount > 0;
  });

  // Sort the filtered products by number of matching words
  filteredProducts.sort((a, b) => {
    const aTitleWords = a.title.split(' ');
    const bTitleWords = b.title.split(' ');
    const aMatchCount = aTitleWords.filter((titleWord) => searchTerm.toLowerCase().includes(titleWord.toLowerCase())).length;
    const bMatchCount = bTitleWords.filter((titleWord) => searchTerm.toLowerCase().includes(titleWord.toLowerCase())).length;

    return bMatchCount - aMatchCount;
  });

  // Display the filtered products in the grid
  gridContainer.innerHTML = '';
  filteredProducts.forEach((product) => {
    const html = `
      <div class="design-card">
        <div class="card-image">
          <img src="${product.imageUrl}" alt="${product.title}">
        </div>
        <div class="card-info">
          <h3>${product.title}</h3>
          <div class="btn-container">
            <a href="${product.productUrl}" target="_blank"class="btn btn-black">Look Products</a>
          </div>
        </div>
      </div>
    `;
    gridContainer.insertAdjacentHTML('beforeend', html);
  });
}

// Function to go to the next page
function goToNextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(currentPage);
    renderPagination();
  }
}

// Add event listeners for the previous and next buttons
previousPageBtn.addEventListener('click', goToPreviousPage);
nextPageBtn.addEventListener('click', goToNextPage);

// Render the initial page
renderProducts(currentPage);
renderPagination();


function category(categoryName) {
const filteredProducts = products.filter((product) => product.category && product.category.toLowerCase() === categoryName.toLowerCase());
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  
  for (let i = 0; i < 21 && i < filteredProducts.length; i++) {
    const product = filteredProducts[i];
    const html = `
      <div class="design-card">
        <div class="card-image">
          <img src="${product.imageUrl}" alt="${product.title}">
        </div>
        <div class="card-info">
          <h3>${product.title}</h3>
          <div class="btn-container">
            <a href="${product.productUrl}" target="_blank" class="btn btn-black">Look Products</a>
          </div>
        </div>
      </div>
    `;
    gridContainer.insertAdjacentHTML('beforeend', html);
  }

  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= Math.ceil(filteredProducts.length / 21); i++) {
    const pageNumber = i;
    const html = `
      <button class="pagination-btn">${pageNumber}</button>
    `;
    paginationContainer.insertAdjacentHTML('beforeend', html);
  }

  const paginationBtns = document.querySelectorAll('.pagination-btn');
  paginationBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const startIndex = index * 21;
      gridContainer.scrollTo(0, 0);
      gridContainer.innerHTML = '';
      for (let i = startIndex; i < startIndex + 21 && i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const html = `
          <div class="design-card">
            <div class="card-image">
              <img src="${product.imageUrl}" alt="${product.title}">
            </div>
            <div class="card-info">
              <h3>${product.title}</h3>
              <div class="btn-container">
                <a href="${product.productUrl}" target="_blank" class="btn btn-black">Look Products</a>
              </div>
            </div>
          </div>
        `;
        gridContainer.insertAdjacentHTML('beforeend', html);
      }
    });
  });
}






