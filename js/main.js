
const categoriesLoad = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await response.json();
  const categories = data.data.news_category;
  displayCategories(categories);
  

}

const displayCategories = (categories) => { 
  const categories_container = document.getElementById('categories_container'); 
  
  categories.forEach((category) => {    
    // console.log(category.category_id);
    const category_div = document.createElement('div');    
 
    category_div.innerHTML =
    `    
    <a onclick="newsDetails('${category.category_id}')" class=" tab text-[#858585] text-lg font_roboto font-normal visited:text-[#815d8e] hover:text-[#5D5FEF]">${category?.category_name}</a>
    `;
    
    categories_container.appendChild(category_div);
  });
  
}

const newsDetails = async (category_id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await response.json();  
  const categoryNews = data.data;
  // console.log(category);
  const news_details_container = document.getElementById('news_details_container');
  news_details_container.innerText = '';
  categoryNews.forEach(category => {
    // console.log(category);
    const newsDiv = document.createElement('div');
    newsDiv.innerHTML =
    `
    <div class="flex gap-10 card card-side bg-base-100 shadow-[#D7D7D7] bg-white p-5 my-6">
      <figure ><img class="w-[250px] h-[300px] " src="${category?.image_url}" alt=""/></figure>
      <div class="card-body">
        <h2 class="card-title">${category?.title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
    `;



    news_details_container.appendChild(newsDiv);
    
  });

}



categoriesLoad();

