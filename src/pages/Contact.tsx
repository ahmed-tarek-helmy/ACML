import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Alex Centre for Multimedia & Libraries', 'Alexandria, Egypt'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Contact us for phone information', 'Available during business hours'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@acml-egypt.com', 'We respond within 24 hours'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 9:30 AM - 5:30 PM', 'Friday - Saturday: Closed'],
    },
  ];

  const subjects = [
    'General Inquiry',
    'Books & Periodicals',
    'Electronic Databases',
    'Library Automation',
    'Publishers',
    'Restoration Services',
    'ICT Consultancy',
    'Partnership Opportunities',
    'Other',
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Have questions about our services? Need assistance with your library solutions?
              Our team is here to help you find the right solutions for your institution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={28} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and our team will respond to your inquiry as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="+20 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your Institution"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visit Our Showroom</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Experience our full range of products and services at our Alexandria location
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/001.jpg"
                  alt="ACML Store Location"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Alex Centre for Multimedia & Libraries
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Visit us to explore our comprehensive collection of books, databases, library solutions,
                    and meet with our expert team to discuss your specific needs.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Please contact us to schedule an appointment for a personalized consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
