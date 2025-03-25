const Footer = () => {
    return (
      <footer className="bg-gray-100 p-10 text-left">
        <div className="max-w-6xl mx-auto">
          {/* Top Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Company Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                {["Careers", "Events", "Blogs", "Investor Relations", "Atlassian Foundation", "Contact us"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
  
            {/* Products Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Products</h3>
              <ul className="space-y-2">
                {[
                  "Rovo",
                  "Jira",
                  "Jira Align",
                  "Jira Service Management",
                  "Confluence",
                  "Trello",
                  "Bitbucket",
                  "See all products",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Resources Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Resources</h3>
              <ul className="space-y-2">
                {[
                  "Technical support",
                  "Purchasing & licensing",
                  "Atlassian Community",
                  "Knowledge base",
                  "Marketplace",
                  "My account",
                  "Create support ticket",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Learn Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Learn</h3>
              <ul className="space-y-2">
                {[
                  "Partners",
                  "Training & certification",
                  "Documentation",
                  "Developer resources",
                  "Enterprise services",
                  "See all resources",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Bottom Section: Copyright, Links, and Language Selector */}
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600">
              Copyright &copy; 2025 Team Ignited Minds
            </div>
  
            {/* Privacy Links */}
            <div className="flex space-x-4">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Privacy policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="/impressum"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Impressum
              </a>
            </div>
  
            {/* Language Selector */}
            <div>
              <select className="p-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;