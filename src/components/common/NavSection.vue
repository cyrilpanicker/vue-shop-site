<template>
  <div :class="`${position === 'header' ? 'sticky top-0' : ''}`">
    <div
      :class="`transition-all font-roboto ${position === 'header' ? 'bg-black text-white h-[80px] md:h-[100px] lg:h-[120px] sticky top-0 z-50' : 'bg-[#f1f4f1] text-black h-auto min-h-[100px] p-10 '} flex justify-center items-center px-5 md:px-10`"
    >
      <nav
        :class="`max-w-[1440px] grid ${position === 'footer' ? 'max-sm:grid-cols-1 max-sm:space-y-5 justify-center items-center max-md:grid-cols-3 grid-cols-5' : 'grid-cols-5'} w-full items-center justify-center`"
      >
        <a
          href="/"
          class="title col-span-1 text-left max-sm:text-center text-3xl"
          >CutRateStore</a
        >
        <ul
          :class="`m-auto grid text-2xl  w-[75%] max-w-[400px] text-center ${position === 'header' ? 'max-md:hidden grid-cols-4 col-span-3' : 'grid-cols-1 md:grid-cols-4 md:col-span-3'}`"
        >
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a href="#">HOME</a>
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a href="#">ABOUT</a>
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a href="#">SHOP</a>
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button
          :class="`${position !== 'header' ? 'hidden' : ''} cols-span-2 max-md:col-span-4 flex justify-end self-center items-center`"
        >
          <svg
            class="max-md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path
              d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
            />
          </svg>
          <svg
            @click="isMenuOpen = true"
            :class="`${!isMenuOpen ? 'md:hidden' : 'hidden'}`"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>
          <svg
            @click="isMenuOpen = false"
            :class="`${isMenuOpen ? 'md:hidden' : 'hidden'}`"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </button>
        <button
          :class="`${position !== 'footer' ? 'hidden' : ''} border-black cols-span-2 flex space-x-5 justify-end max-sm:justify-center self-center items-center`"
        >
          <svg
            class="self-center"
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 291.319 291.319"
            xml:space="preserve"
            fill="#3a3a3a"
          >
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  class="fill-[#3a3a3a] hover:fill-[#025048]"
                  d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659 S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"
                ></path>
                <path
                  style="fill: #ffffff"
                  d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055 v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366 C154.791,104.556,158.341,100.277,163.394,100.277z"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            class="fill-[#3a3a3a] hover:fill-[#025048]"
            width="24px"
            height="24px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#3a3a3a"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M245.65723,77.65674l-30.16407,30.16455C209.4707,177.70215,150.53809,232,80,232c-14.52441,0-26.49414-2.30273-35.57764-6.84473-7.33056-3.665-10.33349-7.59912-11.07861-8.71777a8,8,0,0,1,3.84717-11.92822c.25732-.09717,23.84814-9.15772,39.09521-26.40869a109.574,109.574,0,0,1-24.72656-24.355c-13.708-18.60352-28.206-50.91114-19.43066-99.17676a8.00023,8.00023,0,0,1,13.52832-4.22559c.35254.35156,33.64209,33.1709,74.3374,43.772L120,87.99609a48.31863,48.31863,0,0,1,48.6084-47.99267,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z"
              ></path>
            </g>
          </svg>
          <svg
            class="fill-[#3a3a3a] hover:fill-[#025048] hover:stroke-[#025048]"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            id="Camada_1"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="#3a3a3a"
          >
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"
                ></path>
                <path
                  d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"
                ></path>
                <path
                  d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            class="fill-[#3a3a3a] hover:fill-[#025048]"
            height="24px"
            width="24px"
            version="1.1"
            id="XMLID_3_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xml:space="preserve"
            stroke="#3a3a3a"
          >
            <g id="SVGRepo_iconCarrier">
              <g id="social-youtube">
                <g id="Lozenge">
                  <g>
                    <path
                      d="M23.7,7.4c0,0-0.3-1.5-0.9-2.3c-0.9-0.9-2-0.8-2.4-0.9C17.1,4,12,4,12,4l0,0c0,0-5.1,0-8.4,0.2c-0.4,0.1-1.5,0.1-2.4,1 C0.5,5.9,0.3,7.5,0.3,7.5S0,9.4,0,11.2v1.7c0,1.9,0.3,3.7,0.3,3.7s0.3,1.5,0.9,2.3c0.9,0.9,2.1,0.8,2.7,0.9C5.7,20,12,20,12,20 s5.1,0,8.4-0.2c0.4-0.1,1.5-0.1,2.4-1c0.7-0.7,0.9-2.3,0.9-2.3s0.3-1.9,0.3-3.6v-1.7C24,9.3,23.7,7.4,23.7,7.4z M9.3,15.1V8.4 l6.9,3.4L9.3,15.1z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </nav>
    </div>
    <div
      :class="`h-auto text-2xl w-full absolute transition-all duration-500 bg-[#f1f4f1] ${isMenuOpen && position === 'header' ? 'max-md:block -left-0' : '-left-full'} z-10`"
    >
      <ul class="cursor-pointer">
        <li class="px-5 py-3 hover:bg-[#fafafb]">
          <a href="">HOME</a>
        </li>
        <li class="px-5 py-3 hover:bg-[#fafafb]">
          <a href="">ABOUT</a>
        </li>
        <li class="px-5 py-3 hover:bg-[#fafafb]">
          <a href="">SHOP</a>
        </li>
        <li class="px-5 py-3 hover:bg-[#fafafb]">
          <a href="">CONTACT</a>
        </li>
      </ul>
    </div>
    <div
      :class="`${position === 'header' ? 'hidden' : ' bg-[#f1f4f1] text-[#424B4A] p-5 md:px-10 lg:px-10 xl:px-10 border-t-2 grid grid-cols-2 m-auto'}`"
    >
      <div class="col-span-1">Copyright © 2024</div>
      <div class="col-span-1 text-right">All rights reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSection',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  props: {
    position: {
      type: String,
    },
    appWidth: {
      type: Number,
      required: false,
    },
  },
  methods: {},
  watch: {
    appWidth() {
      if (this.appWidth > 768 && this.isMenuOpen) this.isMenuOpen = false
    },
  },
}
</script>

<style scoped lang="scss"></style>
