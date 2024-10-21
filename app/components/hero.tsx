const Hero = () => {
    return (
      <div className="relative w-full h-auto flex flex-col md:flex-row items-center justify-between px-4 py-10">
        <div className="md:w-1/2 h-auto flex flex-col justify-center">
          <div className="text-[#091133] text-[32px] md:text-[50px] font-medium leading-[40px] md:leading-[66px] tracking-wide">
            Introduce Your Product Quickly & Effectively
          </div>
          <div className="text-[#505f98] text-sm md:text-lg mt-4 leading-[24px] md:leading-[30px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim.
          </div>
          <div className="flex mt-6">
            <button className="bg-[#111b47] text-white py-2 px-6 rounded-sm mr-4">
              Purchase UI Kit
            </button>
            <button className="border-2 border-[#091133] text-[#091133] py-2 px-6 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
  
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            className="w-full max-w-sm md:max-w-md h-auto object-cover"
            src="https://via.placeholder.com/144x143"
            alt="Product Image"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  