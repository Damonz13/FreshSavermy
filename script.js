const foodData = [
    {
        name: "Nasi Lemak Set",
        restaurant: "Malay Delight",
        distance: "0.5km",
        discount: "30% OFF",
        price: "RM 4.90",
        originalPrice: "RM 7.00",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80&fm=jpg",
        timeLeft: "Until 8:30PM"
    },
    // 更多数据...
];

function renderFoodList() {
    const container = document.querySelector('.food-list');
    container.innerHTML = foodData.map(item => `
        <div class="food-card">
            <div class="food-img" style="background-image: url('${item.image}')">
                <div class="discount-tag">${item.discount}</div>
                <div class="time-left">${item.timeLeft}</div>
            </div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <p>${item.restaurant} • ${item.distance}</p>
                <span class="price">${item.price}</span>
                <span class="original-price">${item.originalPrice}</span>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderFoodList);