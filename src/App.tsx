import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  ExternalLink,
  Code,
  Palette,
  PenTool,
  ChevronDown,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Design",
      description: "Creating beautiful, responsive websites that engage users and drive results."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that delight users."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing",
      description: "Crafting compelling content that tells your story and connects with your audience."
    }
  ];

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Figma", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 font-playfair">
              Johnson<span className="text-purple-600">.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-poppins font-medium ${
                    activeSection === item 
                      ? 'text-purple-600 font-semibold transform scale-105' 
                      : 'text-gray-600 hover:text-purple-600 hover:transform hover:scale-105'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 transition-colors shadow-lg hover:shadow-xl"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-all font-poppins font-medium shadow-md hover:shadow-lg ${
                    activeSection === item 
                      ? 'text-purple-600 bg-purple-50 font-semibold shadow-lg' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-purple-600 font-medium text-lg font-poppins tracking-wide">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair">
                  Johnson Bakiyat
                  <span className="block text-purple-600 drop-shadow-lg">Gbemisola</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium font-poppins tracking-wide">Web Developer</p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-inter">
                Creating beautiful digital experiences through thoughtful design and clean code. 
                Let's bring your ideas to life!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-xl font-poppins"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a href="https://linkedin.com/in/johnson-bakiyat" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-purple-600 transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/johnson-bakiyat" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600 transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/iteoluwakishi247" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600 transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/johnson.jpg" 
                    alt="Johnson Bakiyat Gbemisola"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:shadow-3xl">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-600 drop-shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair drop-shadow-lg">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 font-playfair">
                Passionate About Creating Digital Experiences
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed font-inter">
                <p>
                  I'm Johnson Bakiyat Gbemisola, a final-year Human Kinetics student in the Faculty of Education 
                  at the University of Ilorin. My matric number is 20/25OA127.
                </p>
                <p>
                  Balancing school with my love for fashion and my student entrepreneurship is always a fun challenge. 
                  When I'm not studying or working on my business, I love to cook, catch up on sleep, and unwind by 
                  watching movies.
                </p>
                <p>
                  It's all about finding that perfect balance between academics, creativity, and personal growth!
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 font-poppins">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>Ilorin, Kwara State</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 shadow-xl hover:scale-105">
                <div className="text-3xl font-bold text-purple-600 mb-2 font-playfair">3+</div>
                <div className="text-gray-600 font-poppins">Years Experience</div>
              </div>
              <div className="bg-pink-50 p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 shadow-xl hover:scale-105">
                <div className="text-3xl font-bold text-pink-600 mb-2 font-playfair">50+</div>
                <div className="text-gray-600 font-poppins">Projects Done</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 shadow-xl hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 mb-2 font-playfair">30+</div>
                <div className="text-gray-600 font-poppins">Happy Clients</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 shadow-xl hover:scale-105">
                <div className="text-3xl font-bold text-green-600 mb-2 font-playfair">24/7</div>
                <div className="text-gray-600 font-poppins">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair drop-shadow-lg">My Services</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6 shadow-lg"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
              I offer a range of services to help bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group hover:scale-105"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair drop-shadow-lg">My Skills</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6 shadow-lg"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
              Here are the technologies and tools I work with
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900 font-poppins">{skill.name}</span>
                    <span className="text-purple-600 font-medium font-poppins">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-playfair drop-shadow-2xl">Let's Work Together</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6 shadow-2xl"></div>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto font-inter">
              Ready to start your next project? Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 font-playfair">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">Email</p>
                    <a href="mailto:adunnigbemisola29@gmail.com" className="text-purple-200 hover:text-white transition-colors font-inter">
                      adunnigbemisola29@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">Location</p>
                    <p className="text-purple-200 font-inter">Ilorin, Kwara State</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-medium mb-4 font-poppins">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/johnson-bakiyat" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/johnson-bakiyat" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com/iteoluwakishi247" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-poppins">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 placeholder-white/60 shadow-lg focus:shadow-xl transition-all duration-300 font-inter"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-poppins">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 placeholder-white/60 shadow-lg focus:shadow-xl transition-all duration-300 font-inter"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-poppins">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 placeholder-white/60 shadow-lg focus:shadow-xl transition-all duration-300 font-inter"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-poppins">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 placeholder-white/60 resize-none shadow-lg focus:shadow-xl transition-all duration-300 font-inter"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-white text-purple-900 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 font-poppins"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-inter">
              © 2024 Johnson Bakiyat Gbemisola. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;