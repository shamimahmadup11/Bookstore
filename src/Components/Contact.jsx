
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>
      <p className="text-lg mb-6 text-black">Get in touch with us for any questions, comments, or feedback about our bookstore.</p>

      <form className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h2 className="text-lg font-bold mb-4 text-black">Send us a message</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="block w-full p-2 pl-10 text-sm text-gray-700 bg-white shadow"

            placeholder="Your name"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
           className="block w-full p-2 pl-10 text-sm text-gray-700 bg-white shadow"
            placeholder="Your email"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Message</span>
          <textarea
           className="block w-full p-2 pl-10 text-sm text-gray-700 bg-white shadow"
            placeholder="Your message"
          />
        </label>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send Message
        </button>
      </form>

      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2 text-black">Address</h2>
          <p className='text-black'>123 Main St, Anytown, USA 12345</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 text-black">
          <h2 className="text-lg font-bold mb-2 text-black">Phone</h2>
          <p>(555) 123-4567</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2 text-black">Email</h2>
          <p><a href="mailto:info@bookstore.com text-black">info@bookstore.com</a></p>
        </div>
      </div>

      <p className="text-lg mb-4">
        <Link to="/" className="text-gray-700 hover:text-gray-900  bg-green-500 p-2 rounded">
          Back to homepage
        </Link>
      </p>
    </div>
  );
};

export default Contact;