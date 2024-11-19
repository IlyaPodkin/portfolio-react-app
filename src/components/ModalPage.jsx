import React from "react";
import "./../styles/modal-page.css";

const ModalPage = () => {

    //Внедрить этот код по библиотеку React

    // const modal = document.querySelector(".modal");
    // const openModalBtn = document.querySelector(".circle");
    // const closeModalBtn = document.querySelector(".close-btn");

    // openModalBtn.addEventListener("click", () => {
    //     modal.style.display = "flex";
    // });
    // closeModalBtn.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });

    // window.addEventListener("click", (event) => {
    //     if (event.target === modal) {
    //         modal.style.display = "none";
    //     }
    // });

    return (
        <div class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <div class="scroll-container">
                    <div class="scroll-item">Элемент 1</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque necessitatibus magnam architecto dolore corporis, cumque harum voluptate facere laboriosam ab cupiditate libero totam optio obcaecati nisi alias! Voluptas sint ab ipsam harum esse fuga dolorem. Debitis perspiciatis necessitatibus deserunt nobis fugit atque praesentium aperiam, culpa quae nam numquam odio error obcaecati dolor in consequuntur inventore voluptatum itaque perferendis reprehenderit tempora eveniet. Vero ratione dicta fugiat aperiam iure tempora veritatis laudantium qui unde, magnam nostrum vitae nam. Maxime labore nobis, beatae debitis quis voluptatibus aspernatur? Recusandae nostrum hic nemo ducimus minima cupiditate sequi aliquid explicabo ratione. Est enim iste atque debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque necessitatibus magnam architecto dolore corporis, cumque harum voluptate facere laboriosam ab cupiditate libero totam optio obcaecati nisi alias! Voluptas sint ab ipsam harum esse fuga dolorem. Debitis perspiciatis necessitatibus deserunt nobis fugit atque praesentium aperiam, culpa quae nam numquam odio error obcaecati dolor in consequuntur inventore voluptatum itaque perferendis reprehenderit tempora eveniet. Vero ratione dicta fugiat aperiam iure tempora veritatis laudantium qui unde, magnam nostrum vitae nam. Maxime labore nobis, beatae debitis quis voluptatibus aspernatur? Recusandae nostrum hic nemo ducimus minima cupiditate sequi aliquid explicabo ratione. Est enim iste atque debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque necessitatibus magnam architecto dolore corporis, cumque harum voluptate facere laboriosam ab cupiditate libero totam optio obcaecati nisi alias! Voluptas sint ab ipsam harum esse fuga dolorem. Debitis perspiciatis necessitatibus deserunt nobis fugit atque praesentium aperiam, culpa quae nam numquam odio error obcaecati dolor in consequuntur inventore voluptatum itaque perferendis reprehenderit tempora eveniet. Vero ratione dicta fugiat aperiam iure tempora veritatis laudantium qui unde, magnam nostrum vitae nam. Maxime labore nobis, beatae debitis quis voluptatibus aspernatur? Recusandae nostrum hic nemo ducimus minima cupiditate sequi aliquid explicabo ratione. Est enim iste atque debitis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque necessitatibus magnam architecto dolore corporis, cumque harum voluptate facere laboriosam ab cupiditate libero totam optio obcaecati nisi alias! Voluptas sint ab ipsam harum esse fuga dolorem. Debitis perspiciatis necessitatibus deserunt nobis fugit atque praesentium aperiam, culpa quae nam numquam odio error obcaecati dolor in consequuntur inventore voluptatum itaque perferendis reprehenderit tempora eveniet. Vero ratione dicta fugiat aperiam iure tempora veritatis laudantium qui unde, magnam nostrum vitae nam. Maxime labore nobis, beatae debitis quis voluptatibus aspernatur? Recusandae nostrum hic nemo ducimus minima cupiditate sequi aliquid explicabo ratione. Est enim iste atque debitis.</p>
                </div>
            </div>
        </div>
    );
}

export default ModalPage;