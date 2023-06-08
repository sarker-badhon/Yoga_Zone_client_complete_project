import React from 'react';

const YogaAbout = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row mt-24 mb-16">
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/RPbJbr1/lifebox2.jpg"
          alt=""
          className="object-cover w-full h-full rounded-r-full"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center px-4 py-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-[#fc5d95]">About Yoga</h2>
        <p className="mb-4">
        Yoga is a Sanskrit word translated as “yoke” or “union.” To yoke means to draw together, to bind together; or to unite. Its aim is to yoke or create a union of the body, mind, soul, and universal consciousness. This process of uniting the physical, mental, emotional, and spiritual aspects of ourselves is what allows yogis to experience deep states of freedom, peace and self-realization.
        </p>
        <p className="mb-4">
        Its origins are traced back thousands of years to the Upanishads, a collection of yogic texts dating from roughly 800 BC to 400 AD. While the word “yoga” was first mentioned in the Rigveda, but the first time it was used with its modern meaning is in the Katha Upanishad. This ancient spiritual text was written sometime between the 5th and 3rd century BCE.
        </p>
        <p>
        Yoga is a meditative process of self-discovery and liberation. It is a diverse collection of practices that aims to control the mind, recognize a detached witness consciousness, and free oneself from the cycle of birth and death. It teaches us to see ourselves clearly, to understand what is true about who we are, and to let go of anything that does not serve us. It helps us to become aware of our thoughts, feelings, and beliefs, and to change them when they no longer serve us. It gives us the tools to make better choices in life, and to live more fully.
        </p>
      </div>
    </div>
  );
};

export default YogaAbout;
