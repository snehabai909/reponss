import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Projects = () => {
  // Sample project data - replace with your actual project information
  const projects = [
    {
      id: 5,
      title: "Mahavir Jayanti AND Vaisakhi Celebration",
      images: ["/projects/mh.png", "/projects/mh2.jpeg", "/projects/mh3.jpeg"],
      description: "NSS NIT Kurukshetra celebrated Mahavir Jayanti and Vaisakhi on April 15th in Jubilee Hall with cultural performances, community spirit, and festivity. Led by Dr. Dheeraj Kumar Sharma and Dr. Pratishtha Verma, the event featured dances, music, skits, and prize distribution. The event showcased NSS's togetherness,and community building through festive collaboration and volunteer spirit.All secretaries  were acknowledged for their dedication, making the event a vibrant success promoting unity and service.",
      date: "April 15, 2025"
    },
    {
      id: 2, 
      title: "Black Day Celebration",
      images: ["/projects/blackday.png", "/projects/blackday2.jpeg", "/projects/blackday3.jpeg"],
      description: "On 14 February, NIT Kurukshetra's NSS and NCC units commemorated Black Day to honor the 40 CRPF martyrs of the 2019 Pulwama attack. The tribute began with a formal address and a moment of silence, followed by patriotic speeches. Chief Guest Prof. (Dr.) Dixit Garg emphasized remembrance, sacrifice, and national service. A Marathon for Martyrs, led by NCC cadets, concluded the event. With participation from 250 students and smooth coordination by NSS leaders, the event promoted unity, patriotism, and deep respect for India's brave soldiers.​",
      date: "February 14, 2025"
    },
    {
      id: 1,
      title: "Makar Sankranti Celebration", 
      images: ["/projects/sank.png"],
      description: "On 14 January 2025, NSS NIT Kurukshetra celebrated Makar Sankranti with vibrant cultural performances, community participation, and festive spirit. The event featured a lamp-lighting ceremony, speeches by Prof. Dixit Garg and faculty, and engaging performances by students and children. The celebration highlighted themes of gratitude, unity, and tradition, concluding with a prize ceremony and enthusiastic audience applause.​",
      date: "January 15, 2025"
    },
    {
      id: 10,
      title: "7 Day Camp",
      images: ["/projects/7d.png", "/projects/7d2.png", "/projects/7d3.png","/projects/7d4.png"],
      description: "From 12th to 18th December 2024, the NSS unit of NIT Kurukshetra organized a 7-day camp in Sunheri Khalsa Village, engaging in various community service activities. Volunteers conducted educational programs like drawing and essay competitions, tree plantation, health awareness sessions, and career guidance. They also promoted social issues like women's hygiene and water conservation. Cultural activities included yoga, rangoli making, and movie screenings. The camp focused on community development, environmental sustainability, and youth empowerment. Volunteers and residents alike contributed to creating a positive impact, with the team returning to NIT Kurukshetra each day feeling accomplished.​",
      date: "December 12, 2024"
    },
    {
      id: 9,
      title: "Cleanliness Campaign",
      images: ["/projects/cc.png", "/projects/cc2.png"],
      description: "The NSS units of NIT Kurukshetra organized a cleanliness drive under the 'Swachhata Hi Seva' initiative on October 1, 2024, to promote civic sense among students. Dean Student Welfare, Prof. Dixit Garg, emphasized the importance of cleanliness for a happy and healthy nation. Volunteers actively participated, cleaning areas like the examination hall, canteen, and hostels. The Swachhata Pledge was taken by students, staff, and faculty. Dr. Than Singh Saini expressed gratitude to all participants, and key faculty members, including NSS Coordinator Dr. Dheeraj Sharma, Dr. Vijay Verma, Dr. Love Kumar, Dr. Chandrashekhar, and Dr. Shweta Rathi, were present during the inspiring and motivating event.​",
      date: "October 1, 2024"
    },
    {
      id: 8,
      title: "Animal Welfare Event",
      images: ["/projects/animalwelfare.png"],
      description: "Through powerful presentations, attendees were confronted with the harsh realities of animal mistreatment across various industries. Mr. Arvind did not shy away from showcasing the brutality and negligence that animals face, particularly in sectors like agriculture and fashion. This presentation served as a wake -up call, urging attendees to reflect on their roles within a consumer society and to advocate for systemic change and accountability. Key faculty members, including NSS Coordinator Dr. Dheeraj Sharma, Dr. Than Singh Saini, Dr. Love Kumar and Dr. Shweta Rathi, were present during the inspiring and motivating event. Mr. Arvind equipped the audience with knowledge about everyday products that perpetuate animal cruelty and inspired them to explore compassionate alternatives. His advocacy for a vegan lifestyle was not just about dietary changes; it was about cultivating an ethic of compassion that permeates all aspects of life, from consumer habits to daily interactions.​",
      date: "September 15, 2024"
    },
    {
      id: 7,
      title: "Introduction to the Tobacco free Campaign",
      images: ["/projects/tob.png", "/projects/tob2.png"],
      description: "The Tobacco Free campaign was a comprehensive health initiative hosted at our institution that successfully brought together students, faculty, and community members to address substance abuse issues. Throughout the event, medical experts delivered informative presentations on the harmful effects of tobacco, alcohol, and drugs, while former addicts shared powerful personal testimonies that resonated with attendees. The day featured interactive workshops on addiction recognition and prevention, alongside resource booths providing materials about support services and rehabilitation options. Students actively engaged in panel discussions exploring the socio-economic consequences of substance abuse, culminating in a collective pledge ceremony where participants committed to maintaining a tobacco-free environment. This impactful campaign not only raised critical awareness about substance abuse risks among youth but also strengthened our community's commitment to fostering a culture of health and wellness within our educational institution.​",
      date: "September 15, 2024"
    },
    {
      id: 6,
      title: "NSS Anti Ragging Event",
      images: ["/projects/nssanti.png", "/projects/nssanti2.png"],
      description: "Under the leadership of Dean Student Welfare, Prof. Dixit Garg, and guidance of Prof. Vijay Verma, the NSS unit is actively participating in Anti-Ragging Month activities. Key initiatives include setting up a selfie stand at the old administrative building to raise awareness to promote community welfare, and displaying anti-ragging posters across the campus. Through these efforts, NSS aims to foster a spirit of brotherhood and support a safe, inclusive campus environment.​",
      date: "August 14, 2024"
    },
    {
      id: 4,
      title: "Ambdekar Jayanti",
      images: ["/projects/ambedkar.png", "/projects/ambedkar2.png", "/projects/ambedkar3.png"],
      description: "On the occasion of the birth anniversary of Bharat Ratna Dr. Bhim Rao Ambedkar, NIT Kurukshetra hosted a special event to honor his legacy. Dr. Ambedkar, the principal architect of the Indian Constitution, was a pioneering figure in the fight for social justice and equality. His tireless efforts to uplift marginalized communities and challenge social discrimination left an indelible mark on Indian society.The event began with a floral tribute to Dr. Ambedkar by the Hon'ble Director Dr. V.P. Singh, Hon'ble Dean Student Welfare Dr. Dixit Garg, and chief guest Dr. Amita Gupta. In their speeches, the dignitaries highlighted Dr. Ambedkar's role in shaping the constitutional framework of India and his relentless pursuit of social reform. Dr. Ambedkar's famous words, Cultivation of mind should be the ultimate aim of human existence were a central theme throughout the event, inspiring attendees to continue striving for intellectual growth and equality.",
      date: "April 14, 2024"
    },
    {
      id: 3,
      title: "Blood Donation Campaign",
      images: ["/projects/bludon.png", "/projects/bludon2.png"],
      description: "On the occasion of the blood donation camp, Professor Dixit Garg emphasized the importance of blood donation, stating that blood cannot be produced in a scientific laboratory; it can only be developed within the human body. Hence, the significance of donating blood increases manifold. The NSS volunteers were honored with certificates of appreciation from the Haryana State Blood Transfusion Council for their dedication and support. Dr. Than Singh Saini concluded the event by expressing gratitude to all the donors, the NSS volunteer team, the LNJP Hospital staff, the Indian Red Cross Society Haryana, and the doctors and staff members from the NIT Health Center for making the camp a success.​",
      date: "April 6, 2024"
    }
  ];

  // State for selected project (for modal)
  const [selectedProject, setSelectedProject] = useState(null);
  // State for filter category
  const [filterCategory, setFilterCategory] = useState("All");
  // State for current image index in carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category and sort by date
  const filteredProjects = (filterCategory === "All" 
    ? [...projects] 
    : projects.filter(project => project.category === filterCategory))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Open modal with selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening modal
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Handle image navigation
  const nextImage = (e) => {
    e && e.preventDefault(); // Prevent default behavior if event exists
    e && e.stopPropagation(); // Stop event propagation if event exists
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = (e) => {
    e && e.preventDefault(); // Prevent default behavior if event exists
    e && e.stopPropagation(); // Stop event propagation if event exists
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Auto slide effect
  useEffect(() => {
    let interval;
    if (selectedProject) {
      interval = setInterval(() => {
        nextImage();
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [selectedProject, currentImageIndex]);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen p-6 pt-40 pb-20">
        {/* Header Section */}
        <header className="max-w-5xl mx-auto mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Our Featured Events
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions and initiatives that make a meaningful impact.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.date}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Image Carousel */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <div className="relative">
                {/* Image Carousel */}
                <div className="relative h-[500px]">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain bg-black/20"
                  />
                  
                  {/* Carousel Navigation Buttons */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm inline-block mb-4 w-fit">
                      {selectedProject.date}
                    </div>
                    <h2 className="text-4xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
              </div>
              
              {/* Modal Footer */}
              <div className="border-t border-gray-200/50 p-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 backdrop-blur-sm text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md text-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Projects;