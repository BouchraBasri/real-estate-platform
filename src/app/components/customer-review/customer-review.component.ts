import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrl: './customer-review.component.css'
})
export class CustomerReviewComponent {

}

interface Review {
  name: string;
  image: string;
  rating: string;
  text: string;
  role: string;
}

const reviews: Review[] = [
  { name: "Mike Houston", image: "images/rev1.jpg", rating: "★★★★★", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...", role: "" },
  { name: "Cameron Webster", image: "images/rev2.jpg", rating: "★★★★★", text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean...", role: "" },
  { name: "Dave Smith", image: "images/rev3.jpg", rating: "★★★★★", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...", role: "" },
  { name: "Jessica Lee", image: "images/rev4.jpg", rating: "★★★★☆", text: "A beautiful house! The layout is perfect and the kitchen is great for family gatherings.", role: "" },
  { name: "Ryan Miller", image: "images/rev5.jpg", rating: "★★★★★", text: "Amazing experience. Everything exceeded my expectations, from the first meeting to the final details.", role: "" },
  { name: "Sophia Garcia", image: "images/rev6.jpg", rating: "★★★☆☆", text: "Nice property, but some areas need renovation. Overall, it’s still a good investment.", role: "" },
  { name: "Michael Brown", image: "images/rev7.jpg", rating: "★★★★★", text: "This was an incredible experience. The agent was professional and the property was exactly as advertised.", role: "" },
  { name: "Olivia Davis", image: "images/rev8.jpg", rating: "★★★★☆", text: "Great location and amazing view. A few things could be improved, but overall it's great.", role: "" },
  { name: "James Wilson", image: "images/rev9.jpg", rating: "★★★★★", text: "The house was perfect for my family. We are loving every moment here!", role: "" },
  { name: "Emily Moore", image: "images/rev10.jpg", rating: "★★★★☆", text: "Wonderful property, but the parking area could be a little bigger.", role: "" }
];

let currentPage: number = 1;
const reviewsPerPage: number = 3;

function displayReviews(page: number): void {
  const startIndex: number = (page - 1) * reviewsPerPage;
  const endIndex: number = startIndex + reviewsPerPage;
  const currentReviews: Review[] = reviews.slice(startIndex, endIndex);

  const reviewContainer = document.getElementById("review-container");
  if (!reviewContainer) {
      console.error("Review container not found");
      return;
  }

  reviewContainer.innerHTML = ""; // Clear previous reviews

  currentReviews.forEach(review => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");

      reviewCard.innerHTML = `
          <img src="${review.image}" alt="${review.name}">
          <h3>${review.name}</h3>
          <p style="color: gold;">${review.rating}</p>
          <p>"${review.text}"</p>
          <small>${review.role}</small>
      `;
      reviewContainer.appendChild(reviewCard);
  });

  updateDots(page);
}

// Function to update the dots
function updateDots(page: number): void {
  const pagination = document.getElementById("pagination");
  if (!pagination) {
      console.error("Pagination element not found");
      return;
  }

  pagination.innerHTML = ""; // Clear previous dots

  const totalPages: number = Math.ceil(reviews.length / reviewsPerPage);

  for (let i = 1; i <= totalPages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === page) {
          dot.classList.add("active");
      }

      // Add click event to change page
      dot.addEventListener("click", () => {
          currentPage = i;
          displayReviews(currentPage);
      });

      pagination.appendChild(dot);
  }
}

// Initial display of reviews
displayReviews(currentPage);

