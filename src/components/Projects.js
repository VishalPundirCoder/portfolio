import React from 'react';

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add your projects here */}
        <div className="bg-white p-4 shadow rounded border-2 border-brown-200">
          <h3 className="text-xl font-semibold">Data Visualization Dashboard</h3>
          <p className="mt-2 text-gray-600">The project aims to develop an interactive data visualization dashboard that allows users to easily access, understand, and manipulate their data. By incorporating various visual representations such as charts, graphs, and maps, the dashboard will facilitate a clearer understanding of key metrics and trends, thus driving informed decision-making. The primary objectives of the project include improving data accessibility, enhancing user interaction, and providing real-time insights into key performance indicators (KPIs). The dashboard will be tailored to meet the specific needs of stakeholders, ensuring that relevant information is readily available for analysis.

</p>
        </div>
        <div className="bg-white p-4 shadow rounded border-2 border-brown-200">
          <h3 className="text-xl font-semibold">Image gallary</h3>
          <p className="mt-2 text-gray-600">The image gallery project aims to develop a dynamic and responsive platform for showcasing images, allowing users to click on thumbnails to view larger versions. This project not only involves HTML, CSS, and JavaScript for functionality but also enhances user experience through interactive features such as modals and hover effects</p>
        </div>
        <div className="bg-white p-4 shadow rounded border-2 border-brown-200">
          <h3 className="text-xl font-semibold">E-commerce Website</h3>
          <p className="mt-2 text-gray-600">The website should offer an intuitive interface that allows visitors to navigate easily, find products, and complete purchases with minimal friction. With 60% of global eCommerce purchases happening through mobile devices, ensuring the website is mobile-friendly is crucial for maximizing reach and revenue</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
