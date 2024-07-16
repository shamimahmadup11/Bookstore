import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white ">
      <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-black">Our Story</h2>
        <p className="text-lg mb-4">Welcome to Bookstore, your one-stop shop for all things books! We're a team of book lovers dedicated to providing you with the best selection of books, author interviews, and book reviews.</p>
        <p className="text-lg mb-4">Our mission is to foster a community of readers and writers, and to make reading more accessible to everyone. We believe that books have the power to transport us to new worlds, to educate us, and to inspire us.</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-black">Meet Our Founder</h2>
        <img src="founder.jpg" alt="Founder" className="w-48 h-48 rounded-full mb-4" />
        <h3 className="text-xl font-bold mb-2 text-black">Jane Doe</h3>
        <p className="text-lg mb-4">Jane is a bookworm at heart and has always been passionate about reading and sharing her love of books with others. With a background in literature and a passion for entrepreneurship, Jane decided to take the leap and create Bookstore.</p>
        <p className="text-lg mb-4">When she's not running the bookstore, Jane can be found curled up with a good book, exploring new hiking trails, or trying out new recipes in the kitchen.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2 text-black">Our Bookstore</h2>
        <p className="text-lg mb-4">Our bookstore is more than just a place to buy books - it's a community hub where readers can come together to share their love of reading. We host regular book clubs, author events, and workshops to help readers connect with each other and with the books they love.</p>
        <p className="text-lg mb-4">We're proud to offer a curated selection of books, including bestsellers, classics, and hidden gems. Our knowledgeable staff is always happy to recommend their favorite books and help you find your next great read.</p>
      </section>
    </div>
  );
};

export default About;