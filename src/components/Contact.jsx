// src/components/Contact.jsx
// import React from 'react';

// const Contact = () => {
//   return (
//     <div id="contact" className="py-12 bg-white text-center">
//       <h3 className="text-3xl font-bold">Contact Me</h3>
//       <form className="mt-6 max-w-md mx-auto space-y-4">
//         <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
//         <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
//         <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="4"></textarea>
//         <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;












// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-100 text-center">
      <h3 className="text-4xl font-bold text-gray-800">Contact Me</h3>
      <p className="mt-6 text-lg text-gray-600">Feel free to reach out to me through any of the methods below:</p>
      <div className="mt-10 space-y-4">
        <p className="text-xl text-gray-700"><strong>Email:</strong> hardevs1010@gmail.com</p>
        <p className="text-xl text-gray-700"><strong>Phone:</strong> +91 9417646233</p>
        <p className="text-xl text-gray-700">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hardev-358032240/" className="text-blue-600 hover:underline">linkedin.com/in/hardev</a>
        </p>
        <p className="text-xl text-gray-700">
          <strong>GitHub:</strong> <a href="https://github.com/hardev1010" className="text-blue-600 hover:underline">github.com/Hardev</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

