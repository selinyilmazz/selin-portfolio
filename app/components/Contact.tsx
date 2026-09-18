export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="heading-3 text-warm-black mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-deep-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="body-text text-warm-black">sselinyilmazz01@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-6 h-6 bg-deep-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="body-text text-warm-black">+90 555 555 5555</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-6 h-6 bg-deep-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="body-text text-warm-black">Istanbul, Turkey</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block body-text text-warm-black mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-burgundy focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block body-text text-warm-black mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-burgundy focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block body-text text-warm-black mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-burgundy focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}